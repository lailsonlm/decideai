import Image from 'next/image'
import { ArrowUp } from 'phosphor-react'

export function Footer() {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <footer className="flex items-center justify-center bg-blue-800 text-gray-50 w-full h-[464px] mt-16 relative">
      <div className="flex flex-col justify-between w-full max-w-[1120px] h-[368px]">
        <nav className="flex gap-16">
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl">Categorias</p>
            <a href="" className='text-gray-300 hover:text-yellow-400 transition-colors'>Restaurantes</a>
            <a href="" className='text-gray-300 hover:text-yellow-400 transition-colors'>Bares</a>
            <a href="" className='text-gray-300 hover:text-yellow-400 transition-colors'>Cafeterias</a>
            <a href="" className='text-gray-300 hover:text-yellow-400 transition-colors'>Docerias</a>
            <a href="" className='text-gray-300 hover:text-yellow-400 transition-colors'>Entretenimento</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold text-xl">Sobre</p>
            <a href="" className='text-gray-300 hover:text-yellow-400 transition-colors'>Política de privacidade</a>
            <a href="" className='text-gray-300 hover:text-yellow-400 transition-colors'>Termos de uso</a>
          </div>
        </nav>

        <div className="flex flex-col items-start gap-3">
          <Image
            src="/logo.svg"
            alt="Logo da decideai"
            width={150}
            height={22}
          />
          <p className="text-sm text-gray-300">© 2022 Todos os direitos reservados.</p>
        </div>
      </div>
      <button 
        className="p-2 bg-yellow-400 flex items-center justify-center absolute right-8 bottom-8 text-blue-800 rounded-lg  hover:brightness-110 transition-all"
        onClick={scrollToTop}
      >
        <ArrowUp size={24} weight="bold" />
      </button>
    </footer>
  )
}