import { motion } from 'motion/react'
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiCreditCard,
} from 'react-icons/fi'
import { fadeUp } from '../../utils/animations'
import { RESTAURANT, HOURS } from '../../data/constants'
import './Info.css'

export default function Info() {
  return (
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
            {HOURS.map((h) => (
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
                <p>{RESTAURANT.address}</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon pink">
                <FiPhone />
              </div>
              <div className="contact-details">
                <h4>Téléphone</h4>
                <p>
                  <a href={`tel:${RESTAURANT.phone}`}>
                    {RESTAURANT.phoneDisplay}
                  </a>
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
                  <a href={`mailto:${RESTAURANT.email}`}>
                    {RESTAURANT.email}
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
  )
}
