/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/AGNFvJogAiB
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'
import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { CardContent, Card } from "@/components/ui/card";
import { JSX, SVGProps } from "react";

export function PaymentHero() {
  return (
    <section className="w-full  mb-12 ">
      <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
        <div className="space-y-4 text-center">
          <p className="text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
            <CurrencyIcon className="h-6 w-6 inline-block" />
            100% de Segurança no envio e entrega imediata
            {"\n                  "}
          </p>
          <h1 className=" text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-gradient-to-r from-blue-800  to-blue-400 bg-clip-text text-transparent">
            Formas de pagamento
          </h1>
        </div>
        <div className="grid w-full flex items-center gap-4 md:gap-6 lg:grid-cols-3 justify-center">
          <Card className="p-4 flex flex-col items-center gap-2">
            <CardContent className="flex flex-col items-center gap-2">
              <img
                alt="PIX"
                className="aspect-square object-cover rounded-lg"
                height={100}
                src="/placeholder.svg"
                width={100}
              />
              <h3 className="text-lg font-bold">PIX</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-bold">
                Pagamento Rápido & fácil com PIX
              </p>
            </CardContent>
          </Card>
          <Card className="p-4 flex flex-col items-center gap-2">
            <CardContent className="flex flex-col items-center gap-2">
              <img
                alt="MONEY"
                className="aspect-square object-cover rounded-lg"
                height={100}
                src="/placeholder.svg"
                width={100}
              />
              <h3 className="text-lg font-bold">Dinheiro</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pagamento em dinheiro
              </p>
            </CardContent>
          </Card>
          <Card className="p-4 flex flex-col items-center gap-2">
            <CardContent className="flex flex-col items-center gap-2">
              <img
                alt="CARD"
                className="aspect-square object-cover rounded-lg"
                height={100}
                src="/placeholder.svg"
                width={100}
              />
              <h3 className="text-lg font-bold">Cartão</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Pagamento em crédito ou débito
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function CurrencyIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  );
}
