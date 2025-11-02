'use client'

import { motion } from 'framer-motion'
import { FaRocket, FaArrowRight } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-purple-600 to-secondary-600"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-white"
          >
            <FaRocket className="text-accent-400" />
            <span className="font-semibold">Solutions digitales d&apos;excellence</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight"
          >
            Solutions digitales
            <br />
            <span className="text-accent-300">pour entreprises ambitieuses</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Acc?l?rez votre transformation digitale avec des solutions web performantes.
            <br className="hidden md:block" />
            D?veloppement sur-mesure, architecture scalable et accompagnement strat?gique.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <a
              href="#contact"
              className="group bg-white text-primary-700 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center space-x-2"
            >
              <span>Discuter de votre projet</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <a
              href="#realisations"
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full font-bold text-lg border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              D?couvrir nos solutions
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16"
          >
            {[
              { number: '150+', label: 'Projets livr?s' },
              { number: '98%', label: 'Taux de satisfaction' },
              { number: '5 ans', label: 'D&apos;expertise' },
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold font-display mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
