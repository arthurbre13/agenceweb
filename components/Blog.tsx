'use client'

import { motion } from 'framer-motion'
import { FaCalendar, FaUser, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

const Blog = () => {
  const articles = [
    {
      title: 'Les tendances du web design en 2024',
      excerpt: 'D?couvrez les nouvelles tendances qui vont r?volutionner le design web cette ann?e : micro-interactions, glassmorphism et bien plus...',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
      date: '15 Oct 2024',
      author: 'Julie Leroux',
      category: 'Design',
      readTime: '5 min',
    },
    {
      title: 'Optimiser les performances de votre site Next.js',
      excerpt: 'Apprenez les meilleures pratiques pour am?liorer la vitesse de chargement et l\'exp?rience utilisateur de vos applications Next.js.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      date: '10 Oct 2024',
      author: 'Marc Petit',
      category: 'D?veloppement',
      readTime: '8 min',
    },
    {
      title: 'SEO en 2024 : Ce qui change vraiment',
      excerpt: 'Les algorithmes ?voluent constamment. Voici les strat?gies SEO qui fonctionnent aujourd\'hui et comment les mettre en place.',
      image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&q=80',
      date: '5 Oct 2024',
      author: 'Sophie Martin',
      category: 'SEO',
      readTime: '6 min',
    },
  ]

  return (
    <section id="blog" className="section-padding bg-white">
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
            Blog & <span className="gradient-text">Actualit?s</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conseils, tutoriels et derni?res tendances du monde digital
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <FaCalendar className="text-primary-600" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaUser className="text-primary-600" />
                    <span>{article.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display group-hover:text-primary-600 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {article.readTime} de lecture
                  </span>
                  <a
                    href="#"
                    className="flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                  >
                    <span>Lire plus</span>
                    <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="btn-secondary inline-block"
          >
            Voir tous les articles
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
