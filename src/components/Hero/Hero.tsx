import { motion } from 'motion/react'
import { FiCreditCard, FiPhone } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import { fadeUp, fadeIn } from '../../utils/animations'
import { MENU_URL } from '../../data/constants'
import heroImg from '../../assets/hero-pho.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <img src={heroImg} alt="Phở vietnamien fumant" />
      </div>
      <div className="hero-overlay" />

      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.span
          className="section-badge hero-badge"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          <HiOutlineSparkles /> Restaurant Vietnamien • Paris 15e
        </motion.span>

        <motion.h1
          className="hero-title"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          Phở 520
          <span>Cuisine Vietnamienne Authentique</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          Envie d'un délicieux repas ? Laissez-vous tenter par notre cuisine
          vietnamienne et thaïlandaise, préparée avec des ingrédients frais et
          des recettes traditionnelles.
        </motion.p>

        <motion.div
          className="hero-buttons"
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
        >
          <a
            href={MENU_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FiCreditCard /> Voir la Carte
          </a>
          <a href="#contact" className="btn btn-outline">
            <FiPhone /> Nous Contacter
          </a>
        </motion.div>
      </motion.div>

      <div className="hero-scroll">
        <span>Découvrir</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
