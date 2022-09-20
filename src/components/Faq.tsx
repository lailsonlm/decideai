import { Disclosure } from '@headlessui/react'
import { Minus, Plus } from 'phosphor-react'


export function Faq() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto w-full max-w-[928px] p-4 md:p-8 bg-gray-100 rounded-2xl">
      <div className="flex flex-col items-center gap-2 mb-8">
        <h2 className="font-heading text-2xl md:text-4xl">Dúvidas frequentes</h2>
        <p className="text-gray-500 text-sm md:text-md text-center">Se você ainda tiver outras dúvidas, sinta-se a vontade para conversar conosco, envie-nos um e-mail para <a href="mailto:suporte@decideai.com.br?subject=Outras dúvidas" className="font-semibold">suporte@decideai.com.br</a> </p>
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
              Para anunciar seu estabelecimento na nossa plataforma basta entrar em contato com nosso time através do <a href="mailto:suporte@decideai.com.br?subject=Quero anunciar meu estabelecimento" className="font-semibold">suporte@decideai.com.br</a> e nos enviar as seguintes informações: Nome do estabelecimento, uma foto (preferência no formato paisagem) representando o estabelecimento, descrição, Endereço e as principais redes (Whatsapp, Instagram e Facebook). 
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
              Oferecemos a oportunidade de destacar seu estabelecimento dos demais através de anúncios em locais específicos e estratégicos na nossa plataforma, sendo assim seu estabelecimento terá maior visibilidade e retorno elevado na procura. Para saber mais, entre em contato com nosso suporte através do <a href="mailto:suporte@decideai.com.br?subject=Quero destacar meu estabelecimento (Publicidade)" className="font-semibold">suporte@decideai.com.br</a>.
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
              No menu estão disponíveis todas as nossas categorias e na pagina principal listamos as principais delas, caso sinta falta de alguma e deseje sugerir a inclusão em nossa plataforma basta entrar em contato através do <a href="mailto:suporte@decideai.com.br?subject=Nova categoria" className="font-semibold">suporte@decideai.com.br</a> e estaremos te retornando assim que possível.
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}