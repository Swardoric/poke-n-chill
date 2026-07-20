import { motion } from 'motion/react'
import { fadeUp } from '../../utils/animations'
import { SPECIALTIES } from '../../data/constants'
import './Specialties.css'

export default function Specialties() {
  return (
    <section className="specialties" id="specialties">
      <motion.div
        className="specialties-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span className="section-badge" variants={fadeUp} custom={0}>
          🍽️ Nos Spécialités
        </motion.span>
        <motion.h2 className="section-title" variants={fadeUp} custom={1}>
          Des saveurs qui voyagent
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp} custom={2}>
          Découvrez notre sélection de plats vietnamiens et thaïlandais,
          préparés avec passion et des ingrédients de qualité.
        </motion.p>
      </motion.div>

      <div className="specialties-grid">
        {SPECIALTIES.map((item, i) => (
          <motion.div
            key={item.title}
            className="specialty-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={i}
          >
            <span className="specialty-emoji">{item.emoji}</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
