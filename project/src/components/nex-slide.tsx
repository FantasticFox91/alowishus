import { useSwiper } from 'swiper/react';

export default function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className='review__button' type='button' onClick={() => swiper.slideNext()}>
      <span className="visually-hidden">Previous slide</span>
    </button>
  );
}
