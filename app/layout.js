import '@styles/globals.css'
import { Inter } from 'next/font/google'
import Nav from '@components/Nav.jsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ashish Masale',
  description: 'Home · Products · About us · Recipes · Contact · Shop Now. product. Tasty Recipes with Ashish Masale. Prev Next. FARM TO FORK PROCESS. Come Visit.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <main>
        <Nav />
        {children}
      </main>
      </body>
    </html>
  )
}
