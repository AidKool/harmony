import React from 'react'

function questionSection() {
  return (
    <section className="questions-section">
      <div className="questions-container">
        <div className="question-title-holder">
          <h2 className="question-title-heading">Got any questions?</h2>
          <p className="questions">
            If you need any help with anything.
            <br /> Please feel free to get in touch
          </p>
          <a className="help-button" target="_blank" href="https://github.com/AidKool/harmony">
            Say hello
          </a>
        </div>
        <img
          className="questions-image"
          src={require('../../pages/home/assets/music-illustrations-lim-heng-swee-fb4.png')}
        />
      </div>
    </section>
  );
}

export default questionSection;