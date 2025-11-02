'use client'

import { motion } from 'framer-motion'
import { FaSearch, FaComments, FaPencilRuler, FaCode, FaRocket } from 'react-icons/fa'

const WorkMethod = () => {
  const steps = [
    {
      icon: FaSearch,
      title: 'Analyse',
      description: 'Nous ?tudions en profondeur vos besoins, votre march? et vos objectifs pour d?finir la meilleure strat?gie.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaComments,
      title: 'Conseil',
      description: 'Nos experts vous guident dans vos choix technologiques et fonctionnels pour optimiser votre investissement.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaPencilRuler,
      title: 'Design',
      description: 'Cr?ation de maquettes et prototypes interactifs pour valider l\'exp?rience utilisateur avant le d?veloppement.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaCode,
      title: 'D?veloppement',
      description: 'Nos d?veloppeurs transforment le design en code de qualit?, robuste et ?volutif avec les meilleures pratiques.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FaRocket,
      title: 'Livraison',
      description: 'Tests approfondis, mise en production et formation. Nous restons ? vos c?t?s pour assurer votre succ?s.',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  return (
    <section id="methode" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-100 rounded-full blur-3xl opacity-30 -z-10"></div>

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
            Notre <span className="gradient-text">M?thode</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un processus ?prouv? qui garantit le succ?s de votre projet digital
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg card-hover">
                    <div className="flex items-center gap-4 mb-4 justify-center lg:justify-start">
                      <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <step.icon className="text-2xl text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 font-display">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Number Circle */}
                <div className="relative flex items-center justify-center flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <span className="text-2xl font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="flex-1 hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 mb-6">
            Pr?t ? d?marrer votre projet avec nous ?
          </p>
          <a href="#contact" className="btn-primary inline-block">
            Lan?ons-nous !
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkMethod
