import { useState, useEffect } from 'react'
import './App.css'

const programs = [
{
number: '01',
title: 'STRENGTH',
description: 'Build power. Break limits.',
icon: '🏋️',
image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=80',
},
{
number: '02',
title: 'CARDIO',
description: 'Push your endurance further.',
icon: '🏃',
image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=80',
},
{
number: '03',
title: 'PERSONAL TRAINING',
description: 'A plan built around you.',
icon: '⚡',
image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80',
},
]


const plans = [
{ name: 'STARTER', price: '999', features: ['Full gym access', 'Locker facility', 'Basic workout plan'] },
{ name: 'PRO', price: '1,999', features: ['Unlimited gym access', 'Personal trainer support', 'Custom workout plan'], popular: true },
{ name: 'ELITE', price: '2,999', features: ['All Pro benefits', 'Personal training sessions', 'Nutrition guidance'] },
]

function App() {
const [menuOpen, setMenuOpen] = useState(false)
const [selectedPlan, setSelectedPlan] = useState('')
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  const elements = document.querySelectorAll(
    '.program-card, .about-copy, .about-art, .price-card, .contact-copy, .contact-form'
  )

  elements.forEach((element) => {
    element.classList.add('reveal')
    observer.observe(element)
  })

  return () => observer.disconnect()
}, [])

const handleJoin = (plan = 'PRO') => {
setSelectedPlan(plan)
document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}

