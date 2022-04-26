import React from 'react'

function duoSection() {
  return (
    <section className="duo-section">
      <div className="duo-section-card-title-container">
        <div className="duo-section-title-holder">
          <p className="duo-title">Get rocking</p>
        </div>
        <div className="duo-card-container">
          <article className="duo-card dc1">
            <div className="duo-card-content-container">
              <p className="duo-card-title">
                Lorem ipsum dolor <br /> sit amet lore{' '}
              </p>
              <a className="duo-card-link" href="">
                Click
              </a>
            </div>
          </article>

          <article className="duo-card dc2">
            <div className="duo-card-content-container">
              <p className="duo-card-title">
                Lorem ipsum dolor <br /> sit amet lore{' '}
              </p>
              <a className="duo-card-link" href="">
                Click
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default duoSection;