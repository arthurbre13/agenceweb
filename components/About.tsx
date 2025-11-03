'use client'

import { motion } from 'framer-motion'
import { FaAward, FaShieldAlt, FaCogs, FaChartLine } from 'react-icons/fa'

const About = () => {
  const values = [
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Standards de qualit? ?lev?s et respect des meilleures pratiques du secteur',
    },
    {
      icon: FaShieldAlt,
      title: 'Fiabilit?',
      description: 'Solutions robustes, s?curis?es et conformes aux normes en vigueur',
    },
    {
      icon: FaCogs,
      title: 'Expertise Technique',
      description: 'Ma?trise des technologies de pointe et veille technologique continue',
    },
    {
      icon: FaChartLine,
      title: 'Performance',
      description: 'Focus sur les r?sultats mesurables et le retour sur investissement',
    },
  ]

  const stats = [
    { value: '150+', label: 'Projets livr?s' },
    { value: '50+', label: 'Entreprises clientes' },
    { value: '98%', label: 'Taux de satisfaction' },
    { value: '5 ans', label: 'D&apos;exp?rience' },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            ? propos de <span className="gradient-text">DigiCraft</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partenaire de confiance pour votre transformation digitale
          </p>
        </motion.div>

        {/* Company Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-display">
              Notre Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>DigiCraft Agency</strong> accompagne les entreprises dans leur transformation digitale 
              en concevant des solutions web sur-mesure qui r?pondent ? leurs enjeux business. 
              Nous combinons expertise technique, rigueur m?thodologique et approche orient?e r?sultats.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Depuis 5 ans, nous d?veloppons des applications web performantes pour des entreprises de tous secteurs, 
              en mettant l&apos;accent sur la scalabilit?, la s?curit? et l&apos;exp?rience utilisateur. 
              Notre approche pragmatique garantit la r?ussite de vos projets digitaux.
            </p>
          </div>
        </motion.div>

        {/* Values */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12 font-display"
          >
            Nos Engagements
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform">
                  <value.icon className="text-3xl text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2 font-display">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold font-display mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
