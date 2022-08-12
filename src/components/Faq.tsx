import { Disclosure } from '@headlessui/react'
import { Minus, Plus } from 'phosphor-react'


export function Faq() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[928px] p-4 md:p-8 bg-gray-100 rounded-2xl">
      <div className="flex flex-col items-center gap-2 mb-8">
        <h2 className="font-heading text-2xl md:text-4xl">Dúvidas frequentes</h2>
        <p className="text-gray-500 text-sm md:text-md text-center">Se você ainda tiver outras dúvidas, sinta-se a vontade para conversar conosco, envie-nos um e-mail para <a href="" className="font-semibold">suporte@decideai.com.br</a> </p>
      </div>
      <Disclosure as="div" className="border-y border-gray-300 w-full">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between items-center p-3 text-left font-bold text-blue-800 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
              <span className="w-80 sm:w-full">Como anunciar meu estabelecimento?</span>
              {
                open ? <Minus /> : <Plus size={16} weight="fill" />
              }
            </Disclosure.Button>
            <Disclosure.Panel className="px-3 pb-3 text-sm text-gray-500 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque inventore consequatur cupiditate maiores aut. Magni mollitia porro rem veniam nam nesciunt exercitationem a officiis ipsam, accusamus veritatis? Laborum, corporis?
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="border-b border-gray-300 w-full">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between items-center p-3 text-left font-bold text-blue-800 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
              <span className="w-80 sm:w-full">Como destacar meu estabelecimento dos demais?</span>
              {
                open ? <Minus /> : <Plus size={16} weight="fill" />
              }
            </Disclosure.Button>
            <Disclosure.Panel className="px-3 pb-3 text-sm text-gray-500 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque inventore consequatur cupiditate maiores aut. Magni mollitia porro rem veniam nam nesciunt exercitationem a officiis ipsam, accusamus veritatis? Laborum, corporis? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis culpa repellat, possimus voluptates officia cupiditate asperiores, fugit iusto ullam saepe distinctio ipsam quam unde quae ea itaque consequuntur, nam tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate nam eos porro ipsam debitis, neque illum dicta dolores facilis earum fugiat quia facere ut placeat. Magnam dolore reprehenderit numquam voluptatibus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, repellat voluptas? Ratione a ipsam, nihil omnis ab quae aspernatur voluptatibus ipsa tempore laborum facilis tempora sint distinctio eos, culpa itaque?
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure as="div" className="border-b border-gray-300 w-full">
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full justify-between items-center p-3 text-left font-bold text-blue-800 hover:bg-gray-300 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75">
              <span className="w-80 sm:w-full">Não encontro uma categoria específica, o que fazer?</span>
              {
                open ? <Minus /> : <Plus size={16} weight="fill" />
              }
            </Disclosure.Button>
            <Disclosure.Panel className="px-3 pb-3 text-sm text-gray-500 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo doloremque inventore consequatur cupiditate maiores aut. Magni mollitia porro rem veniam nam nesciunt exercitationem a officiis ipsam, accusamus veritatis? Laborum, corporis?
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}