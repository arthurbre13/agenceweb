'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import Image from 'next/image'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')

  const categories = [
    { id: 'all', label: 'Tous' },
    { id: 'web', label: 'Applications Web' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'app', label: 'Applications Mobiles' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Plateforme E-commerce B2B',
      category: 'ecommerce',
      description: 'Marketplace B2B avec catalogue de 50K+ produits, gestion des prix dynamiques et int?gration ERP',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80',
      tags: ['Next.js', 'PostgreSQL', 'Redis'],
      link: '#',
    },
    {
      id: 2,
      title: 'Plateforme SaaS Financi?re',
      category: 'app',
      description: 'Solution de gestion financi?re multi-entit?s avec tableaux de bord personnalisables et API bancaire',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: '#',
    },
    {
      id: 3,
      title: 'Portail Client Entreprise',
      category: 'web',
      description: 'Espace client s?curis? avec gestion documentaire, facturation et suivi de projets en temps r?el',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      link: '#',
    },
    {
      id: 4,
      title: 'Syst?me de Gestion d&apos;Inventaire',
      category: 'web',
      description: 'Application web de gestion de stock multi-sites avec tra?abilit? compl?te et analytics avanc?s',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&q=80',
      tags: ['Angular', 'Django', 'PostgreSQL'],
      link: '#',
    },
    {
      id: 5,
      title: 'Plateforme de R?servation B2B',
      category: 'web',
      description: 'Syst?me de r?servation pour professionnels avec gestion des capacit?s et facturation automatis?e',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
      tags: ['Next.js', 'Prisma', 'Stripe'],
      link: '#',
    },
    {
      id: 6,
      title: 'Application Mobile RH',
      category: 'app',
      description: 'Solution mobile de gestion des temps, absences et notes de frais avec validation hi?rarchique',
      image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
      tags: ['React Native', 'Firebase', 'Cloud Functions'],
      link: '#',
    },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="realisations" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Nos <span className="gradient-text">R?alisations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Projets men?s ? bien pour des entreprises de diff?rents secteurs
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8 space-x-4 z-10">
                    <a
                      href={project.link}
                      className="bg-white text-primary-600 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors"
                      aria-label={`Voir le projet ${project.title}`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <button
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-900 hover:text-white transition-colors"
                      aria-label={`Code source de ${project.title}`}
                    >
                      <FaGithub />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-50 text-primary-700 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
