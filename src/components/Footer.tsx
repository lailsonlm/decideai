import Image from 'next/image'
import Link from 'next/link';
import { ArrowUp, InstagramLogo } from 'phosphor-react'
import { motion } from "framer-motion"
import { fadeIn, fadeInDown, fadeInUp } from '../utils/animations';

export function Footer() {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }

  return (
    <motion.footer 
      className="flex flex-col items-center justify-between bg-blue-800 text-gray-50 w-full h-full md:h-[464px] mt-9 md:mt-16 relative"
      initial='initial'
      whileInView="animate"
      viewport={{ once: true }} 
    >
      <div className='flex items-center w-full max-w-[1120px] py-6 md:py-0 px-6 xl:px-0 flex-1'>
        <div className="flex flex-col md:flex-row justify-between items-start w-full gap-8 md:gap-2">
          <motion.nav 
            className="flex gap-8 md:gap-16"
            variants={fadeInDown}  
          >
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
          </motion.nav>

          <motion.div 
            className="flex flex-col items-start md:items-end gap-3"
            variants={fadeInUp}  
          >
            <a 
              href='https://play.google.com/store/apps/details?id=com.lailsonlm.decideaimobile&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'
              target="_blank" rel="noreferrer"
            >
              <Image 
                alt='Disponível no Google Play' 
                src='https://play.google.com/intl/pt-BR/badges/static/images/badges/pt-br_badge_web_generic.png'
                width={150}  
                height={58}
              />
                
            </a>
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
          </motion.div>
        </div>
      </div>
      <motion.div 
        className='w-full flex justify-between max-w-[1120px] px-6 xl:px-0 mb-10'
        variants={fadeIn}
      >
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
      </motion.div>
    </motion.footer>
  )
}