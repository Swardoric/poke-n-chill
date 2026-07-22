import { motion } from 'motion/react'
import { SiUbereats, SiDeliveroo } from 'react-icons/si'
import { fadeUp } from '../../utils/animations'
import { RESTAURANT } from '../../data/constants'
import './Delivery.css'

export default function Delivery() {
  return (
    <section className="delivery" id="delivery">
      <motion.div
        className="delivery-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="delivery-text" variants={fadeUp} custom={0}>
          <span className="section-badge delivery-badge">🛵 Livraison</span>
          <h2 className="section-title delivery-title">
            On vous livre<br />chez vous !
          </h2>
          <p className="delivery-desc">
            Retrouvez nos pokés bowls, desserts et boissons sur vos plateformes
            de livraison préférées.
          </p>
        </motion.div>

        <motion.div className="delivery-buttons" variants={fadeUp} custom={1}>
          <a
            href={RESTAURANT.uberEatsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="delivery-btn uber"
          >
            <SiUbereats className="delivery-btn-icon" />
            <div className="delivery-btn-text">
              <span className="delivery-btn-label">Commander sur</span>
              <span className="delivery-btn-name">Uber Eats</span>
            </div>
          </a>

          <a
            href={RESTAURANT.deliverooUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="delivery-btn deliveroo"
          >
            <SiDeliveroo className="delivery-btn-icon" />
            <div className="delivery-btn-text">
              <span className="delivery-btn-label">Commander sur</span>
              <span className="delivery-btn-name">Deliveroo</span>
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
