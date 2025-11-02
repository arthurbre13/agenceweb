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
    <html lang="fr" className={`${ibmPlexSans.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
