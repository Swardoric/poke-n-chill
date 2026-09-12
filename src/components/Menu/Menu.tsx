import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'motion/react'
import { fadeUp } from '../../utils/animations'
import {
  POKE_STEPS,
  POKE_BASE_PRICE,
  CROUSTY_TACO_BASE,
  CROUSTY_TACOS,
  SUSHI_ROLLS,
  BUBBLE_TEA_PRICE,
  BUBBLE_TEA_FRUITY,
  BUBBLE_TEA_MILK,
  BUBBLE_TEA_TOPPINGS,
  BUBBLE_TEA_TOPPING_EXTRA,
  SIDE_ITEMS,
  SIDE_CATEGORIES,
  type SideCategory,
} from '../../data/constants'
import './Menu.css'

/* ───── Tab types ───── */
type MenuTab = 'poke' | 'tacos' | 'rolls' | 'bubble' | 'sides'

const TABS: { key: MenuTab; label: string; emoji: string }[] = [
  { key: 'poke', label: 'Poké', emoji: '🥗' },
  { key: 'tacos', label: 'Crousty Tacos', emoji: '🌮' },
  { key: 'rolls', label: 'Rolls', emoji: '🍣' },
  { key: 'bubble', label: 'Bubble Tea', emoji: '🧋' },
  { key: 'sides', label: 'Desserts & Boissons', emoji: '🍨' },
]

/* ───── Poké Composition ───── */

function PokePanel() {
  return (
    <div className="composer">
      {POKE_STEPS.map((step, idx) => (
        <div key={step.id} className="composer-section">
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
        </div>
      ))}
      <div className="composer-price-bar">
        <span>Bowl à composer à partir de</span>
        <strong>{POKE_BASE_PRICE.toFixed(2).replace('.', ',')} €</strong>
      </div>
    </div>
  )
}

/* ───── Crousty Tacos ───── */

function TacosPanel() {
  return (
    <div className="tacos-panel">
      <div className="tacos-base">
        <h4 className="tacos-base-title">🍽️ Base commune à tous les tacos</h4>
        <div className="tacos-base-chips">
          {CROUSTY_TACO_BASE.map((item) => (
            <span key={item} className="composer-chip">
              <span className="chip-name">{item}</span>
            </span>
          ))}
        </div>
      </div>
      <div className="tacos-grid">
        {CROUSTY_TACOS.map((taco) => (
          <div key={taco.id} className="taco-card">
            <span className="taco-card-emoji">{taco.emoji}</span>
            <div className="taco-card-body">
              <h3>{taco.name}</h3>
              <p>{taco.protein}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ───── Sushi Rolls ───── */

function RollsPanel() {
  return (
    <div className="rolls-grid">
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
    </div>
  )
}

/* ───── Desserts & Boissons ───── */

function SidesPanel() {
  const [filter, setFilter] = useState<SideCategory | 'all'>('all')
  const filtered =
    filter === 'all' ? SIDE_ITEMS : SIDE_ITEMS.filter((i) => i.category === filter)

  return (
    <div className="sides">
      <div className="sides-tabs">
        {SIDE_CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            className={`sub-tab ${filter === cat.key ? 'active' : ''}`}
            onClick={() => setFilter(cat.key)}
          >
            <span className="sub-tab-emoji">{cat.emoji}</span>
            {cat.label}
            {filter === cat.key && (
              <motion.div
                className="sub-tab-indicator"
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

/* ───── Bubble Tea ───── */

function BubbleTeaPanel() {
  return (
    <div className="bubble-panel">
      <div className="bubble-price-banner">
        <div className="bubble-banner-left">
          <span className="bubble-banner-icon">🧋</span>
          <div>
            <h3 className="bubble-banner-title">Bubble Tea</h3>
            <p className="bubble-banner-sub">Thé fruité ou thé au lait, à personnaliser</p>
          </div>
        </div>
        <div className="bubble-banner-right">
          <span className="bubble-banner-vol">50cl</span>
          <strong className="bubble-price-value">
            {BUBBLE_TEA_PRICE.toFixed(2).replace('.', ',')} €
          </strong>
        </div>
      </div>

      <div className="bubble-columns">
        {/* Thé Fruité */}
        <div className="bubble-column">
          <h3 className="bubble-column-title">🍓 Thé fruité</h3>
          <p className="bubble-column-note">1 topping au choix inclus</p>
          <div className="bubble-flavors">
            {BUBBLE_TEA_FRUITY.map((f) => (
              <span key={f} className="composer-chip">
                <span className="chip-name">{f}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Thé au lait */}
        <div className="bubble-column">
          <h3 className="bubble-column-title">🥛 Thé au lait</h3>
          {BUBBLE_TEA_MILK.map((m) => (
            <div key={m.name} className="bubble-milk-item">
              <span className="composer-chip">
                <span className="chip-name">{m.name}</span>
              </span>
              <p className="bubble-milk-note">{m.note}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Toppings */}
      <div className="bubble-toppings">
        <h4 className="bubble-toppings-title">
          Toppings au choix
          <span className="bubble-toppings-extra">
            extra +{BUBBLE_TEA_TOPPING_EXTRA.toFixed(2).replace('.', ',')} €
          </span>
        </h4>
        <div className="bubble-toppings-list">
          {BUBBLE_TEA_TOPPINGS.map((t) => (
            <span key={t} className="composer-chip">
              <span className="chip-name">{t}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ───── Panel map ───── */
const PANELS: Record<MenuTab, () => JSX.Element> = {
  poke: PokePanel,
  tacos: TacosPanel,
  rolls: RollsPanel,
  bubble: BubbleTeaPanel,
  sides: SidesPanel,
}

/* ───── Main Menu ───── */

export default function Menu() {
  const [active, setActive] = useState<MenuTab>('poke')
  const Panel = PANELS[active]

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
          📋 La Carte
        </motion.span>
        <motion.h2 className="section-title" variants={fadeUp} custom={1}>
          Notre menu
        </motion.h2>
      </motion.div>

      {/* Tabs */}
      <div className="menu-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            className={`menu-tab ${active === tab.key ? 'active' : ''}`}
            onClick={() => setActive(tab.key)}
          >
            <span className="menu-tab-emoji">{tab.emoji}</span>
            {tab.label}
            {active === tab.key && (
              <motion.div
                className="menu-tab-indicator"
                layoutId="menu-tab"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Panel content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="menu-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.25 }}
        >
          <Panel />
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
