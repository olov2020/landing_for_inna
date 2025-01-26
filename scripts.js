'use strict';

const homeInfo = document.getElementById('home-info');
const distanceFromTop = homeInfo.getBoundingClientRect().top;

const appear = () => {

  homeInfo.classList.toggle('fromLeft', distanceFromTop <= 500);

  console.log(distanceFromTop);
}

window.onload = () => {
  appear();
}