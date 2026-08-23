import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'motion/react'
import { fadeUp } from '../../utils/animations'
import {
  POKE_STEPS,
  POKE_BASE_PRICE,
  CROUSTY_TACO_BASE,
  CROUSTY_TACOS,
  SUSHI_ROLLS,
  SIDE_ITEMS,
  SIDE_CATEGORIES,
  type SideCategory,
} from '../../data/constants'
import './Menu.css'

/* ───── Poké Composition Display ───── */

function PokeComposition() {
  return (
    <div className="composer">
      {POKE_STEPS.map((step, idx) => (
        <motion.div
          key={step.id}
          className="composer-section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={idx}
        >
          <div className="composer-section-header">
            <span className="composer-section-num">{idx + 1}</span>
            <span className="composer-section-emoji">{step.emoji}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.subtitle}</p>
            </div>
          </div>

          <div className="composer-options">
            {step.options.map((opt) => (
              <div key={opt.name} className="composer-chip">
                <span className="chip-emoji">{opt.emoji}</span>
                <span className="chip-name">{opt.name}</span>
                {opt.extra && (
                  <span className="chip-extra">+{opt.extra.toFixed(2).replace('.', ',')} €</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      <div className="composer-price-bar">
        <span>Bowl à composer à partir de</span>
        <strong>{POKE_BASE_PRICE.toFixed(2).replace('.', ',')} €</strong>
      </div>
    </div>
  )
}

/* ───── Side items (desserts & boissons) ───── */

function SideMenu() {
  const [filter, setFilter] = useState<SideCategory | 'all'>('all')
  const filtered =
    filter === 'all' ? SIDE_ITEMS : SIDE_ITEMS.filter((i) => i.category === filter)

  return (
    <div className="sides">
      <div className="sides-tabs">
        {SIDE_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`menu-tab ${filter === cat.key ? 'active' : ''}`}
            onClick={() => setFilter(cat.key)}
          >
            <span className="menu-tab-emoji">{cat.emoji}</span>
            {cat.label}
            {filter === cat.key && (
              <motion.div
                className="menu-tab-indicator"
                layoutId="side-tab"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      <LayoutGroup>
        <motion.div className="sides-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id + item.category}
                className="menu-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="menu-card-emoji">{item.emoji}</div>
                <div className="menu-card-body">
                  {item.popular && <span className="menu-card-badge">⭐ Populaire</span>}
                  <div className="menu-card-header">
                    <h3>{item.name}</h3>
                    <span className="menu-card-price">
                      {item.price.toFixed(2).replace('.', ',')} €
                    </span>
                  </div>
                  <p className="menu-card-desc">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  )
}

/* ───── Main Menu section ───── */

export default function Menu() {
  return (
    <section className="menu" id="menu">
      {/* Header */}
      <motion.div
        className="menu-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span className="section-badge menu-badge" variants={fadeUp} custom={0}>
          🥗 Compose ton Bowl
        </motion.span>
        <motion.h2 className="section-title" variants={fadeUp} custom={1}>
          Crée ton poké
        </motion.h2>
        <motion.p className="section-subtitle" variants={fadeUp} custom={2}>
          Choisis ta base, ta protéine, tes toppings et ta sauce pour composer
          le bowl parfait. À partir de {POKE_BASE_PRICE.toFixed(2).replace('.', ',')} €.
        </motion.p>
      </motion.div>

      {/* Poké Composition */}
      <PokeComposition />

      {/* Crousty Tacos */}
      <motion.div
        className="tacos-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.span className="section-badge tacos-badge" variants={fadeUp} custom={0}>
          🌮 Crousty Tacos
        </motion.span>
        <motion.h2 className="section-title tacos-title" variants={fadeUp} custom={1}>
          Nos Crousty Tacos
        </motion.h2>

        {/* Base commune */}
        <motion.div className="tacos-base" variants={fadeUp} custom={2}>
          <h4 className="tacos-base-title">🍽️ Base commune à tous les tacos</h4>
          <div className="tacos-base-chips">
            {CROUSTY_TACO_BASE.map((item) => (
              <span key={item} className="composer-chip">
                <span className="chip-name">{item}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Variantes */}
        <motion.div className="tacos-grid" variants={fadeUp} custom={3}>
          {CROUSTY_TACOS.map((taco) => (
            <div key={taco.id} className="taco-card">
              <span className="taco-card-emoji">{taco.emoji}</span>
              <div className="taco-card-body">
                <h3>{taco.name}</h3>
                <p>{taco.protein}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Sushi Rolls */}
      <motion.div
        className="rolls-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.span className="section-badge rolls-badge" variants={fadeUp} custom={0}>
          🍣 Sushi
        </motion.span>
        <motion.h2 className="section-title rolls-title" variants={fadeUp} custom={1}>
          Nos Rolls
        </motion.h2>

        <motion.div className="rolls-grid" variants={fadeUp} custom={2}>
          {SUSHI_ROLLS.map((roll) => (
            <div key={roll.id} className="roll-card">
              <span className="roll-card-emoji">{roll.emoji}</span>
              <div className="roll-card-body">
                <div className="roll-card-header">
                  <h3>{roll.name}</h3>
                  <span className="roll-card-price">
                    {roll.price.toFixed(2).replace('.', ',')} €
                  </span>
                </div>
                <p>{roll.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Desserts & Boissons */}
      <motion.div
        className="sides-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 className="section-title sides-title" variants={fadeUp} custom={0}>
          Desserts &amp; Boissons
        </motion.h2>
        <motion.div variants={fadeUp} custom={1}>
          <SideMenu />
        </motion.div>
      </motion.div>
    </section>
  )
}
