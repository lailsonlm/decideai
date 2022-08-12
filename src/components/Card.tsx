import Link from "next/link";

export function Card() {
  return (
    <div className="flex flex-col w-52 md:w-64 h-full rounded-lg overflow-hidden items-center bg-gray-100">
      <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" className="w-full h-28 lg:h-[148px] object-cover" />
      <h2 className="font-heading text-xl mt-2">Restaurante A</h2>
      <div className="flex justify-end w-full">
        <Link href="/">
          <a className="m-4 text-xs font-semibold bg-yellow-400 px-2 py-1 rounded-full hover:brightness-110 transition-all">Saiba Mais</a>
        </Link>
      </div>
    </div>
  )
}