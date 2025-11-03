'use client'

import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Pierre Durand',
      role: 'Directeur G?n?ral, TechCorp Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      rating: 5,
      text: 'DigiCraft a d?velopp? notre plateforme SaaS en respectant scrupuleusement les d?lais et le budget. Leur expertise technique et leur professionnalisme ont ?t? d?cisifs pour le succ?s du projet.',
    },
    {
      name: 'Sophie Martin',
      role: 'DSI, FinanceGroup International',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      rating: 5,
      text: 'Une ?quipe r?active et comp?tente. Ils ont su comprendre nos enjeux m?tier et proposer des solutions innovantes adapt?es ? notre secteur. La qualit? du code et la documentation sont exemplaires.',
    },
    {
      name: 'Marc Lefebvre',
      role: 'CEO, LogistiqueXpert',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      rating: 5,
      text: 'Notre syst?me de gestion a ?t? migr? avec succ?s gr?ce ? DigiCraft. Aucune interruption de service, formation compl?te des ?quipes. Un vrai partenaire de confiance.',
    },
    {
      name: 'Anne Rousseau',
      role: 'Directrice Marketing, RetailPro',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80',
      rating: 5,
      text: 'Notre plateforme e-commerce a ?t? d?velopp?e en 3 mois avec une qualit? irr?prochable. Les performances sont au rendez-vous et le ROI est sup?rieur ? nos projections.',
    },
    {
      name: 'Thomas Bernard',
      role: 'CTO, InnovTech',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
      rating: 5,
      text: 'Excellent accompagnement sur notre transformation digitale. DigiCraft nous a aid?s ? d?finir notre roadmap et ? prioriser les d?veloppements. Une approche strat?gique tr?s appr?ci?e.',
    },
    {
      name: 'Isabelle Moreau',
      role: 'Responsable SI, Services Pro',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
      rating: 5,
      text: 'Architecture technique solide, respect des normes de s?curit? et accompagnement post-livraison excellent. DigiCraft est notre partenaire technologique privil?gi? depuis 2 ans.',
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
            Ils nous font confiance pour leurs projets strat?giques
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
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
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
            { value: '95%', label: 'Clients r?currents' },
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