return ( <main> <nav className="navbar"> <a className="brand" href="#home">
IRON<span>CORE</span><small>FITNESS CLUB</small> </a>

```
    <button
      className="menu-toggle"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle navigation"
      aria-expanded={menuOpen}
    >
      {menuOpen ? '✕' : '☰'}
    </button>

    <div className={`nav-links ${menuOpen ? 'nav-open' : ''}`}>
      <a href="#home" onClick={() => setMenuOpen(false)}>HOME</a>
      <a href="#programs" onClick={() => setMenuOpen(false)}>PROGRAMS</a>
      <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT</a>
      <a href="#membership" onClick={() => setMenuOpen(false)}>MEMBERSHIP</a>
      <button className="nav-cta" onClick={() => { setMenuOpen(false); handleJoin() }}>
        JOIN NOW ↗
      </button>
    </div>
  </nav>

  <section className="hero" id="home">
    <div className="hero-glow" />
    <div className="hero-content">
      <div className="eyebrow"><span /> YOUR POTENTIAL. UNLEASHED.</div>
      <h1>
        BUILT<br />
        <span>NOT</span> GIVEN<span className="accent">.</span>
      </h1>
      <p className="hero-description">
        Your goals don't wait. Neither should you.
        Train with purpose, build your strength, and become
        the strongest version of yourself.
      </p>

      <div className="hero-actions">
        <button className="primary-btn" onClick={() => handleJoin()}>
          START YOUR JOURNEY <span>↗</span>
        </button>
        <a href="#programs" className="text-btn">EXPLORE PROGRAMS ↓</a>
      </div>

      <div className="hero-stats">
        <div><strong>15<span>+</span></strong><small>TRAINING PROGRAMS</small></div>
        <div><strong>24<span>/7</span></strong><small>YOUR MINDSET</small></div>
        <div><strong>100<span>%</span></strong><small>YOUR POTENTIAL</small></div>
      </div>
    </div>

<div className="hero-visual hero-photo">
  <img
    className="hero-gym-image"
    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85"
    alt="Modern gym interior with workout equipment"
  />

  <div className="hero-photo-overlay"></div>

  <div className="visual-label">
    DISCIPLINE
    <br />
    OVER EXCUSES
  </div>

  <div className="visual-number">01</div>

  <div className="visual-caption">
    <span>IC / 001</span> PERFORMANCE DIVISION
  </div>
</div>



    <div className="hero-bottom-label">SCROLL TO DISCOVER <span>↓</span></div>
    <div className="hero-side-label">STRENGTH · FOCUS · CONSISTENCY</div>
  </section>

  <section className="ticker" aria-label="Fitness motto">
    <div className="ticker-track">
      {Array.from({ length: 4 }, (_, i) => (
        <span key={i}>NO EXCUSES <b>✳</b> JUST RESULTS <b>✳</b> STAY HUNGRY <b>✳</b></span>
      ))}
    </div>
  </section>

  <section className="section programs-section" id="programs">
    <div className="section-heading">
      <div>
        <div className="eyebrow"><span /> FIND YOUR EDGE</div>
        <h2>TRAIN WITH<br /> <span>INTENTION.</span></h2>
      </div>
      <p>Every rep has a purpose. Find the training style that matches your goals and start making progress.</p>
    </div>

    <div className="program-grid">
      {programs.map((program) => (
        <article className="program-card" key={program.number}>
          <div className="program-top"><span>{program.number} / 03</span><span>{program.icon}</span></div>
          <img
className="program-image"
src={program.image}
alt={`${program.title} workout`}
loading="lazy"
/>


          <div className="program-icon">{program.icon}</div>
          <h3>{program.title}</h3>
          <p>{program.description}</p>
          <a href="#membership" aria-label={`Explore ${program.title}`}>EXPLORE PROGRAM <span>↗</span></a>
        </article>
      ))}
    </div>
  </section>

  <section className="about-section" id="about">
    <div className="about-art">
      <div className="about-ring" />
      <div className="about-big-text">PUSH<br />PAST<br /><span>LIMITS.</span></div>
      <div className="about-stamp">IRONCORE<br />EST. 2026</div>
    </div>
    <div className="about-copy">
      <div className="eyebrow"><span /> MORE THAN A GYM</div>
      <h2>YOUR WORK.<br />YOUR <span>LEGACY.</span></h2>
      <p>
        Great results start with showing up. We bring together
        focused training, a supportive environment, and a
        commitment to helping you improve one session at a time.
      </p>
      <div className="about-points">
        <div><span>✓</span> Goal-focused training</div>
        <div><span>✓</span> Supportive fitness community</div>
        <div><span>✓</span> Progress at your own pace</div>
      </div>
      <button className="primary-btn" onClick={() => handleJoin()}>LET'S GET STARTED ↗</button>
    </div>
  </section>

  <section className="section membership-section" id="membership">
    <div className="eyebrow"><span /> INVEST IN YOURSELF</div>
    <div className="membership-heading">
      <h2>CHOOSE YOUR<br /><span>COMMITMENT.</span></h2>
      <p>Simple plans. Serious intent.<br />Your next chapter starts here.</p>
    </div>

    <div className="pricing-grid">
      {plans.map((plan) => (
        <article className={`price-card ${plan.popular ? 'popular' : ''}`} key={plan.name}>
          {plan.popular && <div className="popular-tag">MOST POPULAR</div>}
          <h3>{plan.name}</h3>
          <p className="plan-description">MONTHLY MEMBERSHIP</p>
          <div className="price">₹{plan.price}<span>/month</span></div>
          <div className="price-divider" />
          <ul>
            {plan.features.map((feature) => <li key={feature}><span>✓</span> {feature}</li>)}
          </ul>
          <button className={plan.popular ? 'primary-btn' : 'outline-btn'} onClick={() => handleJoin(plan.name)}>
            CHOOSE {plan.name} ↗
          </button>
        </article>
      ))}
    </div>
    <p className="pricing-note">* Sample prices for this demo website. Update them before publishing.</p>
  </section>

  <section className="contact-section" id="contact">
    <div className="contact-copy">
      <div className="eyebrow"><span /> YOUR NEXT CHAPTER</div>
      <h2>READY TO<br />GET <span>STRONGER?</span></h2>
      <p>Take the first step. Tell us how to reach you and we'll help you get started.</p>
    </div>

    <form className="contact-form" onSubmit={(event) => {
      event.preventDefault()
      alert(`Thanks for your interest in the ${selectedPlan || 'PRO'} plan! This demo form is ready for backend integration.`)
    }}>
      <label htmlFor="name">YOUR NAME</label>
      <input id="name" name="name" placeholder="Enter your name" required />

      <label htmlFor="email">EMAIL ADDRESS</label>
      <input id="email" name="email" type="email" placeholder="you@example.com" required />

      <label htmlFor="plan">INTERESTED IN</label>
      <select id="plan" name="plan" value={selectedPlan} onChange={(event) => setSelectedPlan(event.target.value)} required>
        <option value="">Select a membership</option>
        {plans.map((plan) => <option key={plan.name} value={plan.name}>{plan.name}</option>)}
      </select>

      <button className="primary-btn form-submit" type="submit">REQUEST A CALL BACK ↗</button>
      <p className="form-note">Demo form · No information is sent to a server.</p>
    </form>
  </section>

  <footer className="footer">
    <a className="brand" href="#home">IRON<span>CORE</span><small>FITNESS CLUB</small></a>
    <p>BUILT WITH PURPOSE. TRAINED WITH DISCIPLINE.</p>
    <a href="#home" className="back-top">BACK TO TOP ↑</a>
    <div className="footer-bottom">© 2026 IRONCORE FITNESS · DEMO WEBSITE</div>
  </footer>
</main>


)
}

export default App
