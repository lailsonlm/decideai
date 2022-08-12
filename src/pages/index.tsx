import Link from "next/link";
import { Coffee, Confetti, Cookie, ForkKnife, ListChecks, MagnifyingGlass, MapTrifold, Martini, Storefront } from "phosphor-react";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full h-[550px] sm:h-[648px] bg-blue-800 relative">
        <Header />
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0 max-w-[1120px] w-full mx-auto h-full px-6 sm:px-4 xl:px-0 mt-12 sm:mt-0">
          <div className="flex flex-col w-full max-w-[312px] sm:max-w-[480px] gap-2 sm:gap-4">
            <h1 className="font-heading text-white text-2xl md:text-4xl lg:text-5xl text-center sm:text-left">O que você procura está aqui, quem decide é você!</h1>
            <p className="text-gray-100 text-sm md:text-lg lg:text-xl text-center sm:text-left">Selecione a categoria e encontre diversas opções de lugares e estabelecimentos para atender a sua demanda.</p>
          </div>
          <img src="./bg_img.png" alt="Mulher segurando o celular surpresa" className='w-[312px] md:w-[480px] lg:w-full' />
        </div>

        <div className="absolute left-0 right-0 mx-auto w-full -bottom-[28px] sm:-bottom-[32px] flex items-center justify-center">
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
        </div>
      </div>

      <main className="flex flex-col justify-start max-w-[1120px] w-full mx-auto h-full mt-20 sm:mt-[144px] overflow-hidden">
        <h2 className="font-heading text-xl px-4 xl:px-0">Principais categorias</h2>
        <div className="flex w-full items-center mt-4 overflow-x-auto px-4 xl:px-0">
          <div className="flex w-full items-center bg-blue-800 text-gray-50 rounded-lg text-sm sm:text-base overflow-x-auto">
            <button className="flex flex-1 py-2 px-4 sm:py-3 gap-2 items-center justify-center rounded-l-lg bg-yellow-400 text-blue-800">
              <ForkKnife 
                size={24} 
                weight="fill"
              />
              <span>Restaurantes</span>
            </button>
            <button className="flex flex-1 py-2 px-4 sm:py-3 gap-2 items-center justify-center hover:text-blue-800 hover:bg-yellow-400 transition-colors">
              <Martini 
                size={24} 
                weight="fill"
              />
              <span>Bares</span>
            </button>
            <button className="flex flex-1 py-2 px-4 sm:py-3 gap-2 items-center justify-center hover:text-blue-800 hover:bg-yellow-400 transition-colors">
              <Coffee 
                size={24} 
                weight="fill"
              />
              <span>Cafeterias</span>
            </button>
            <button className="flex flex-1 py-2 px-4 sm:py-3 gap-2 items-center justify-center hover:text-blue-800 hover:bg-yellow-400 transition-colors">
              <Cookie 
                size={24} 
                weight="fill"
              />
              <span>Docerias</span>
            </button>
            <button className="flex flex-1 py-2 px-4 sm:py-3 gap-2 items-center justify-center hover:text-blue-800 hover:bg-yellow-400 transition-colors  rounded-r-lg">
              <Confetti 
                size={24} 
                weight="fill"
              />
              <span>Entretenimento</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-6 px-4 xl:px-0">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="flex justify-end mt-8 px-4 xl:px-0">
          <Link href="/">
            <a className="hover:underline-offset-4 hover:underline hover:font-semibold decoration-2 transition-colors text-sm md:text-md">Ver Mais</a>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row p-6 md:p-16 gap-6 md:gap-0 bg-blue-800 items-start md:items-center justify-between mt-9 md:mt-16">
          <div className="flex gap-2 text-yellow-400 items-center">
            <Storefront size={72} weight="fill" />
            <div className="flex flex-col gap-2 text-gray-50">
              <p className="font-heading text-5xl">200</p>
              <p className="text-xl">Estabelecimentos</p>
            </div>
          </div>
          <div className="flex gap-2 text-yellow-400 items-center">
            <ListChecks size={72} weight="fill" />
            <div className="flex flex-col gap-2 text-gray-50">
              <p className="font-heading text-5xl">10</p>
              <p className="text-xl">Categorias</p>
            </div>
          </div>
          <div className="flex gap-2 text-yellow-400 items-center">
            <MapTrifold size={72} weight="fill" />
            <div className="flex flex-col gap-2 text-gray-50">
              <p className="font-heading text-5xl">3</p>
              <p className="text-xl">Cidades</p>
            </div>
          </div>
        </div>
        <div className="mt-9 md:mt-16 px-4 xl:px-0">
          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  )
}


