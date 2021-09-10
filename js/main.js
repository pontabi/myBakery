'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  open.addEventListener('click', () => {
    overlay.classList.add('show');
  });

  const close = document.getElementById('close');
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
  });

  let count = 0;
  function slideShow() {
    const images = [
      './img/mv-background0.jpg',
      './img/mv-background1.jpg',
      './img/mv-background2.jpg',
    ];
    document.getElementById('mv').style.background = `url(${images[count % images.length]})`;
    count++;
    // const randomIndex = Math.floor(Math.random() * images.length);
    setTimeout(slideShow, 3000);
  }
  slideShow();
}