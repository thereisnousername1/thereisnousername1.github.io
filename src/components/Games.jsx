import { Link } from 'react-router-dom'
import { games } from '../data/games.js'

export default function Games() {
  return (
    <section className="games" id="games">
      <div className="wrap">
        <div className="section-head">
          <h2>Games</h2>
          <p>Here are some of the games I have developed individually or as part of a team. Details could be viewed on corresponding pages.</p>
        </div>

        {/* each card */}
        <div className="shelf">
          {games.map((g, i) => (
            <article className="cart" key={g.slug} style={{ '--cart-color': g.color }}>
              
              <span className="cart-index">
                {String(i + 1).padStart(2, '0')} / {String(games.length).padStart(2, '0')}
              </span>
              
              <Link className="cart-link" to={`/games/${g.slug}`}>
                {g.cover && <img src={g.cover} alt={g.title} className="cart-cover" />}
              </Link>

              <h3>{g.title}</h3>
              
              <p>{g.pitch}</p>

              {g.contributions && g.contributions.length > 0 && (
                <ul className="cart-contributions">
                  {g.contributions.map((c, i) => (
                    <li key={i}><b><i>{c}</i></b></li>
                  ))}
                </ul>
              )}

              <p><i>{g.quick_info}</i></p>
              
              {g.embed_link && (
                <div className="cart-embed-wrap">
                  <iframe
                    src={g.embed_link}
                    width="552"
                    height="167"
                    frameBorder="0"
                    title={`${g.title} itch.io embed`}
                  />
                </div>
              )}

              <div className="cart-tags">
                {g.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              {/* 呢度由 <a href="#"> 轉做 <Link to="..."> — 呢個先係「跳頁」嘅正確做法 */}
              <Link className="cart-link" to={`/games/${g.slug}`}>
                Learn more
              </Link>

            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
