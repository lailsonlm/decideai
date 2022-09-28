import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { CaretDown, Spinner } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { SEO } from "../../components/Seo";
import { TitleCategory } from "../../components/TitleCategory";


const GET_COMPANIES_BY_CATEGORY_AND_LOCALITY_QUERY = gql`
  query GET_COMPANIES_BY_CATEGORY_AND_LOCALITY_QUERY($slug: String!, $city: City!, $cursor: String) {
    categories(where: {slug: $slug}) {
      slug
    }
    companiesConnection(
      orderBy: name_ASC
      where: {locality: {city: $city}, categories_some: {slug: $slug}}
      first: 10,
      after: $cursor,
    ) {
      edges {
        node {
          id
          name
          slug
          cover {
            url
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        pageSize
        startCursor
      }
    }
  }
`

interface GetCompanies {
  categories: {
    slug: string;
  }[];
  companiesConnection: {
    edges: {
      node: {
        id: string;
        name: string;
        slug: string;
        cover: {
          url: string;
        }
      }
    }[];
    pageInfo: {
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      pageSize: number;
      startCursor: string;
      endCursor: string;
    }
  }

}

export default function Category() {
  const [citySelected, setCitySelected] = useState("Olinda")
  const loadMoreRef = useRef(null);

  const router = useRouter()
  const slug = router.query.category
  const path = router.asPath

  const slugSEO = slug === "restaurants" ? "Restaurantes" : slug === "bars" ? "Bares" : slug === "coffee-shops" ? "Cafeterias" : slug === "candy-stores" ? "Docerias" : "Entretenimento"
 
  const { data, loading, fetchMore, error } = useQuery<GetCompanies>(GET_COMPANIES_BY_CATEGORY_AND_LOCALITY_QUERY, {
    variables: {
      city: citySelected,
      slug,
    },
    // notifyOnNetworkStatusChange: true,
  })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries.some((entry) => entry.isIntersecting)) {
        getMoreCompanies()
      }
    })

    if(loadMoreRef.current) {
      observer.observe(loadMoreRef.current)
    }

    return () => observer.disconnect();
  }, [data])

  if(!data || loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-white text-blue-800 text-lg gap-4">
        <Spinner size={24} className="animate-spin" />
        <p>Carregando...</p>
      </div>
    )
  }
  
  const companies = data.companiesConnection.edges.map(company => {
    const companyInfo = company.node
    return companyInfo
  })

  const pageInfo = data.companiesConnection.pageInfo

  function getMoreCompanies() {
    if (pageInfo.hasNextPage) {
      fetchMore({
        variables: {
          cursor: pageInfo.endCursor,
        },
      });
    }
  }

  return (
    <>
    <SEO 
      title={`Decide Aí - ${slugSEO}`}
      path={path}
    />
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full h-[175px] sm:h-[320px] bg-blue-800 relative">
        <Header />
        <div className="flex items-center gap-1 md:gap-4 max-w-[1120px] w-full mx-auto h-full px-6 sm:px-4 xl:px-0 text-yellow-400">
          <TitleCategory slug={data.categories[0].slug} />
        </div>
      </div>

      <main className="flex flex-col justify-start max-w-[1120px] w-full mx-auto h-full mt-6 overflow-hidden">     
        <div className="flex w-full py-2 px-4 xl:px-2 justify-end relative">
          <select 
            name="city" 
            id="city"
            value={citySelected}
            onChange={(e) => setCitySelected(e.target.value)}
            className="bg-gray-100 text-blue-800 font-semibold py-2 px-4 rounded-lg appearance-none w-36"
          >
            <option value="Olinda">Olinda</option>
            <option value="Paulista">Paulista</option>
            <option value="Recife">Recife</option>
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-5 xl:right-2 flex items-center pr-2 text-blue-800">
            <CaretDown size={16} weight="fill" />
          </span>
        </div>
        {companies.length 
        ?
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-8 px-4 xl:px-0">
            {companies.map(company => {
              return (
                <Card 
                  key={company.id}
                  name={company.name}
                  slug={company.slug}
                  url={company.cover.url}
                />
              )
            })}
          </div>
        : <p className="py-40 mx-auto text-center">Categoria sem estabelecimento cadastrado no momento...</p>
        }
        {pageInfo.hasNextPage ?
          <div className="flex justify-center items-center mt-8 px-4 xl:px-0 gap-4" ref={loadMoreRef}>
            <Spinner size={24} className="animate-spin" />
            <p>Carregando...</p>
          </div>
        : ''}
      </main>
      <Footer />
    </div>
    </>
  )
}

