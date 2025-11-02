'use client'

import { motion } from 'framer-motion'
import { FaHeart, FaLightbulb, FaUsers, FaAward } from 'react-icons/fa'
import Image from 'next/image'

const About = () => {
  const values = [
    {
      icon: FaHeart,
      title: 'Passion',
      description: 'Nous aimons ce que nous faisons et cela se refl?te dans chaque projet',
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Toujours ? la pointe des derni?res technologies et tendances',
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Votre succ?s est notre succ?s, nous travaillons main dans la main',
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Nous visons la perfection dans chaque ligne de code',
    },
  ]

  const team = [
    {
      name: 'Sophie Martin',
      role: 'CEO & Fondatrice',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      description: 'Visionnaire passionn?e par l\'innovation digitale',
    },
    {
      name: 'Thomas Dubois',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
      description: 'Expert en architecture logicielle et DevOps',
    },
    {
      name: 'Julie Leroux',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
      description: 'Cr?ative sp?cialis?e en UX/UI et branding',
    },
    {
      name: 'Marc Petit',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80',
      description: 'D?veloppeur full-stack passionn? de clean code',
    },
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
            Une ?quipe de passionn?s d?di?e ? votre succ?s digital
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 font-display">
              Notre Vision
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Chez <strong>DigiCraft Agency</strong>, nous croyons que chaque entreprise m?rite une pr?sence digitale exceptionnelle. 
              Notre mission est de transformer vos id?es en exp?riences num?riques qui captivent, convertissent et cr?ent de la valeur.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Depuis 5 ans, nous accompagnons des entreprises de toutes tailles dans leur transformation digitale, 
              en combinant expertise technique, cr?ativit? d?bordante et approche centr?e sur l&apos;utilisateur.
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
            Nos Valeurs
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

        {/* Team */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12 font-display"
          >
            Notre ?quipe
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1 font-display">
                  {member.name}
                </h4>
                <p className="text-primary-600 font-semibold mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
