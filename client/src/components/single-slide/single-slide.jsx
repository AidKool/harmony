
function singleSlide(props) {
  return (
    <div className="keen-slider__slide number-slide">
      <div className="poster-card">
        <button className='sliderButton' >
          <img
            className="poster-card-img"
            src={props.image}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default singleSlide