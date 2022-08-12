import Link from 'next/link'
import { AnchorHTMLAttributes, forwardRef, Fragment, LegacyRef } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CaretDown } from 'phosphor-react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface MyLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: string;
}

// eslint-disable-next-line react/display-name
const MyLink = forwardRef(({ href, children, ...rest }: MyLinkProps, ref: LegacyRef<HTMLAnchorElement> | undefined) => {
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
})

export function MenuHeader() {
  return (
    <nav className="flex flex-col md:flex-row md:items-start gap-8 md:gap-6 font-bold text-xl text-gray-50">
      <Link href="/">
        <a className='hover:text-yellow-400 transition-colors'>Home</a>
      </Link>

      <Menu as="div" className="relative flex flex-col md:inline-block text-left">
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
          <Menu.Items className="origin-top-right md:absolute right-0 mt-2 w-56 rounded-md md:shadow-lg bg-blue-800 md:bg-gray-50 ring-1 ring-blue-800 ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <MyLink 
                    href="/category/restaurants"
                    className={classNames(
                            active ? 'bg-gray-100 text-blue-800' : 'text-gray-50 md:text-gray-500',
                            'block px-4 py-2 md:text-sm'
                          )}
                  >
                    Restaurantes
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MyLink 
                    href="/category/bars"
                    className={classNames(
                            active ? 'bg-gray-100 text-blue-800' : 'text-gray-50 md:text-gray-500',
                            'block px-4 py-2 md:text-sm'
                          )}
                  >
                    Bares
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MyLink 
                    href="/category/coffee-shops"
                    className={classNames(
                            active ? 'bg-gray-100 text-blue-800' : 'text-gray-50 md:text-gray-500',
                            'block px-4 py-2 md:text-sm'
                          )}
                  >
                    Cafeterias
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MyLink 
                    href="/category/candy-stores"
                    className={classNames(
                            active ? 'bg-gray-100 text-blue-800' : 'text-gray-50 md:text-gray-500',
                            'block px-4 py-2 md:text-sm'
                          )}
                  >
                    Docerias
                  </MyLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <MyLink 
                    href="/category/entertainment"
                    className={classNames(
                            active ? 'bg-gray-100 text-blue-800' : 'text-gray-50 md:text-gray-500',
                            'block px-4 py-2 md:text-sm'
                          )}
                  >
                    Entretenimento
                  </MyLink>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  )
}