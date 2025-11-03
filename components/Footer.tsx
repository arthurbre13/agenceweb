'use client'

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { label: 'D?veloppement Web', href: '#services' },
      { label: 'Applications Mobiles', href: '#services' },
      { label: 'UX/UI Design', href: '#services' },
      { label: 'SEO & Marketing', href: '#services' },
    ],
    company: [
      { label: '? propos', href: '#about' },
      { label: 'Notre ?quipe', href: '#about' },
      { label: 'R?alisations', href: '#realisations' },
      { label: 'Blog', href: '#blog' },
    ],
    legal: [
      { label: 'Mentions l?gales', href: '#' },
      { label: 'Politique de confidentialit?', href: '#' },
      { label: 'CGV', href: '#' },
      { label: 'Cookies', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:bg-blue-700' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub', color: 'hover:bg-gray-800' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DC</span>
              </div>
              <span className="font-display text-2xl font-bold">DigiCraft</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Votre partenaire digital pour cr?er des exp?riences web exceptionnelles. 
              Innovation, cr?ativit? et excellence depuis 2019.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">L?gal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              ? {currentYear} DigiCraft Agency. Tous droits r?serv?s.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1">
              <span>Fait avec</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>? Paris</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
