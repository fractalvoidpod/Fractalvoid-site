import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'

const episodeData = {
  1: {
    title: "The Blue Light",
    subtitle: "Celestina Grover | 7 years old | Taken 7 days ago | January 6, 1820",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SRTUDAqONzSmDxs9idLOlM2Mnwwu8SsJh63RxCyx9hBQdKLI5rafiP5dWMEFPqlBbh-hTvMNz55ZrEvD2J5iQVPjpxUW_gC899DU0XU8sEbVyIpuJu3NEX-URhz80ySSFZQb-b-Kp-aQswbsj_3QJX17VBXCY6ZcRbCE9vq-GDPCWH6cMnaWcT4zuBQ0K8oXdFaZ3unltTuVOncEuh4EEclo_hhYIhk9HWnlC8=w1280",
    spotifyUrl: "https://open.spotify.com/embed/episode/6iD5qvsv37W8RzGj81pY0j"
  },
  2: {
    title: "The Debut",
    subtitle: "Celestina Grover | 17-20 years old | Insane, ruined, unmarriageable",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SQrAxzsiHWjLjDEc73cLCLvG70VjlBvO-OA8EKTa5CMnj3q-3ai9jksGh3ZH37tiuvCA7GfhrVhDqxm7ZWkspdwyzo7sJMg31YxuJVhGk-fOgAfHpK4C66FR9lRUPxld39DgZN9cud5J1sCWq9GT2-LgD5UAINIcjAepo95kyAyoT1OAQC4Yhd_TMrIGiG6QV4v6DlolA54eJFZJShFJdBCSJOCXbg81A=w1280",
    spotifyUrl: "https://open.spotify.com/embed/episode/6iD5qvsv37W8RzGj81pY0j"
  },
  3: {
    title: "The Witch",
    subtitle: "Higgins | Farmer | Witness to Atmospheric Electric Anomaly",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0STBZgsdhkjIe6eNFFdk8irmmpqrnUMUMfX-gDw_AYNJJGr9W03zXe_57Tn4FFcFo2QsoRSgmLoNQDu2ZePuNCnI_GDZ1rBD-qckBYYdwmv9_2JjZMvUDe9bzm9_sHRPOnBXmbKN_DXi3dSb2-_mdBPqg6WpcKNZrO9ZCCQmXOSzrmN0ZD7i3SPiLgxbwYC1SqL8hvqry7AoRxz25AMgM5qbclzdOhoS5z8lFDY=w1280",
    spotifyUrl: "https://open.spotify.com/embed/episode/6iD5qvsv37W8RzGj81pY0j"
  },
  4: {
    title: "The Drawing",
    subtitle: "Celestina Grover | Hearing voices, seeing hallucinations, memories surfacing",
    image: "https://lh3.googleusercontent.com/sitesv/APaQ0SRJPzSvXXdqdTywAtWareQEtBHJcJBJOlw9ADdMzSp7X0GRkCqMpfWLJNzh-b9YV7vINOfZ7gOtgoq_fZj8MrRxThrXjqDbR05RI4oOcmohothSR3hF_2qyjwIBGaZMqCW2VkEJ17CCgYCuH9VjOnQ6nQ7yflHkU6RxpoXa6X5qe1hUtMGJd6IwhZIClL__CIinVJ8wHg4vvnwS81Nxcjb1fEdZ5ZvbBBoK=w1280",
    spotifyUrl: "https://open.spotify.com/embed/episode/6iD5qvsv37W8RzGj81pY0j"
  }
}

export default function Episode() {
  const router = useRouter()
  const { id } = router.query
  const episode = episodeData[id]

  if (!episode) {
    return <div>Episode not found</div>
  }

  return (
    <>
      <Head>
        <title>{episode.title} - Fractal Void Podcast</title>
        <meta name="description" content={episode.subtitle} />
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
        <div className="episode-header">
          <img src={episode.image} alt={episode.title} className="episode-image" />
          <div className="episode-info">
            <h1>Episode {id}: {episode.title}</h1>
            <p>{episode.subtitle}</p>
          </div>
        </div>

        <div className="spotify-embed">
          <iframe 
            src={episode.spotifyUrl}
            width="100%" 
            height="232" 
            frameBorder="0" 
            allowFullScreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          />
        </div>

        <Link href="/episodes" className="back-link">
          ← Back to Episodes
        </Link>
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

        .episode-header {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
          align-items: flex-start;
        }

        .episode-image {
          width: 250px;
          height: 250px;
          object-fit: cover;
          border-radius: 12px;
          border: 1px solid rgba(87, 187, 138, 0.3);
        }

        .episode-info h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #57bb8a 0%, #8a57bb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
        }

        .episode-info p {
          color: #aaa;
          line-height: 1.6;
        }

        .spotify-embed {
          margin-bottom: 2rem;
          border-radius: 12px;
          overflow: hidden;
        }

        .back-link {
          display: inline-block;
          color: #57bb8a;
          font-weight: bold;
          transition: color 0.3s;
        }

        .back-link:hover {
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
          .episode-header {
            flex-direction: column;
          }

          .episode-image {
            width: 100%;
            height: auto;
          }

          .episode-info h1 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </>
  )
}
