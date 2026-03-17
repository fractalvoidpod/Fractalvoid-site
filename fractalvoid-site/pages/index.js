import Head from 'next/head'
import Link from 'next/link'

const episodes = [
  {
    id: 1,
    title: "The Blue Light",
    subtitle: "Celestina Grover | 7 years old | Taken 7 days ago | January 6, 1820",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SRTUDAqONzSmDxs9idLOlM2Mnwwu8SsJh63RxCyx9hBQdKLI5rafiP5dWMEFPqlBbh-hTvMNz55ZrEvD2J5iQVPjpxUW_gC899DU0XU8sEbVyIpuJu3NEX-URhz80ySSFZQb-b-Kp-aQswbsj_3QJX17VBXCY6ZcRbCE9vq-GDPCWH6cMnaWcT4zuBQ0K8oXdFaZ3unltTuVOncEuh4EEclo_hhYIhk9HWnlC8=w1280",
    spotifyUrl: "https://open.spotify.com/episode/6iD5qvsv37W8RzGj81pY0j"
  },
  {
    id: 2,
    title: "The Debut",
    subtitle: "Celestina Grover | 17-20 years old | Insane, ruined, unmarriageable",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SQrAxzsiHWjLjDEc73cLCLvG70VjlBvO-OA8EKTa5CMnj3q-3ai9jksGh3ZH37tiuvCA7GfhrVhDqxm7ZWkspdwyzo7sJMg31YxuJVhGk-fOgAfHpK4C66FR9lRUPxld39DgZN9cud5J1sCWq9GT2-LgD5UAINIcjAepo95kyAyoT1OAQC4Yhd_TMrIGiG6QV4v6DlolA54eJFZJShFJdBCSJOCXbg81A=w1280",
    spotifyUrl: "https://open.spotify.com/episode/6iD5qvsv37W8RzGj81pY0j"
  },
  {
    id: 3,
    title: "The Witch",
    subtitle: "Higgins | Farmer | Witness to Atmospheric Electric Anomaly",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0STBZgsdhkjIe6eNFFdk8irmmpqrnUMUMfX-gDw_AYNJJGr9W03zXe_57Tn4FFcFo2QsoRSgmLoNQDu2ZePuNCnI_GDZ1rBD-qckBYYdwmv9_2JjZMvUDe9bzm9_sHRPOnBXmbKN_DXi3dSb2-_mdBPqg6WpcKNZrO9ZCCQmXOSzrmN0ZD7i3SPiLgxbwYC1SqL8hvqry7AoRxz25AMgM5qbclzdOhoS5z8lFDY=w1280",
    spotifyUrl: "https://open.spotify.com/episode/6iD5qvsv37W8RzGj81pY0j"
  },
  {
    id: 4,
    title: "The Drawing",
    subtitle: "Celestina Grover | Hearing voices, seeing hallucinations, memories surfacing",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SRJPzSvXXdqdTywAtWareQEtBHJcJBJOlw9ADdMzSp7X0GRkCqMpfWLJNzh-b9YV7vINOfZ7gOtgoq_fZj8MrRxThrXjqDbR05RI4oOcmohothSR3hF_2qyjwIBGaZMqCW2VkEJ17CCgYCuH9VjOnQ6nQ7yflHkU6RxpoXa6X5qe1hUtMGJd6IwhZIClL__CIinVJ8wHg4vvnwS81Nxcjb1fEdZ5ZvbBBoK=w1280",
    spotifyUrl: "https://open.spotify.com/episode/6iD5qvsv37W8RzGj81pY0j"
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Fractal Void Podcast - Gothic Horror Audio Drama</title>
        <meta name="description" content="Historical horror audio drama exploring alien abduction through history. Serial fiction podcast featuring cosmic mysteries and supernatural stories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <Link href="/" className="logo">Fractal Void Pod</Link>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/episodes">Episodes</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img 
            src="https://lh3.googleusercontent.com/sitesv/APaQ0STPDJierWc7VobujCdf6X7pU32L3BDIvz6vp0VYGwDOy3xot-LXTMu7opfHKxwUHHWqGEJFruUUAClActs5JMelOSFDPdaDR3aD6gx9sGfxVBiPksJuKZbc1sdYv9FhUPl6oYo4_4OKnocE5uVU1NwH2-9a-HBBzLJ9KX1onedvMsJE4t4fug=w16383" 
            alt="Fractal Void Podcast" 
            className="hero-logo" 
          />
          <h1>Welcome to the liminal spaces...</h1>
          <p className="hero-tagline">Don't get lost!</p>
          
          <div className="social-links">
            <a href="https://www.tiktok.com/@fractalvoidpod" target="_blank" rel="noopener noreferrer" className="social-icon" title="TikTok">
              <svg viewBox="0 0 24 24" fill="white"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/></svg>
            </a>
            <a href="https://open.spotify.com/show/77d4eev664LHHRrCdUbRZr" target="_blank" rel="noopener noreferrer" className="social-icon" title="Spotify">
              <svg viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
            </a>
            <a href="https://podcasts.apple.com/us/podcast/fractal-void-pod/id1885901527" target="_blank" rel="noopener noreferrer" className="social-icon" title="Apple Podcasts">
              <svg viewBox="0 0 24 24" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.182c5.423 0 9.818 4.395 9.818 9.818 0 5.423-4.395 9.818-9.818 9.818-5.423 0-9.818-4.395-9.818-9.818 0-5.423 4.395-9.818 9.818-9.818zM12 5.09c-2.47 0-4.636 1.973-4.636 4.364v.727c0 .2.164.364.364.364h.727c.2 0 .364-.164.364-.364v-.727c0-1.473 1.2-2.727 2.636-2.727s2.636 1.255 2.636 2.727v.727c0 .2.164.364.364.364h.727c.2 0 .364-.164.364-.364v-.727C16.545 7.064 14.47 5.09 12 5.09zm0 6.546c-.8 0-1.455.654-1.455 1.454v4.364c0 .8.655 1.455 1.455 1.455s1.455-.655 1.455-1.455V13.09c0-.8-.655-1.454-1.455-1.454z"/></svg>
            </a>
            <a href="https://www.instagram.com/fractalvoidpod" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
              <svg viewBox="0 0 24 24"><defs><linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" style={{stopColor:'#feda75'}}/><stop offset="100%" style={{stopColor:'#fa7e1e'}}/></linearGradient></defs><path fill="url(#ig-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://www.youtube.com/@FractalVoidPod" target="_blank" rel="noopener noreferrer" className="social-icon" title="YouTube">
              <svg viewBox="0 0 24 24" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
          
          <a href="https://open.spotify.com/show/77d4eev664LHHRrCdUbRZr" target="_blank" rel="noopener noreferrer" className="cta-button">
            Listen Now!
          </a>
        </div>
      </section>

      {/* Episodes Section */}
      <section className="episodes-section">
        <h2>Latest Episodes</h2>
        <div className="episodes-grid">
          {episodes.map(episode => (
            <div key={episode.id} className="episode-card">
              <img src={episode.image} alt={episode.title} />
              <div className="episode-content">
                <h3>Episode {episode.id}: {episode.title}</h3>
                <p>{episode.subtitle}</p>
                <Link href={`/episode/${episode.id}`} className="episode-link">
                  Listen →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Fractal Void Podcast. All rights reserved.</p>
        <p>Contact: <a href="mailto:fractalvoidpod@gmail.com">fractalvoidpod@gmail.com</a></p>
      </footer>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid rgba(87, 187, 138, 0.2);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #57bb8a;
          text-decoration: none;
          transition: color 0.3s;
        }

        .logo:hover {
          color: #8a57bb;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;
          font-weight: 500;
        }

        .nav-links a:hover {
          color: #57bb8a;
        }

        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 6rem 2rem 4rem;
          background: 
            radial-gradient(ellipse at center, rgba(87, 187, 138, 0.15) 0%, transparent 70%),
            radial-gradient(ellipse at 80% 20%, rgba(138, 87, 187, 0.1) 0%, transparent 50%);
        }

        .hero-content {
          max-width: 800px;
        }

        .hero-logo {
          max-width: 400px;
          width: 100%;
          margin-bottom: 2rem;
        }

        .hero h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #57bb8a 0%, #8a57bb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .hero-tagline {
          font-size: 1.5rem;
          color: #aaa;
          margin-bottom: 3rem;
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .social-icon {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transition: transform 0.3s, background 0.3s;
        }

        .social-icon:hover {
          transform: scale(1.1);
          background: rgba(87, 187, 138, 0.2);
        }

        .social-icon svg {
          width: 28px;
          height: 28px;
        }

        .cta-button {
          display: inline-block;
          padding: 1rem 3rem;
          background: linear-gradient(135deg, #57bb8a 0%, #8a57bb 100%);
          color: #fff;
          text-decoration: none;
          border-radius: 50px;
          font-weight: bold;
          font-size: 1.2rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(87, 187, 138, 0.3);
        }

        .episodes-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .episodes-section h2 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #57bb8a 0%, #8a57bb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .episodes-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .episode-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1px solid rgba(87, 187, 138, 0.2);
        }

        .episode-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(87, 187, 138, 0.2);
        }

        .episode-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .episode-content {
          padding: 1.5rem;
        }

        .episode-content h3 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #57bb8a;
        }

        .episode-content p {
          color: #aaa;
          font-size: 0.9rem;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .episode-link {
          display: inline-block;
          color: #57bb8a;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s;
        }

        .episode-link:hover {
          color: #8a57bb;
        }

        .footer {
          text-align: center;
          padding: 3rem 2rem;
          background: rgba(0, 0, 0, 0.5);
          border-top: 1px solid rgba(87, 187, 138, 0.2);
        }

        .footer p {
          margin: 0.5rem 0;
          color: #aaa;
        }

        .footer a {
          color: #57bb8a;
          text-decoration: none;
        }

        .footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2rem;
          }

          .hero-tagline {
            font-size: 1.2rem;
          }

          .nav-links {
            gap: 1rem;
            font-size: 0.9rem;
          }

          .episodes-grid {
            grid-template-columns: 1fr;
          }

          .social-links {
            gap: 1rem;
          }
        }
      `}</style>
    </>
  )
}
