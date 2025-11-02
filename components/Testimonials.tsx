'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Claire Dubois',
      role: 'CEO, Fashion Boutique',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      rating: 5,
      text: 'DigiCraft a transform? notre pr?sence en ligne ! Le site e-commerce qu\'ils ont cr?? a augment? nos ventes de 250% en 6 mois. Une ?quipe professionnelle et ? l\'?coute.',
    },
    {
      name: 'Pierre Moreau',
      role: 'Fondateur, TechStart',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      rating: 5,
      text: 'Excellente collaboration ! Ils ont su comprendre notre vision et la traduire en une application mobile performante. Le respect des d?lais et la qualit? du code sont exceptionnels.',
    },
    {
      name: 'Marie Laurent',
      role: 'Directrice Marketing, Gourmet Co',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      rating: 5,
      text: 'Une agence qui fait vraiment la diff?rence ! Non seulement le design est magnifique, mais le site est aussi optimis? pour le SEO. Nous avons doubl? notre trafic organique.',
    },
    {
      name: 'Alexandre Petit',
      role: 'Architecte Ind?pendant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      rating: 5,
      text: 'Mon portfolio est devenu mon meilleur outil commercial. DigiCraft a cr?? une exp?rience utilisateur fluide qui met parfaitement en valeur mon travail. Je recommande ? 100% !',
    },
    {
      name: 'Isabelle Roux',
      role: 'Propri?taire, Wellness Studio',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      rating: 5,
      text: 'L\'?quipe de DigiCraft est incroyable ! Ils ont d?velopp? notre plateforme de r?servation en ligne avec une interface intuitive. Nos clients adorent et les r?servations ont explos?.',
    },
    {
      name: 'Julien Bernard',
      role: 'Co-fondateur, FinTech Pro',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      rating: 5,
      text: 'Professionnalisme et expertise technique au rendez-vous. Notre application financi?re n?cessitait une s?curit? de pointe, et DigiCraft a livr? un produit qui d?passe toutes nos attentes.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
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
            T?moignages <span className="gradient-text">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfaction de nos clients est notre plus grande fiert?
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg card-hover relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-200">
                <FaQuoteLeft size={40} />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto"
        >
          {[
            { value: '98%', label: 'Taux de satisfaction' },
            { value: '150+', label: 'Projets livr?s' },
            { value: '4.9/5', label: 'Note moyenne' },
            { value: '100%', label: 'Clients recommandent' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold font-display gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
