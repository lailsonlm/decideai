import Link from "next/link";
import { CaretDown, FacebookLogo, ForkKnife, InstagramLogo, WhatsappLogo } from "phosphor-react";
import { useState } from "react";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function Company() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex flex-col w-full h-[175px] sm:h-[320px] bg-blue-800 relative">
        <Header />
        <div className="flex items-center gap-1 md:gap-4 max-w-[1120px] w-full mx-auto h-full px-6 sm:px-4 xl:px-0 text-yellow-400">
          <ForkKnife 
            size={64} 
            weight="fill"
            className="hidden md:flex"
          />
          <ForkKnife 
            size={24} 
            weight="fill"
            className="flex md:hidden"
          />
          <span className="font-heading text-2xl md:text-5xl text-white">Restaurantes</span>
        </div>

      </div>

      <main className="flex flex-col justify-start max-w-[1120px] w-full mx-auto h-full mt-6 md:mt-32 gap-6 overflow-hidden px-6 sm:px-4 xl:px-0">     
        <h2 className="font-heading text-xl md:text-5xl mt-2">Restaurante A</h2>
        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="w-full h-[184px] md:h-[330px] object-cover" />
        <p className="text-md md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet semper amet nibh varius cras tempor, malesuada et. Imperdiet turpis nam sit nisi, egestas nibh egestas. Dolor sed tristique platea sit. Feugiat sed eu aliquet pretium sem pretium mauris. Platea mauris, in turpis sit arcu mattis sed nec, at.</p>

        <div>
          <p className="text-sm md:text-md"><strong>Endereço: </strong><span>Rua Oitenta e Sete, 10</span></p>
          <p className="text-sm md:text-md"><strong>Cidade: </strong><span>Recife</span></p>
          <p className="text-sm md:text-md"><strong>Bairro: </strong><span>Boa Viagem</span></p>
        </div>

        <div className="flex gap-6">
          <InstagramLogo size={48} weight="fill" />
          <WhatsappLogo size={48} weight="fill" />
          <FacebookLogo size={48} weight="fill" />
        </div>
      </main>
      <Footer />
    </div>
  )
}