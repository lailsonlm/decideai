import Link from "next/link";

interface CardProps {
  name?: string;
  slug?: string;
  url?: string;
}

export function Card({ name, slug, url }: CardProps) {
  return (
    <Link href={`/company/${slug}`}>
    <a className="flex flex-col flex-1 rounded-lg overflow-hidden justify-between items-center bg-gray-100 hover:-translate-y-2 transition-transform">
      <div className="flex flex-col flex-1 w-full">
        <img src={url ? url : 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} alt="" className="w-full h-28 lg:h-[148px] object-cover" />
        <h2 className="font-heading text-md md:text-xl mt-2 px-1 text-center">{name}</h2>
      </div>
      <div className="flex justify-end w-full">
        <p className="m-4 text-xs font-semibold bg-yellow-400 px-2 py-1 rounded-full">Saiba Mais</p>
      </div>
    </a>
    </Link>
  )
}