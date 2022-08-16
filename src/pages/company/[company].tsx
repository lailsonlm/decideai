import { gql } from "@apollo/client";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TitleCategory } from "../../components/TitleCategory";
import { client } from "../../lib/apollo";

const GET_COMPANY_QUERY = gql`
  query GET_COMPANY_QUERY($slugCompany: String!) {
  company(where: {slug: $slugCompany}) {
    name
    id
    description
    adress
    numberAdress
    locality {
      city
    }
    district
    cover {
      url
    }
    categories {
      slug
    }
    whatsapp
    facebookUrl
    instagramUrl
  }
}
`
interface CompanyProps {
  company: {
    id: string;
    name: string;
    adress: string;
    description: string;
    district: string;
    numberAdress: string;
    cover: {
      url: string;
    }
    categories: {
      slug: string;
    }[]
    locality: {
      city: string;
    }
    whatsapp: string;
    facebookUrl: string;
    instagramUrl: string;
  }
}

export default function Company({ company }: CompanyProps) {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full h-[175px] sm:h-[320px] bg-blue-800 relative">
        <Header />
        <div className="flex items-center gap-1 md:gap-4 max-w-[1120px] w-full mx-auto h-full px-6 sm:px-4 xl:px-0 text-yellow-400">
          <TitleCategory slug={company.categories[0].slug} />
        </div>

      </div>

      <main className="flex flex-col justify-start max-w-[1120px] w-full mx-auto h-full mt-6 md:mt-32 gap-6 overflow-hidden px-6 sm:px-4 xl:px-0">     
        <h2 className="font-heading text-xl md:text-5xl mt-2">{company.name}</h2>
        <img src={company.cover.url} alt="" className="w-full h-[184px] md:h-[330px] object-cover" />
        <p className="text-md md:text-xl">{company.description && company.description}</p>

        <div>
          <p className="text-sm md:text-md"><strong>Endereço: </strong><span>{company.adress}, {company.numberAdress ? company.numberAdress : 'S/N'}</span></p>
          <p className="text-sm md:text-md"><strong>Cidade: </strong><span>{company.locality.city}</span></p>
          <p className="text-sm md:text-md"><strong>Bairro: </strong><span>{company.district}</span></p>
        </div>

        <div className="flex gap-2">
          {company.whatsapp &&
            <Link href={`https://wa.me/55${company.whatsapp}`} passHref >
              <a target="_blank">
                <WhatsappLogo size={32} weight="fill" className="hover:text-blue-500 transition-colors cursor-pointer" />
              </a>
            </Link>
          }

          {company.instagramUrl &&
            <Link href={company.instagramUrl} passHref >
              <a target="_blank">
                <InstagramLogo size={32} weight="fill" className="hover:text-blue-500 transition-colors cursor-pointer" />
              </a>
            </Link>
          }

          {company.facebookUrl &&
            <Link href={company.facebookUrl} passHref >
              <a target="_blank">
                <FacebookLogo size={32} weight="fill" className="hover:text-blue-500 transition-colors cursor-pointer" />
              </a>
            </Link>
          }
          
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug = ctx.params?.company
  
  const { data } = await client.query({ 
    query: GET_COMPANY_QUERY,
    variables: {
      slugCompany: slug,
    }
  });

  return {
    props: {
      company: data.company
    },
    revalidate: 60 * 60 // 1hr
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

