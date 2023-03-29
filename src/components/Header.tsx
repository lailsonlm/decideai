import { useState } from 'react'
import { motion } from "framer-motion"
import { List, X } from 'phosphor-react'
import { MenuHeader } from './MenuHeader'
import Link from 'next/link'
import { headerFadeInDown, headerFadeInUp } from '../utils/animations'

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  function handleSetIsOpenMenu() {
    setIsOpenMenu((state) => !state)
  }

  return (
    <motion.header 
      className="flex items-center justify-between max-w-[1120px] w-full mx-auto py-8 px-6 sm:px-4 xl:px-0" 
      initial='initial'
      animate='animate'
    >
      <Link href="/" passHref>
        <motion.a
          variants={headerFadeInDown}
        >
          <img 
            src="/logo.svg" 
            alt="Logo da Decide Aí" 
            className='md:w-[245.65px] w-[144px]' 
          />
        </motion.a>
      </Link>
      
      <motion.div 
        className="hidden md:flex z-10"
        variants={headerFadeInUp}  
      >
        <MenuHeader />
      </motion.div>

      <button 
        className="flex md:hidden text-gray-50"
        onClick={() => setIsOpenMenu((state) => !state)}
      >
        <List size={32} />
      </button>
      
      {
        isOpenMenu ? 
        <div className='fixed flex flex-col md:hidden top-0 bottom-0 left-0 w-full h-screen bg-blue-800 z-50 overflow-y-auto'>
          <div className="flex items-center justify-between w-full mx-auto py-8 px-6">
          <Link href="/">
          <motion.a
            variants={headerFadeInDown}
          >
              <img 
                src="/logo.svg" 
                alt="Logo da Decide Aí" 
                className='md:w-[245.65px] w-[144px]' 
              />
            </motion.a>
          </Link>
            
            <button
              className="text-gray-50 text-xl"
              onClick={() => setIsOpenMenu((state) => !state)}
            >
              <X size={32} />
            </button>
          </div>
          <div className="flex w-full items-start px-6 h-full">
            <MenuHeader onSetIsOpenMenu={handleSetIsOpenMenu} />
          </div>
        </div> 
        : ''
      } 
    </motion.header>
  )
}