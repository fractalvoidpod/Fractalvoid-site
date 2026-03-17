import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Fractal Void Podcast</title>
        <meta name="description" content="Get in touch with Fractal Void Podcast" />
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
        <h1>Contact</h1>
        
        <div className="content">
          <p>Have questions? Want to collaborate? Reach out to us:</p>
          
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:fractalvoidpod@gmail.com">fractalvoidpod@gmail.com</a></p>
          </div>

          <div className="social-section">
            <h2>Follow Us</h2>
            <div className="social-links">
              <a href="https://www.tiktok.com/@fractalvoidpod" target="_blank" rel="noopener noreferrer" className="social-link">
                TikTok: @fractalvoidpod
              </a>
              <a href="https://www.instagram.com/fractalvoidpod" target="_blank" rel="noopener noreferrer" className="social-link">
                Instagram: @fractalvoidpod
              </a>
              <a href="https://www.youtube.com/@FractalVoidPod" target="_blank" rel="noopener noreferrer" className="social-link">
                YouTube: @FractalVoidPod
              </a>
              <a href="https://open.spotify.com/show/77d4eev664LHHRrCdUbRZr" target="_blank" rel="noopener noreferrer" className="social-link">
                Spotify
              </a>
              <a href="https://podcasts.apple.com/us/podcast/fractal-void-pod/id1885901527" target="_blank" rel="noopener noreferrer" className="social-link">
                Apple Podcasts
              </a>
            </div>
          </div>
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

        .content p {
          margin-bottom: 1.5rem;
        }

        .contact-info {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(87, 187, 138, 0.2);
          margin: 2rem 0;
        }

        .contact-info a {
          color: #57bb8a;
          font-weight: bold;
        }

        .contact-info a:hover {
          text-decoration: underline;
        }

        .social-section {
          margin-top: 3rem;
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #57bb8a 0%, #8a57bb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .social-link {
          color: #57bb8a;
          font-weight: 500;
          transition: color 0.3s;
        }

        .social-link:hover {
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
