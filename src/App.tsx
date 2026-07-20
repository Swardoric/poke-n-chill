import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiCreditCard,
} from 'react-icons/fi'
import { GiNoodles } from 'react-icons/gi'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'

import heroImg from './assets/hero-pho.png'
import interiorImg from './assets/restaurant-interior.png'
import './App.css'

/* ───── animation helpers ───── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

/* ───── data ───── */
const specialties = [
  { emoji: '🍜', title: 'Phở Traditionnel', desc: 'Bouillon mijoté pendant des heures, nouilles de riz et herbes fraîches.' },
  { emoji: '🥖', title: 'Bánh Mì', desc: 'Sandwich croustillant garni de viandes, pickles et coriandre.' },
  { emoji: '🥢', title: 'Bò Bún', desc: 'Vermicelles, bœuf grillé, nems et sauce nuoc-mam.' },
  { emoji: '🫕', title: 'Soupe Thaï', desc: 'Saveurs thaïlandaises épicées et parfumées au lait de coco.' },
  { emoji: '🥬', title: 'Plats Végétariens', desc: 'Une sélection de plats sains et savoureux à base de légumes.' },
  { emoji: '🍨', title: 'Desserts', desc: 'Crème glacée, fruits frais et douceurs vietnamiennes.' },
]

const hours = [
  { day: 'Lundi', time: '11h45 – 14h30 / 18h45 – 22h15' },
  { day: 'Mardi', time: '11h45 – 14h30 / 18h45 – 22h15' },
  { day: 'Mercredi', time: '11h45 – 14h30 / 18h45 – 22h15' },
  { day: 'Jeudi', time: '11h45 – 14h30 / 18h45 – 22h15' },
  { day: 'Vendredi', time: '11h45 – 14h30 / 18h45 – 22h15' },
  { day: 'Samedi', time: '11h45 – 14h15 / 18h45 – 22h15' },
  { day: 'Dimanche', time: 'Fermé', closed: true },
]

/* ───── App ───── */
function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ─── Navbar ─── */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <a href="#" className="navbar-brand">
          <GiNoodles className="brand-icon" />
          Phở 520
        </a>
        <div className="navbar-links">
          <a href="#about">À propos</a>
          <a href="#specialties">Spécialités</a>
          <a href="#horaires">Horaires</a>
          <a href="#contact">Contact</a>
          <a
            href="https://cdn.website.dish.co/media/58/85/8684167/Menu-1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-cta"
          >
            Voir la Carte
          </a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
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
              href="https://cdn.website.dish.co/media/58/85/8684167/Menu-1.pdf"
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

      {/* ─── About ─── */}
      <section className="about" id="about">
        <div className="about-container">
          <motion.div
            className="about-image-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <div className="about-image">
              <img src={interiorImg} alt="Intérieur du restaurant Phở 520" />
            </div>
            <div className="about-image-accent" />
            <div className="about-image-accent-2" />
          </motion.div>

          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span className="section-badge about-badge" variants={fadeUp} custom={0}>
              <GiNoodles /> Notre Histoire
            </motion.span>
            <motion.h2 className="section-title" variants={fadeUp} custom={1}>
              Une cuisine qui<br />vous enchante
            </motion.h2>
            <motion.p className="about-description" variants={fadeUp} custom={2}>
              La cuisine vietnamienne vous enchantera avec son exclusive variété
              de délices culinaires. Laissez-vous tenter par notre délicieuse
              cuisine et une sélection de boissons rafraîchissantes. Les
              excellentes soupes feront plaisir à tout le monde.
            </motion.p>
            <motion.p className="about-description" variants={fadeUp} custom={3}>
              Nous proposons aussi des plats végétariens — donc tout le monde
              trouvera une spécialité à son goût. Venez déguster un déjeuner
              délicieux ou un dîner chez nous !
            </motion.p>
            <motion.div className="about-features" variants={fadeUp} custom={4}>
              <div className="about-feature">
                <span className="feature-icon">🌿</span>
                <span>Fait Maison</span>
              </div>
              <div className="about-feature">
                <span className="feature-icon">🥗</span>
                <span>Options Végétariennes</span>
              </div>
              <div className="about-feature">
                <span className="feature-icon">🔥</span>
                <span>Cuisine Traditionnelle</span>
              </div>
              <div className="about-feature">
                <span className="feature-icon">💚</span>
                <span>Alimentation Saine</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Specialties ─── */}
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
          {specialties.map((item, i) => (
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

      {/* ─── Info (Hours & Contact) ─── */}
      <section className="info" id="horaires">
        <div className="info-container">
          {/* Hours */}
          <motion.div
            className="info-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <span className="section-badge hours-badge">
              <FiClock /> Horaires
            </span>
            <h3>Heures d'ouverture</h3>
            <div className="hours-list">
              {hours.map((h) => (
                <div key={h.day} className="hours-item">
                  <span className="hours-day">{h.day}</span>
                  {h.closed ? (
                    <span className="hours-closed">Fermé</span>
                  ) : (
                    <span className="hours-time">{h.time}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="info-card"
            id="contact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            custom={1}
          >
            <span className="section-badge contact-badge">
              <FiMapPin /> Contact
            </span>
            <h3>Nous trouver</h3>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon green">
                  <FiMapPin />
                </div>
                <div className="contact-details">
                  <h4>Adresse</h4>
                  <p>85 Rue Leblanc, 75015 Paris</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon pink">
                  <FiPhone />
                </div>
                <div className="contact-details">
                  <h4>Téléphone</h4>
                  <p>
                    <a href="tel:+33145511158">01 45 51 11 58</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon green">
                  <FiMail />
                </div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:pho520balard@yahoo.com">
                      pho520balard@yahoo.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon pink">
                  <FiCreditCard />
                </div>
                <div className="contact-details">
                  <h4>Paiement</h4>
                  <p>Espèces, MasterCard, VISA</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Map ─── */}
      <section className="map-section">
        <motion.div
          className="map-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <iframe
            title="Phở 520 — Plan"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2627.1!2d2.278135!3d48.8370839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701b4f58251b%3A0x5c5931309db0ee65!2s85%20Rue%20Leblanc%2C%2075015%20Paris!5e0!3m2!1sfr!2sfr!4v1"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">🍜 Phở 520</div>
          <p className="footer-tagline">
            Cuisine Vietnamienne &amp; Thaïlandaise — Paris 15e
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
          <div className="footer-divider" />
          <p className="footer-copy">
            © {new Date().getFullYear()} Phở 520 — Tous droits réservés
          </p>
          <div className="footer-payment">
            <span>💶 Espèces</span>
            <span>💳 MasterCard</span>
            <span>💳 VISA</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
