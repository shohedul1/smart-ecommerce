import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Layout from '@/components/Layout'
import "slick-carousel/slick/slick.css";
import Footer from '@/components/Footer'

const urbanist = Urbanist({ subsets: ['latin'], weight: ['300', '900'] })

export const metadata: Metadata = {
  title:{
    template: "smart_shopping",
    default: "Shopping Mart - A place for all"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} w-full bg-main-bg text-darkText`}>
        <Layout>
          <Header />
          {children}
          <Footer/>
        </Layout>
      </body>
    </html>
  )
}
