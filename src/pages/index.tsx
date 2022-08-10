import { Coffee, Confetti, Cookie, ForkKnife, MagnifyingGlass, Martini } from "phosphor-react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full h-[648px] bg-blue-800 relative">
        <Header />
        <div className="flex items-center justify-between max-w-[1120px] w-full mx-auto h-full">
          <div className="flex flex-col w-full max-w-[480px] gap-4">
            <h1 className="font-heading text-white text-5xl">O que você procura está aqui, quem decide é você!</h1>
            <p className="text-gray-100 text-xl">Selecione a categoria e encontre diversas opções de lugares e estabelecimentos para atender a sua demanda.</p>
          </div>
          <img src="./bg_img.png" alt="" className='Mulher segurando o celular surpresa' />
        </div>

        <div className='absolute left-0 right-0 mx-auto bg-gray-100 w-full max-w-[960px] h-[64px] -bottom-[32px] rounded-lg'>
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
              className="bg-transparent w-full h-full pl-12 rounded-lg focus:outline-gray-500 focus:outline-2 placeholder:text-gray-400"
              placeholder="Pesquise por um estabelecimento"
            />
          </div>
        </div>
      </div>

      <main className="flex flex-col justify-start max-w-[1120px] w-full mx-auto h-full mt-[144px] gap-4">
        <h2 className="font-heading text-xl">Principais categorias</h2>
        <div className="flex w-full items-center bg-blue-800 text-gray-50 rounded-lg">
          <button className="flex flex-1 px-4 py-3 gap-2 items-center justify-center rounded-l-lg bg-yellow-400 text-blue-800">
            <ForkKnife 
              size={24} 
              weight="fill"
            />
            <span>Restaurantes</span>
          </button>
          <button className="flex flex-1 px-4 py-3 gap-2 items-center justify-center hover:text-blue-800 hover:bg-yellow-400 transition-colors">
            <Martini 
              size={24} 
              weight="fill"
            />
            <span>Bares</span>
          </button>
          <button className="flex flex-1 px-4 py-3 gap-2 items-center justify-center hover:text-blue-800 hover:bg-yellow-400 transition-colors">
            <Coffee 
              size={24} 
              weight="fill"
            />
            <span>Cafeterias</span>
          </button>
          <button className="flex flex-1 px-4 py-3 gap-2 items-center justify-center hover:text-blue-800 hover:bg-yellow-400 transition-colors">
            <Cookie 
              size={24} 
              weight="fill"
            />
            <span>Docerias</span>
          </button>
          <button className="flex flex-1 px-4 py-3 gap-2 items-center justify-center hover:text-blue-800 hover:bg-yellow-400 transition-colors  rounded-r-lg">
            <Confetti 
              size={24} 
              weight="fill"
            />
            <span>Entretenimento</span>
          </button>
        </div>
      </main>
    </div>
  )
}


