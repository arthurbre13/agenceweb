'use client'

import { motion } from 'framer-motion'
import { FaShieldAlt, FaLock, FaUserSecret, FaServer, FaCheckCircle } from 'react-icons/fa'

const Security = () => {
  const features = [
    {
      icon: FaShieldAlt,
      title: 'Protection des donn?es',
      description: 'Conformit? RGPD et chiffrement de bout en bout',
    },
    {
      icon: FaLock,
      title: 'S?curit? renforc?e',
      description: 'Protocoles SSL/TLS et authentification multi-facteurs',
    },
    {
      icon: FaUserSecret,
      title: 'Confidentialit? garantie',
      description: 'Vos donn?es ne sont jamais partag?es avec des tiers',
    },
    {
      icon: FaServer,
      title: 'Infrastructure s?curis?e',
      description: 'H?bergement sur serveurs certifi?s avec sauvegardes quotidiennes',
    },
  ]

  const commitments = [
    'Respect strict du RGPD et des normes europ?ennes',
    'Audits de s?curit? r?guliers par des experts ind?pendants',
    'Transparence totale sur l\'utilisation de vos donn?es',
    'Droit d\'acc?s, de modification et de suppression de vos donn?es',
    'Chiffrement de toutes les communications sensibles',
    '?quipe form?e aux meilleures pratiques de cybers?curit?',
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            S?curit? & <span className="text-primary-400">Confidentialit?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Votre confiance est notre priorit?. Nous mettons tout en ?uvre pour prot?ger vos donn?es et garantir votre s?curit?.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform">
                <feature.icon className="text-3xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-display">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold mb-8 text-center font-display">
              Nos Engagements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <FaCheckCircle className="text-primary-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{commitment}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-6">
            Des questions sur notre politique de s?curit? ?
          </p>
          <a
            href="#contact"
            className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 inline-block"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Security
