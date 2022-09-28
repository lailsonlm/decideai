import Link from "next/link";
import { Coffee, Confetti, Cookie, ForkKnife, Martini } from "phosphor-react";

interface TitleCategoryProps {
  slug: string;
}

export function TitleCategory({ slug }: TitleCategoryProps) {
  return (
    slug === "restaurants" ?
      <Link href={`/category/${slug}`} passHref >           
        <a className="flex items-center gap-1 md:gap-4">
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
        </a>
      </Link>
      : slug === "bars" ? 
      <Link href={`/category/${slug}`} passHref >           
        <a className="flex items-center gap-1 md:gap-4">
          <Martini 
            size={64} 
            weight="fill"
            className="hidden md:flex"
          />
          <Martini 
            size={24} 
            weight="fill"
            className="flex md:hidden"
          />
          <span className="font-heading text-2xl md:text-5xl text-white">Bares</span>
        </a>
      </Link>
      :  slug === "coffee-shops" ? 
      <Link href={`/category/${slug}`} passHref >           
        <a className="flex items-center gap-1 md:gap-4">
          <Coffee 
            size={64} 
            weight="fill"
            className="hidden md:flex"
          />
          <Coffee 
            size={24} 
            weight="fill"
            className="flex md:hidden"
          />
          <span className="font-heading text-2xl md:text-5xl text-white">Cafeterias</span>
        </a>
      </Link>
      :  slug === "candy-stores" ? 
      <Link href={`/category/${slug}`} passHref >           
        <a className="flex items-center gap-1 md:gap-4">
          <Cookie 
            size={64} 
            weight="fill"
            className="hidden md:flex"
          />
          <Cookie 
            size={24} 
            weight="fill"
            className="flex md:hidden"
          />
          <span className="font-heading text-2xl md:text-5xl text-white">Docerias</span>
        </a>
      </Link>
      : 
      <Link href={`/category/${slug}`} passHref >           
        <a className="flex items-center gap-1 md:gap-4">
          <Confetti 
            size={64} 
            weight="fill"
            className="hidden md:flex"
          />
          <Confetti 
            size={24} 
            weight="fill"
            className="flex md:hidden"
          />
          <span className="font-heading text-2xl md:text-5xl text-white">Entretenimento</span>
        </a>
      </Link>
  )
}