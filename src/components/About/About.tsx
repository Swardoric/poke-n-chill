import { motion } from 'motion/react'
import { GiNoodles } from 'react-icons/gi'
import { fadeUp } from '../../utils/animations'
import interiorImg from '../../assets/restaurant-interior.png'
import './About.css'

export default function About() {
  return (
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
  )
}
