import { ArrowDownRight, ArrowUpRight, Clock3, Dumbbell, MapPin, Sparkles } from 'lucide-react';

const programs = [
  ['01', 'Strength', 'Build capable, lasting strength with progressive training.'],
  ['02', 'Conditioning', 'Raise your engine with focused, high-energy sessions.'],
  ['03', 'Personal Training', 'Get a plan built around your goals and your pace.'],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Throwback Fitness home"><span>TB</span><b>THROWBACK<br />FITNESS</b></a>
      <nav><a href="#programs">Training</a><a href="#experience">The space</a><a href="#visit">Visit us</a></nav>
      <a className="header-cta" href="#visit">Start today <ArrowUpRight size={16} /></a>
    </header>
    <section className="hero" id="top"><div className="hero-image" /><div className="grain" />
      <div className="hero-content"><div className="eyebrow"><Sparkles size={15} /> Wapda Town Society, Lahore</div><h1>MAKE YOUR<br /><i>PAST</i> PROUD.</h1><p>A disciplined space for real work. Come train, build momentum, and become the version of yourself you keep thinking about.</p><a href="#visit" className="button primary">Plan your first visit <ArrowDownRight size={19} /></a></div>
      <div className="hero-bottom"><span>SCROLL TO TRAIN</span><span>EST. IN LAHORE</span></div><div className="hero-count">01 <em>/ 04</em></div>
    </section>
    <section className="intro"><div className="section-label">01 — OUR APPROACH</div><h2>NO SHORTCUTS.<br /><span>JUST SHOWING UP.</span></h2><div className="intro-copy"><p>Fitness isn&apos;t a season. It&apos;s a practice. Throwback Fitness brings a focused, straightforward place to move with purpose—whether it&apos;s day one or rep number one thousand.</p><a href="#programs" className="text-link">Explore training <ArrowDownRight size={18} /></a></div></section>
    <section className="programs" id="programs"><div className="program-heading"><div className="section-label">02 — HOW YOU TRAIN</div><h2>WORK THAT<br />WORKS.</h2></div><div className="program-list">{programs.map(([number, title, copy]) => <article className="program" key={number}><div className="program-num">{number}</div><Dumbbell strokeWidth={1.5} size={34}/><h3>{title}</h3><p>{copy}</p><a href="#visit" aria-label={`Ask about ${title}`}><ArrowUpRight /></a></article>)}</div></section>
    <section className="experience" id="experience"><div className="experience-image" /><div className="experience-note"><span>THE FEEL</span><h2>Built for<br /><i>the work.</i></h2><p>Clear your head. Load the bar. Put in the reps.</p></div></section>
    <section className="visit" id="visit"><div className="visit-main"><div className="section-label">03 — FIND YOUR WAY IN</div><h2>COME IN.<br /><i>SHOW UP.</i></h2><p>Want to train with us? Reach out to arrange a visit and find the rhythm that fits your life.</p><a className="button primary" href="https://wa.me/" target="_blank" rel="noreferrer">Message on WhatsApp <ArrowUpRight size={18}/></a></div><div className="visit-details"><div><MapPin size={22}/><h3>Find the floor</h3><p>Wapda Town Society<br />Lahore, Pakistan</p><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Throwback+Fitness+Wapda+Town+Lahore" target="_blank" rel="noreferrer">Open directions <ArrowUpRight size={16}/></a></div><div><Clock3 size={22}/><h3>Hours & membership</h3><p>Contact the team for current training hours, memberships and trial availability.</p><a className="text-link" href="https://wa.me/" target="_blank" rel="noreferrer">Ask a question <ArrowUpRight size={16}/></a></div></div></section>
    <footer><a className="brand" href="#top"><span>TB</span><b>THROWBACK<br />FITNESS</b></a><p>Wapda Town Society · Lahore</p><p>© {new Date().getFullYear()} Throwback Fitness</p></footer>
  </main>;
}
