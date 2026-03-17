import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About - Fractal Void Podcast</title>
        <meta name="description" content="Learn about Fractal Void Podcast - Gothic horror audio drama exploring alien abduction through history." />
      </Head>

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

      <main className="main">
        <h1>About</h1>
        
        <div className="content">
          <p className="tagline"><strong>FRACTALVOID</strong> - Stories of ominous wonder.</p>
          
          <p>Audio dramas that explore the inexplicable—cosmic mysteries, historical horrors, and phenomena that defy understanding. We tell stories where the questions matter more than the answers.</p>
          
          <h2>The Taken at Gordon Manor</h2>
          
          <p><strong>THE TAKEN AT GORDON MANOR</strong> is a serial audio drama set in 1826 England, following Celestina Grover—a Duke's daughter whose childhood memories are returning in fragments. Strange lights. Cold metal tables. Black eyes that swallow light.</p>
          
          <p>In an era where such things can only be understood through the lens of witchcraft, demonic possession, and fairy lore, Celestina must navigate a world that has no language for what's happening to her.</p>
          
          <p>The story frames alien abduction through period-appropriate supernatural folklore, creating a dual-layer mystery where contemporary listeners understand the true nature of events while characters interpret them through the only framework available to them.</p>
          
          <h2>Creator</h2>
          
          <p><em>Written by Valerie Johnson</em></p>
          
          <p>Fractal Void Podcast is a gothic horror audio drama exploring themes of memory, trauma, and the unknowable through the lens of historical fiction and cosmic horror.</p>
        </div>
      </main>

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
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-links a {
          color: #fff;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #57bb8a;
        }

        .main {
          max-width: 800px;
          margin: 0 auto;
          padding: 8rem 2rem 4rem;
          min-height: 100vh;
        }

        h1 {
          font-size: 3rem;
          text-align: center;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #57bb8a 0%, #8a57bb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .content {
          color: #ddd;
          line-height: 1.8;
        }

        .tagline {
          font-size: 1.3rem;
          text-align: center;
          margin-bottom: 2rem;
          color: #57bb8a;
        }

        .content p {
          margin-bottom: 1.5rem;
        }

        h2 {
          font-size: 1.8rem;
          margin: 2rem 0 1rem;
          background: linear-gradient(135deg, #57bb8a 0%, #8a57bb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
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
        }

        .footer a:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          h2 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}
