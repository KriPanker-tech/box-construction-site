import { useEffect, useState } from 'react';

import {
  bookingSteps,
  businessSolutions,
  comparisonRows,
  contacts,
  faqGroups,
  hero,
  homeBenefits,
  imageMap,
  priorities,
  productionSteps,
  storySteps,
  team,
  uniquePoints,
} from './content';

const THEME_KEY = 'box-construction-theme';
type ThemeMode = 'dark' | 'light';
type SiteImageProps = {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
};

function formatMultilineText(text: string) {
  return text.split('\n').map((line, index) => (
    <p key={`${line}-${index}`} className="stacked-line">
      {line}
    </p>
  ));
}

function SiteImage({ alt, className, priority = false, src }: SiteImageProps) {
  return (
    <img
      alt={alt}
      className={className}
      decoding="async"
      fetchPriority={priority ? 'high' : 'low'}
      loading={priority ? 'eager' : 'lazy'}
      src={src}
    />
  );
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(THEME_KEY) as ThemeMode | null;

    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
      return;
    }

    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(systemPrefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <div className="shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark" />
          <div>
            <p>Box Construction</p>
            <span>Container homes and business spaces</span>
          </div>
        </div>

        <nav className="nav">
          <button
            type="button"
            className="theme-toggle"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <a href="#about">Nosotros</a>
          <a href="#faq">FAQ</a>
          <a href="#business">Negocios</a>
          <a href="#team">Equipo</a>
          <a href="#contact" className="nav-cta">
            Contacto
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section">
          <div className="hero-copy">
            <p className="kicker">Box Construction</p>
            <h1>{hero.title}</h1>
            <p className="hero-text">{hero.text}</p>

            <div className="hero-actions">
              <a className="button button-primary" href={contacts.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="button button-secondary" href={contacts.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <SiteImage priority src={imageMap.heroHouse} alt="Box Construction container house" />
            <span className="hero-night-overlay" aria-hidden="true" />
            <span className="hero-window-glows" aria-hidden="true" />
            <span className="hero-moonlight" aria-hidden="true" />
            <span className="hero-moon" aria-hidden="true" />
          </div>
        </section>

        <section id="about" className="section split-feature">
          <div className="section-heading compact">
            <p className="kicker">Nuestra historia</p>
            <h2>Construyendo un Legado: Nuestra Historia</h2>
          </div>

          <div className="story-layout">
            <SiteImage className="feature-image" src={imageMap.heroHistory} alt="Historia de Box Construction" />

            <div className="timeline">
              {storySteps.map((item) => (
                <article key={item.number} className="timeline-card">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading compact">
            <p className="kicker">Prioridades</p>
            <h2>Prioridades de la empresa</h2>
          </div>

          <div className="priority-grid wide">
            {priorities.map((item) => (
              <article key={item.title} className="priority-card with-image">
                <SiteImage src={item.image} alt={item.title} />
                <div className="priority-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="bullet-list">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="bullet-item">
                        <span />
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading compact">
            <p className="kicker">Living</p>
            <h2>Transformar los espacios de vida con contenedores</h2>
          </div>

          <div className="story-layout reverse">
            <div className="benefit-list">
              {homeBenefits.map((item) => (
                <article key={item.title} className="benefit-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <SiteImage className="feature-image" src={imageMap.livingSpaces} alt="Espacios de vida con contenedores" />
          </div>
        </section>

        <section id="faq" className="section faq-section">
          <div className="section-heading compact">
            <p className="kicker">FAQ</p>
            <h2>Preguntas frecuentes</h2>
            <p>
              ¿Tiene preguntas sobre nuestras soluciones de contenedores? Encuentre respuestas a las consultas más comunes de nuestros clientes.
            </p>
          </div>

          <div className="faq-groups">
            {faqGroups.map((group, index) => (
              <details key={group.title} className="faq-group" open={index === 0}>
                <summary className="faq-group-summary">{group.title}</summary>
                <div className="faq-list">
                  {group.items.map((item) => (
                    <details key={item.question} className="faq-item">
                      <summary>{item.question}</summary>
                      <div className="faq-answer">{formatMultilineText(item.answer)}</div>
                    </details>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section id="business" className="section">
          <div className="section-heading compact">
            <p className="kicker">Business</p>
            <h2>Soluciones personalizadas para cada negocio</h2>
          </div>

          <div className="solution-grid">
            {businessSolutions.map((item) => (
              <article key={item.title} className="solution-card image-card">
                <SiteImage src={item.image} alt={item.title} />
                <div className="solution-copy">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section comparison-section">
          <div className="section-heading compact">
            <p className="kicker">Comparison</p>
            <h2>Construcción de contenedores vs. tradicional</h2>
          </div>

          <div className="comparison-layout">
            <SiteImage className="feature-image" src={imageMap.comparison} alt="Comparación de construcción" />

            <div className="table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Métrica</th>
                    <th>Casa de contenedores</th>
                    <th>Casa tradicional</th>
                    <th>Casa modular</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.metric}>
                      <td>{row.metric}</td>
                      <td>{row.container}</td>
                      <td>{row.traditional}</td>
                      <td>{row.modular}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="section split-feature">
          <div className="section-heading compact">
            <p className="kicker">Why Box</p>
            <h2>Qué hace que Box Construction sea única</h2>
          </div>

          <div className="story-layout">
            <div className="benefit-list">
              {uniquePoints.map((item) => (
                <article key={item.title} className="benefit-card">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <SiteImage className="feature-image" src={imageMap.process} alt="Proceso de Box Construction" />
          </div>
        </section>

        <section className="section">
          <div className="section-heading compact">
            <p className="kicker">Production</p>
            <h2>Un proceso de producción sin problemas</h2>
          </div>

          <div className="process-grid">
            {productionSteps.map((item, index) => (
              <article key={item.title} className="process-card">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading compact">
            <p className="kicker">Reservation</p>
            <h2>Reserva tu solución de contenedor hoy</h2>
          </div>

          <div className="booking-grid">
            {bookingSteps.map((item) => (
              <article key={item.title} className="booking-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="section">
          <div className="section-heading compact">
            <p className="kicker">Team</p>
            <h2>Nuestro equipo. Apasionados por la innovación</h2>
          </div>

          <div className="team-grid">
            {team.map((member) => (
              <article key={member.name} className="team-card photo-card">
                <SiteImage src={member.image} alt={member.name} />
                <div className="team-copy">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-card">
          <p className="kicker">Contacto</p>
          <h2>Listo para seguir con el nuevo sitio</h2>
          <p>
            El texto y las imágenes principales del sitio anterior ya están trasladados al nuevo proyecto.
          </p>
          <div className="hero-actions centered">
            <a className="button button-primary" href={contacts.whatsapp} target="_blank" rel="noreferrer">
              Escribir por WhatsApp
            </a>
            <a className="button button-secondary" href={contacts.instagram} target="_blank" rel="noreferrer">
              Abrir Instagram
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
