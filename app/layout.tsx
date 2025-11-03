import type { Metadata } from 'next'
import { IBM_Plex_Sans, Poppins } from 'next/font/google'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-ibm-plex',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DigiCraft Agency - Solutions Web pour Entreprises',
  description: 'Partenaire technologique pour votre transformation digitale. D?veloppement d&apos;applications web sur-mesure, conseil strat?gique et expertise technique au service de votre croissance.',
  keywords: 'd?veloppement web entreprise, applications web sur-mesure, transformation digitale, conseil digital, agence web B2B, d?veloppement React Next.js',
  authors: [{ name: 'DigiCraft Agency' }],
  openGraph: {
    title: 'DigiCraft Agency - Solutions Web pour Entreprises',
    description: 'Partenaire technologique pour votre transformation digitale',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${ibmPlexSans.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
