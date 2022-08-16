import { Coffee, Confetti, Cookie, ForkKnife, Martini } from "phosphor-react";

interface TitleCategoryProps {
  slug: string;
}

export function TitleCategory({ slug }: TitleCategoryProps) {
  return (
    slug === "restaurants" ?
      <>
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
      </>
      : slug === "bars" ? 
      <>
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
      </>
      :  slug === "coffee-shops" ? 
      <>
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
      </>
      :  slug === "candy-stores" ? 
      <>
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
      </>
      : 
      <>
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
      </>
  )
}