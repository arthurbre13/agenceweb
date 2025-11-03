'use client'

import { motion } from 'framer-motion'
import { FaCode, FaPalette, FaSearch, FaProjectDiagram, FaMobile, FaShoppingCart, FaRocket, FaChartLine } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'D?veloppement Web',
      description: 'Applications web performantes et scalables construites avec React, Next.js et Node.js pour r?pondre aux exigences m?tier',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaPalette,
      title: 'Design d&apos;Interface',
      description: 'Conception d&apos;interfaces professionnelles optimis?es pour la conversion et l&apos;exp?rience utilisateur',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaSearch,
      title: 'R?f?rencement SEO',
      description: 'Strat?gies de r?f?rencement naturel pour augmenter votre visibilit? et g?n?rer des leads qualifi?s',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaProjectDiagram,
      title: 'Gestion de Projets',
      description: 'Pilotage de projet en m?thodologie agile avec suivi transparent et livraisons it?ratives',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FaMobile,
      title: 'Applications Mobiles',
      description: 'D?veloppement d&apos;applications mobiles natives et hybrides pour ?tendre votre pr?sence digitale',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: FaShoppingCart,
      title: 'Plateformes E-commerce',
      description: 'Solutions e-commerce sur-mesure avec int?gration ERP, CRM et outils de gestion avanc?s',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: FaRocket,
      title: 'Conseil Strat?gique',
      description: 'Accompagnement dans votre transformation digitale avec audit, recommandations et feuille de route',
      color: 'from-teal-500 to-green-500',
    },
    {
      icon: FaChartLine,
      title: 'Analytics & Performance',
      description: 'Mise en place d&apos;outils de mesure et d&apos;optimisation pour maximiser votre ROI',
      color: 'from-rose-500 to-pink-500',
    },
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Nos <span className="gradient-text">Expertises</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions techniques ?prouv?es pour acc?l?rer la croissance de votre entreprise
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-lg card-hover"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-3xl text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-primary-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                <span>En savoir plus</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary inline-block">
            Discutons de votre projet
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
