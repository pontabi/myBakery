'use strict';

{
  class HumbergerMenu {
    constructor() {
      this.open = document.getElementById('open');
      this.close = document.getElementById('close');
      this.overlay = document.querySelector('.overlay');
      this.addEventLis();
    }
      addEventLis() {
        this.open.addEventListener('click', () => {
          overlay.classList.add('show');
        });
      
        this.close.addEventListener('click', () => {
          this.overlay.classList.remove('show');
        });
      }
  }

  class SlideShow {
    constructor() {
      this.slideShow(0);
    }
    
    slideShow(counter) {
      const images = [
        './img/mv-background0.jpg',
        './img/mv-background1.jpg',
        './img/mv-background2.jpg',
      ];
      document.getElementById('mv').style.backgroundImage = `url(${images[counter % images.length]})`;
      counter++;
      // console.log(count);
      // const randomIndex = Math.floor(Math.random() * images.length);
      setTimeout(() => {
        this.slideShow(counter);
      }, 3000);
    }
  }

  class Callendar {
    constructor() {
      this.
    }
  }
  
  new HumbergerMenu();
  new SlideShow();
}