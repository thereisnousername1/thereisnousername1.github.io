import { useState, useEffect } from 'react'
import Nav from '../components/Nav.jsx'
import { useParams, Link } from 'react-router-dom'
import { games } from '../data/games.js'

export default function GameDetail() {
  // slug in here is the game name in lowercase shown in the url
  const { slug } = useParams()
  const game = games.find((g) => g.slug === slug)

  if (!game) {
    return (
      <>
        <Nav />
        <div className="wrap" style={{ padding: '80px 0' }}>
          <p>Couldn't find this game.</p>
          <Link to="/">← return to home page</Link>
        </div>
      </>
    )
  }

  // description係新加嘅optional欄位；未填嘅話就用返games.js已經有嘅pitch頂住，
  // 你之後想寫長啲嘅心得/技術細節，直接喺games.js加 description: '...' 就得。

  // edit-me：想放好多張圖，喺games.js幫呢隻game加
  //   images: ['/games/xxx-1.jpg', '/games/xxx-2.jpg', '/games/xxx-3.jpg']
  // 冇加images嘅話，會自動fallback用返你已經填低嘅 cover（得返1張，唔會顯示左右掣）
  const images = game.images && game.images.length > 0 ? game.images : game.cover ? [game.cover] : []

  return (
    <>
      <Nav />
      <div className="wrap detail-page">
        <Link to="/#games" className="btn btn-ghost detail-back">
          ← return to home page
        </Link>

        <header className="detail-head" style={{ '--cart-color': game.color }}>
        
          <h1>{game.title}</h1>
          
          <div className="cart-tags">
            {game.tags.map((t) => (
              <span className="tag" key={t}>
                {t}
              </span>
            ))}
          </div>
          
        </header>

        {/* edit-me:喺games.js幫呢隻game加 cover: '/cover/xxx.jpg' 就會喺度顯示 */}
        {/* game.cover && <img src={game.cover} alt={game.title} className="detail-cover" / */}
        {images.length > 0 && <ImageGallery images={images} title={game.title} />}

        <section className="detail-section">
          <p>"{game.pitch}"</p>
          
          {/*this way the message will separate in different paragraphs automatically*/}
          {game.description && game.description.length > 0 && (
            game.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          )}
        </section>

        {game.embed_link && (
          <section className="detail-section">
            <div className="cart-embed-wrap detail-embed-wrap">
              <iframe
                src={game.embed_link}
                width="1200"
                height="180"
                frameBorder="0"
                title={`${game.title} itch.io embed`}
              />
            </div>
          </section>
        )}

        {(game.link || game.document_link) && (
          <section className="detail-section detail-links">
            {game.link && (
              <a className="btn btn-primary" href={game.link}>
                Play on itch.io
              </a>
            )}
            {/* edit-me:將檔案放喺 public/portfolios/ 度，再幫呢隻game加
                downloadLink: '/portfolios/xxx.pdf' 就會自動出現呢個download掣 */}
            {game.document_link && (
              <a className="btn btn-ghost" href={game.document_link} download>
                Download portfolio file
              </a>
            )}
          </section>
        )}
      </div>
    </>
  )
}

// 獨立抽咗做一個小component，負責記住「而家睇緊第幾張相」同「彈出嗰張大圖有冇開」
function ImageGallery({ images, title }) {
  const [index, setIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  // 撳Escape都可以關返個lightbox
  useEffect(() => {
    if (!lightboxOpen) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxOpen])

  return (
    <div className="detail-gallery">
      <img
        src={images[index]}
        alt={`${title} screenshot ${index + 1}`}
        onClick={() => setLightboxOpen(true)}
      />
      {images.length > 1 && (
        <>
          <button className="gallery-btn prev" onClick={prev} aria-label="Previous image">
            ‹
          </button>
          <button className="gallery-btn next" onClick={next} aria-label="Next image">
            ›
          </button>
          <span className="gallery-counter">
            {index + 1} / {images.length}
          </span>
        </>
      )}

      {lightboxOpen && (
        <div className="lightbox-overlay" onClick={() => setLightboxOpen(false)}>
          <button
            className="lightbox-close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close preview"
          >
            ✕
          </button>
          <img
            src={images[index]}
            alt={`${title} screenshot ${index + 1} full size`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          {images.length > 1 && (
            <>
              <button
                className="gallery-btn prev"
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="gallery-btn next"
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}