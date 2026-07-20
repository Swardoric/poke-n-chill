import { motion } from 'motion/react'
import { fadeUp } from '../../utils/animations'
import { RESTAURANT } from '../../data/constants'
import './Map.css'

export default function Map() {
  return (
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
          src={RESTAURANT.mapEmbedUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </section>
  )
}
