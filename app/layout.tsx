import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DigiCraft Agency - Agence Web & D?veloppement Digital',
  description: 'DigiCraft Agency, votre partenaire pour la cr?ation de sites web, applications mobiles et solutions digitales innovantes. Expertise en d?veloppement web, UX/UI design et SEO.',
  keywords: 'agence web, d?veloppement web, cr?ation site internet, application mobile, UX/UI design, SEO, agence digitale',
  authors: [{ name: 'DigiCraft Agency' }],
  openGraph: {
    title: 'DigiCraft Agency - Agence Web & D?veloppement Digital',
    description: 'Votre partenaire pour la cr?ation de sites web et solutions digitales innovantes',
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
    <html lang="fr" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
