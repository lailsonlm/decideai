import Link from "next/link";
import { CaretDown, ForkKnife } from "phosphor-react";
import { useState } from "react";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function Category() {
  const [citySelected, setCitySelected] = useState("paulista")

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

      <main className="flex flex-col justify-start max-w-[1120px] w-full mx-auto h-full mt-6 overflow-hidden">     
        <div className="flex w-full py-2 px-4 xl:px-2 justify-end relative">
          <select 
            name="city" 
            id="city"
            value={citySelected}
            onChange={(e) => setCitySelected(e.target.value)}
            className="bg-gray-100 text-blue-800 font-semibold py-2 px-4 rounded-lg appearance-none w-36"
          >
            <option value="olinda">Olinda</option>
            <option value="paulista">Paulista</option>
            <option value="recife">Recife</option>
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-5 xl:right-2 flex items-center pr-2 text-blue-800">
            <CaretDown size={16} weight="fill" />
          </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-8 px-4 xl:px-0">
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
      </main>
      <Footer />
    </div>
  )
}