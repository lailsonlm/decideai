import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CaretDown } from 'phosphor-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  return (
    <header className="flex items-center justify-between max-w-[1120px] w-full mx-auto py-8">
      <Image
        src="/logo.svg"
        alt="Logo da decideai"
        width={245.65}
        height={36}
      />
      <nav className="flex gap-6 font-bold text-xl text-gray-50">
        <Link href="/">
          <a className='hover:text-yellow-400 transition-colors'>Home</a>
        </Link>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex hover:text-yellow-400 transition-colors gap-1 items-center">
            Categorias
              <CaretDown size={16} weight="fill" />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-50 ring-1 ring-blue-800 ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/category/restaurant"
                      className={classNames(
                        active ? 'bg-gray-100 text-blue-800' : 'text-gray-500',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Restaurantes
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-blue-800' : 'text-gray-500',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Bares
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-blue-800' : 'text-gray-500',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Cafeterias
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-blue-800' : 'text-gray-500',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Docerias
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-blue-800' : 'text-gray-500',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      Entretenimento
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </nav>
    </header>
  )
}