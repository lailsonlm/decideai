import Image from 'next/image'
import Link from 'next/link';
import { ArrowUp, InstagramLogo } from 'phosphor-react'

export function Footer() {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <footer className="flex flex-col items-center justify-between bg-blue-800 text-gray-50 w-full h-[385px] md:h-[464px] mt-9 md:mt-16 relative">
      <div className='flex items-center w-full max-w-[1120px] px-6 xl:px-0 flex-1'>
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-2">
          <nav className="flex gap-8 md:gap-16">
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="font-bold text-md md:text-xl">Categorias</p>
              <Link href="/category/restaurants" passHref>
                <a className='text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-md'>Restaurantes</a>
              </Link>
              <Link href="/category/bars" passHref>
                <a className='text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-md'>Bares</a>
              </Link>
              <Link href="/category/coffee-shops" passHref>
                <a className='text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-md'>Cafeterias</a>
              </Link>
              <Link href="/category/candy-stores" passHref>
                <a className='text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-md'>Docerias</a>
              </Link>
              <Link href="/category/entertainment" passHref>
                <a className='text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-md'>Entretenimento</a>
              </Link>
            </div>
            <div className="flex flex-col gap-2 md:gap-4">
              <p className="font-bold text-md md:text-xl">Sobre</p>
              <Link href="/" passHref>
                <a className='text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-md'>Política de privacidade</a>
              </Link>
              <Link href="/" passHref>
                <a className='text-gray-300 hover:text-yellow-400 transition-colors text-sm md:text-md'>Termos de uso</a>
              </Link>
            </div>
          </nav>

          <div className="flex flex-col items-start md:items-end gap-3">
            <Image
              src="/logo.svg"
              alt="Logo da decideai"
              width={150}
              height={22}
            />
            <p className="text-xs text-gray-50">Desenvolvido por
              <Link href="https://portfolio-lailsonlm.vercel.app/" passHref>
              <a target="_blank" className="text-xs text-gray-50 hover:text-yellow-400 transition-colors ml-1 font-semibold">Lailson Sobral</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between max-w-[1120px] px-6 xl:px-0 mb-10'>
        <Link href="https://www.instagram.com/decideai_oficial/" passHref>
          <a target="_blank" className="p-2 bg-yellow-400 flex items-center justify-center text-blue-800 rounded-lg hover:brightness-110 transition-all" title='Instagram'>
            <InstagramLogo size={24} weight="bold" />
          </a>
        </Link>
        <button 
          className="p-2 bg-yellow-400 flex items-center justify-center text-blue-800 rounded-lg  hover:brightness-110 transition-all"
          onClick={scrollToTop}
          title="Voltar ao topo"
        >
          <ArrowUp size={24} weight="bold" />
        </button>
      </div>
    </footer>
  )
}