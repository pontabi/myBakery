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
}