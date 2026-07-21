import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">🍜 Poke n Chill</div>
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
          © {new Date().getFullYear()} Poke n Chill — Tous droits réservés
        </p>
        <div className="footer-payment">
          <span>💶 Espèces</span>
          <span>💳 MasterCard</span>
          <span>💳 VISA</span>
        </div>
      </div>
    </footer>
  )
}
