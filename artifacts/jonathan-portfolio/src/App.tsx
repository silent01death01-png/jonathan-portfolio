import { useEffect, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const base = import.meta.env.BASE_URL;
const image = (name: string) => `${base}images/${name}`;

function SiteHeader({ active }: { active: 'home' | 'gallery' }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Jonathan Figueroa, inicio" data-testid="link-logo-home">
          <span className="logo-mark" aria-hidden="true">JF</span>
          <span className="logo-text">Jonathan Figueroa</span>
        </Link>
        <nav className="main-nav" aria-label="Navegación principal">
          <ul>
            <li><Link href="/" className={active === 'home' ? 'active' : ''} aria-current={active === 'home' ? 'page' : undefined} data-testid="link-nav-home">Inicio</Link></li>
            <li><Link href="/galeria" className={active === 'gallery' ? 'active' : ''} aria-current={active === 'gallery' ? 'page' : undefined} data-testid="link-nav-gallery">Galería</Link></li>
            <li><a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" data-testid="link-nav-behance">Behance</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo-mark" aria-hidden="true">JF</span>
          <p>Jonathan Yael Figueroa Murillo — Diseño Multimedia y Arte Digital</p>
        </div>
        <nav className="footer-nav" aria-label="Navegación del pie de página">
          <Link href="/" data-testid="link-footer-home">Inicio</Link>
          <Link href="/galeria" data-testid="link-footer-gallery">Galería</Link>
          <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer" data-testid="link-footer-behance">Behance</a>
          <Link href="/#sobre-mi" data-testid="link-footer-about">Sobre mí</Link>
        </nav>
        <p className="footer-copy">© 2026 Jonathan Yael Figueroa Murillo. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function Home() {
  usePageMeta(
    'Jonathan Yael Figueroa Murillo — Diseño Multimedia y Arte Digital',
    'Portafolio de Jonathan Yael Figueroa Murillo, estudiante de Diseño Multimedia y Arte Digital.'
  );
  return (
    <div className="portfolio">
      <SiteHeader active="home" />
      <main>
        <section className="hero" aria-labelledby="home-title">
          <h1 id="home-title" className="hero-eyebrow">Estudiante de Diseño Multimedia y Arte Digital</h1>
          <p className="hero-desc">
            Soy Jonathan, estudiante de séptimo semestre de Diseño Multimedia y Arte Digital. Me apasiona la animación digital, la edición de video y el modelado 3D en Blender. Aquí puedes conocer mi trabajo y mi trayectoria.
          </p>
        </section>

        <section id="sobre-mi" className="about" aria-labelledby="about-title">
          <div className="section-head">
            <h2 id="about-title">Sobre mí</h2>
            <p>Una breve introducción a mi recorrido creativo</p>
          </div>
          <div className="about-grid">
            <article className="info-card">
              <h3>Formación</h3>
              <p>
                Estudiante de séptimo semestre de Diseño Multimedia y Arte Digital.
                He cursado materias de animación digital, diseño gráfico, edición de video
                y modelado 3D en Blender, combinando técnica y creatividad en cada proyecto.
              </p>
            </article>
            <article className="info-card">
              <h3>Habilidades</h3>
              <ul className="skill-list">
                <li>After Effects — Animación digital y motion graphics</li>
                <li>Blender — Modelado y animación 3D</li>
                <li>Diseño gráfico — Composición visual e identidad</li>
                <li>Edición de video — Postproducción y narrativa audiovisual</li>
                <li>HTML básico — Estructura de páginas web</li>
              </ul>
            </article>
            <article className="info-card">
              <h3>Intereses</h3>
              <p>
                Me interesa la animación digital como herramienta para contar historias,
                el diseño gráfico como lenguaje visual y la edición de video como medio
                para crear piezas audiovisuales que conecten con el espectador.
              </p>
            </article>
          </div>
        </section>

        <section className="featured" aria-labelledby="featured-title">
          <div className="section-head">
            <h2 id="featured-title">Proyecto destacado</h2>
            <p>Una muestra de mi trabajo más reciente</p>
          </div>
          <article className="featured-card">
            <img
              src={image('Captura_de_pantalla_7-10-2026_71856_.jpeg')}
              alt="Personajes 3D animados en blanco y negro"
              loading="lazy"
              data-testid="img-featured-project"
            />
            <div className="featured-body">
              <h3>Personajes 3D — Exploración de animación</h3>
              <p>
                Estudio visual de personajes modelados en 3D, con énfasis en expresión,
                postura y diseño de formas para una futura pieza de animación digital.
              </p>
              <Link href="/galeria" className="btn btn-primary" data-testid="link-featured-gallery">Ver más proyectos</Link>
            </div>
          </article>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Gallery() {
  usePageMeta(
    'Galería — Jonathan Yael Figueroa Murillo',
    'Una selección de trabajos de diseño gráfico, animación y multimedia de Jonathan Yael Figueroa Murillo.'
  );
  return (
    <div className="portfolio">
      <SiteHeader active="gallery" />
      <main>
        <section className="gallery-intro" aria-labelledby="gallery-title">
          <div className="section-head">
            <h1 id="gallery-title">Galería de proyectos</h1>
            <p>Una selección de trabajos de diseño gráfico, animación y multimedia</p>
          </div>
        </section>
        <section className="gallery" aria-label="Proyectos seleccionados">
          <article className="gallery-item" data-testid="card-project-graphic">
            <figure>
              <img src={image('Captura_de_pantalla_7-10-2026_72019_.jpeg')} alt="Ilustración en blanco y negro de un personaje con sombrero mágico" loading="lazy" />
              <figcaption>
                <span className="tag">Diseño gráfico</span>
                <h2>Proyecto de diseño gráfico</h2>
                <p>Ilustración conceptual en blanco y negro para explorar diseño de personajes, línea, composición y narrativa visual.</p>
              </figcaption>
            </figure>
          </article>
          <article className="gallery-item" data-testid="card-project-animation">
            <figure>
              <img src={image('Captura_de_pantalla_7-10-2026_71856_.jpeg')} alt="Dos personajes 3D animados en blanco y negro" loading="lazy" />
              <figcaption>
                <span className="tag">Animación</span>
                <h2>Proyecto de animación</h2>
                <p>Exploración de personajes 3D con distintas poses y expresiones, pensada como base para una secuencia de animación digital.</p>
              </figcaption>
            </figure>
          </article>
          <article className="gallery-item" data-testid="card-project-multimedia">
            <figure>
              <img src={image('Captura_de_pantalla_7-10-2026_72135_.jpeg')} alt="Paisaje ilustrado con árboles, bicicletas y personas" loading="lazy" />
              <figcaption>
                <span className="tag">Multimedia</span>
                <h2>Proyecto multimedia</h2>
                <p>Composición visual de paisaje con tratamiento ilustrado, color y textura, desarrollada como propuesta para un proyecto multimedia.</p>
              </figcaption>
            </figure>
          </article>
        </section>
        <section className="gallery-cta">
          <div className="cta-box">
            <h2>¿Te gusta lo que ves?</h2>
            <p>Vuelve al inicio para conocer más sobre mi trayectoria o contáctame para colaboraciones.</p>
            <Link href="/" className="btn btn-primary" data-testid="link-return-home">Volver al inicio</Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'description';
      document.head.appendChild(meta);
    }
    meta.content = description;
    document.documentElement.lang = 'es';
  }, [title, description]);
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/galeria" component={Gallery} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
