import './services.scss';

function Services(): JSX.Element {
  return (
    <section className="page-section">
      <div className="services">
        <h2 className="services__heading page-section__heading">Explore Our Alowishus</h2>
        <p className="services__text page-section__text">A drink from the ‘My Alowishus’ bottled brews <br /> range OR grab one of our delicious coffee’s.</p>
        <ul className="services__list">
          <li className="services__item">
            <div className="service-card">
              <h3 className="service-card__heading">Our Catering</h3>
              <p className="services-card__text">Alowishus Catering, delicious drop off Catering</p>
              <svg className="services-card__image" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M125.625 78.709a13.255 13.255 0 0 1-1.733-2.527c-.234 24.122-19.927 43.675-44.103 43.675-24.32 0-44.108-19.787-44.108-44.108 0-24.321 19.787-44.108 44.108-44.108 20.922 0 38.489 14.644 42.99 34.22l3.994-29.694.09-.668c-11.374-13.283-28.256-21.716-47.074-21.716-14.68 0-28.183 5.135-38.812 13.7v14.285c0 8.4-4.354 16.07-11.243 20.452v50.009c11.28 15.436 29.514 25.485 50.055 25.485 21.584 0 40.623-11.095 51.721-27.88V82.594a13.273 13.273 0 0 1-5.885-3.885Z" fill="#64646A"/><path d="M79.79 39.137c-20.189 0-36.613 16.424-36.613 36.612 0 20.189 16.424 36.612 36.612 36.612 20.188 0 36.612-16.423 36.612-36.612 0-20.188-16.424-36.612-36.612-36.612ZM149.833 7.234a5.776 5.776 0 0 0-11.501-.77l-8.44 62.74a5.777 5.777 0 0 0 5.725 6.546h3.389v67.295a5.497 5.497 0 1 0 10.993 0l-.166-135.811ZM33.481 8.454a3.747 3.747 0 1 0-7.496 0v20.738H20.49V8.454a3.747 3.747 0 1 0-7.496 0v20.738H7.496V8.454a3.747 3.747 0 1 0-7.496 0v33.814c0 7.305 4.706 13.529 11.244 15.81v84.967a5.497 5.497 0 0 0 10.994 0V58.077c6.538-2.28 11.243-8.504 11.243-15.81V8.455Z" fill="#64646A"/>
              </svg>
              <button className="services-card__button button-primarly">Order cathering</button>
            </div>
          </li>
          <li className="services__item">
            <div className="service-card">
              <h3 className="service-card__heading">The Food</h3>
              <p className="services-card__text">Our entire menu is available as dine in or takeaway.</p>
              <svg className="services-card__image" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#a)" fill="#64646A">
                  <path d="M45 104c-4-2-6-6-6-11 0-20 16-37 36-37h15l1-11H6l6 101c0 2 2 4 4 4h27c-3-4-4-8-4-13 0-6 3-11 8-13a17 17 0 0 1 0-19l-2-1ZM48 36h44a4 4 0 1 0 0-9H56L68 9h15a4 4 0 1 0 0-9H66l-4 2-16 25H4a4 4 0 1 0 0 9h44Z"/>
                  <path d="M47 93c0 2 2 4 5 4h94c2 0 4-2 4-4 0-15-12-28-28-28H75c-15 0-28 13-28 28ZM62 106a9 9 0 1 0 0 18h73a9 9 0 0 0 0-18H62ZM146 132H52c-3 0-5 2-5 5 0 7 6 13 14 13h76c7 0 13-6 13-13 0-3-2-5-4-5Z"/>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h150v150H0z"/>
                  </clipPath>
                </defs>
              </svg>
              <button className="services-card__button button-primarly">food menu</button>
            </div>
          </li>
          <li className="services__item">
            <div className="service-card">
              <h3 className="service-card__heading">The Gelato</h3>
              <p className="services-card__text">Life is like GELATO, enjoy it before it melts.</p>
              <svg className="services-card__image" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#a)">
                  <path d="M116 52c-2-1-2-3-2-5a40 40 0 1 0-79 0c0 2 0 4-2 5-4 3-6 8-6 13 1 14 18 19 26 9h1l2 4v6l2 7c6 5 16 1 16-7V69c0-3 4-5 6-3l2 3v8c0 5 4 9 9 9 7 0 8-6 8-9a15 15 0 1 0 17-25ZM68 21l-3 1c-3 0-3-4-1-5l3-1a3 3 0 1 1 1 5ZM53 37c-2 0-3-1-3-3l5-10a3 3 0 0 1 4 3l-4 8-2 2Zm51 47c2 0 3 2 2 3l-22 57c-4 8-16 8-19 0L43 87c-1-1 0-3 2-3l3-1c1 0 3 1 3 3s1 5 4 8c8 8 20 4 23-5 0-2 2-2 4-1 6 5 16 4 20-3l2-1Z" fill="#64646A"/>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h150v150H0z"/>
                  </clipPath>
                </defs>
              </svg>
              <button className="services-card__button button-primarly">Discover more</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Services;
