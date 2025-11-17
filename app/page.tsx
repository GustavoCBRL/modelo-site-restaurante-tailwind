"use client";

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/20/solid'
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  PhoneIcon as PhoneIconOutline,
} from '@heroicons/react/24/outline'
const solutions = [
  { name: 'WhatsApp', description: 'Fale conosco pelo nosso WhatsApp.', href: 'https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20mais%20informações', icon: ChatBubbleLeftRightIcon },
  { name: 'Email', description: 'O nosso Email: exemplo@email.com', href: 'mailto:exemplo@email.com', icon: EnvelopeIcon },
  { name: 'Telefone', description: "(xx) xxxxx-xxxx", href: 'tel:+5511999999999', icon: PhoneIconOutline },
]

export default function Home() {
  return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#9c9c9c] to-[#4d4d50] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
              Conheça nosso cardápio!{''}
              <a href="/cardapio" className="font-semibold text-gray-600 dark:text-gray-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Aqui! <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl dark:text-white">
              Restaurante Exemplo
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8 dark:text-gray-400">
              Uma nova experiência gastronômica!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Popover className="relative">
                <PopoverButton className="inline-flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900 dark:text-white">
                  <span>Fale Conosco!</span>
                  <ChevronDownIcon aria-hidden="true" className="size-5" />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 bg-transparent px-4 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-gray-800 text-sm/6 outline-1 -outline-offset-1 outline-white/10">
                    <div className="p-4">
                      {solutions.map((item) => (
                        <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                          <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                            <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white" />
                          </div>
                          <div>
                            <a href={item.href} className="font-semibold text-white">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-400">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverPanel>
              </Popover>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#9c9c9c] to-[#4d4d50] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
      </div>
    
    
  );
}
