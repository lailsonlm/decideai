import Link from "next/link";
import { useState } from "react";
import { GetServerSideProps } from "next/types";
import { Coffee, Confetti, Cookie, ForkKnife, ListChecks, MapTrifold, Martini, Storefront } from "phosphor-react";
import { motion } from "framer-motion";
import { gql } from '@apollo/client';

import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { client } from "../lib/apollo";
import { SEO } from "../components/Seo";
import { fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp } from "../utils/animations";

const GET_MAIN_COMPANIES_BY_CATEGORY = gql`
  query GET_MAIN_COMPANIES_BY_CATEGORY {
    categories {
      id
      title
      slug
      companies(first: 8, orderBy: updatedAt_DESC) {
        id
        slug
        name
        cover {
          url
        }
      }
    }
    companiesConnection {
      aggregate {
        count
      }
    }
  }
`;
interface HomeProps {
  mainCategories: {
    companies: {
      id: string;
      cover: {
        url: string
      };
      name: string;
      slug: string;
    }[],
    id: string;
    slug: string;
    title: string;
  }[],
  totalCompanies: {
    aggregate: {
      count: number
    }
  }
}

export default function Home({ mainCategories, totalCompanies }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState("restaurants")

  function handleSelectCategory(category: string) {
    setSelectedCategory(category)
  }

  return (
    <>
    <SEO 
      title="Decide Aí - O que você procura está aqui | Recife, Olinda e Paulista - PE" 
      path="/"
    />
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full h-[550px] sm:h-[648px] bg-blue-800 relative">
        <Header />
        <motion.div 
          className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0 max-w-[1120px] w-full mx-auto h-full px-6 sm:px-4 xl:px-0 mt-12 sm:mt-0"
          initial='initial'
          animate='animate'
        >
          <motion.div 
            className="flex flex-col w-full max-w-[312px] sm:max-w-[480px] gap-2 sm:gap-4"
            variants={fadeInLeft}
          >
            <h1 className="font-heading text-white text-2xl md:text-4xl lg:text-5xl text-center sm:text-left">O que você procura está aqui, quem decide é você!</h1>
            <p className="text-gray-100 text-sm md:text-lg lg:text-xl text-center sm:text-left">Selecione a categoria e encontre as melhores opções de lugares e estabelecimentos para você conhecer.</p>
          </motion.div>
          <motion.img 
            src="./bg_img.png" alt="Mulher surpresa segurando o celular" className='w-[312px] md:w-[480px] lg:w-full' 
            variants={fadeIn}
          />
        </motion.div>

        {/* <div className="absolute left-0 right-0 mx-auto w-full -bottom-[28px] sm:-bottom-[32px] flex items-center justify-center">
          <div className="bg-gray-100 w-full max-w-[960px] h-14 sm:h-[64px] rounded-lg mx-6 sm:mx-4 xl:mx-0">
            <label htmlFor="search" className="sr-only">
              Pesquisar
            </label>
            <div className="relative shadow-sm h-full flex">
              <div className="pl-4 absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <MagnifyingGlass 
                  size={24} 
                  className="text-gray-400" 
                />
              </div>
              <input
                type="text"
                name="search"
                id="search"
                className="bg-transparent w-full h-full pl-12 rounded-lg focus:outline-gray-500 focus:outline-2 placeholder:text-gray-400 placeholder:text-sm  placeholder:text-md"
                placeholder="Pesquise por um estabelecimento"
              />
            </div>
          </div>
        </div> */}
      </div>

      <main className="flex flex-col justify-start max-w-[1120px] w-full mx-auto h-full mt-10 sm:mt-20 overflow-hidden">
        <a 
          href="https://www.gfilas.com.br"
          target="_blank"
          className="flex px-4 xl:px-0 mb-10" rel="noreferrer"
        >
          <motion.img 
            src="/banner_gfilas.jpg" alt="GFilas - Gestão de Fila de Espera" className='w-full' 
            variants={fadeIn}
            initial='initial'
            animate='animate'
          />
        </a>
        <motion.h2 
          className="font-heading text-xl px-4 xl:px-0"
          variants={fadeInUp}
          initial='initial'
          animate='animate'
        >
          Principais categorias
        </motion.h2>
        <motion.div 
          className="flex w-full items-center mt-4 overflow-x-auto px-4 xl:px-0"
          initial='initial'
          animate='animate'
          variants={fadeInUp}
        >
          <div className="flex w-full items-center bg-blue-800 text-gray-50 rounded-lg text-sm sm:text-base overflow-x-auto">
            <button 
              className={`flex flex-1 py-2 px-4 sm:py-3 gap-2 items-center justify-center rounded-l-lg ${selectedCategory === 'restaurants' ? 'bg-yellow-400 text-blue-800' : 'hover:text-blue-800 hover:bg-yellow-400 transition-colors' }`}
              onClick={() => handleSelectCategory("restaurants")}
            >
              <ForkKnife 
                size={24} 
                weight="fill"
              />
              <span>Restaurantes</span>
            </button>
            <button 
              className={`flex flex-1 py-2 px-4 sm:py-3 gap-2 items-center justify-center ${selectedCategory === 'bars' ? 'bg-yellow-400 text-blue-800' : 'hover:text-blue-800 hover:bg-yellow-400 transition-colors' }`}
              onClick={() => handleSelectCategory("bars")}
            >
              <Martini 
                size={24} 
                weight="fill"
              />
              <span>Bares</span>
            </button>
            <button 
              className={`flex flex-1 py-2 px-4 sm:py-3 gap-2 items-center justify-center ${selectedCategory === 'coffee-shops' ? 'bg-yellow-400 text-blue-800' : 'hover:text-blue-800 hover:bg-yellow-400 transition-colors' }`}
              onClick={() => handleSelectCategory("coffee-shops")}
            >
              <Coffee 
                size={24} 
                weight="fill"
              />
              <span>Cafeterias</span>
            </button>
            <button 
              className={`flex flex-1 py-2 px-4 sm:py-3 gap-2 items-center justify-center ${selectedCategory === 'candy-stores' ? 'bg-yellow-400 text-blue-800' : 'hover:text-blue-800 hover:bg-yellow-400 transition-colors' }`}
              onClick={() => handleSelectCategory("candy-stores")}
            >
              <Cookie 
                size={24} 
                weight="fill"
              />
              <span>Docerias</span>
            </button>
            <button 
              className={`flex flex-1 py-2 px-4 sm:py-3 gap-2 items-center justify-center rounded-r-lg ${selectedCategory === 'entertainment' ? 'bg-yellow-400 text-blue-800' : 'hover:text-blue-800 hover:bg-yellow-400 transition-colors' }`}
              onClick={() => handleSelectCategory("entertainment")}
            >
              <Confetti 
                size={24} 
                weight="fill"
              />
              <span>Entretenimento</span>
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-6 px-4 xl:px-0"
          initial='initial'
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {mainCategories.find(category => category.slug === selectedCategory)?.companies.map(company => {
            return (
              <Card 
                name={company.name} 
                slug={company.slug}
                url={company.cover.url}
                key={company.id}
              />
            )
          })}
        </motion.div>
        <div className="flex justify-end mt-8 px-4 xl:px-0">
          <Link href={`/category/${selectedCategory}`}>
            <a className="hover:underline-offset-4 hover:underline hover:font-semibold decoration-2 transition-colors text-sm md:text-md">Ver Todos</a>
          </Link>
        </div>

        <motion.div 
          className="flex flex-col md:flex-row p-6 md:p-16 gap-6 md:gap-0 bg-blue-800 items-start md:items-center justify-between mt-9 md:mt-16"
          initial='initial'
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInDown}
        >
          <motion.div className="flex gap-2 text-yellow-400 items-center" variants={fadeInLeft} 
          >
            <Storefront size={72} weight="fill" />
            <div className="flex flex-col gap-2 text-gray-50">
              <p className="font-heading text-5xl">{totalCompanies.aggregate.count}</p>
              <p className="text-xl">Estabelecimentos</p>
            </div>
          </motion.div>
          <motion.div className="flex gap-2 text-yellow-400 items-center" variants={fadeInLeft} >
            <ListChecks size={72} weight="fill" />
            <div className="flex flex-col gap-2 text-gray-50">
              <p className="font-heading text-5xl">{mainCategories.length}</p>
              <p className="text-xl">Categorias</p>
            </div>
          </motion.div>
          <motion.div className="flex gap-2 text-yellow-400 items-center" variants={fadeInLeft}>
            <MapTrifold size={72} weight="fill" />
            <div className="flex flex-col gap-2 text-gray-50">
              <p className="font-heading text-5xl">3</p>
              <p className="text-xl">Cidades</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          className="mt-9 md:mt-16 px-4 xl:px-0"
          initial='initial'
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <Faq />
        </motion.div>
      </main>
      <Footer />
    </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await client.query({ query: GET_MAIN_COMPANIES_BY_CATEGORY });
  
  return {
    props: {
      mainCategories: data.categories,
      totalCompanies: data.companiesConnection
    },
  }
}

