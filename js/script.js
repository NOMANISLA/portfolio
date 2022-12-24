
// let bg_color = document.querySelector('.bg_color')
// window.addEventListener('scroll', function(){
//     bg_color.style.backgroundColor ='grey'

// })
// const bar = document.querySelector('#ba')
// window.addEventListener('scroll', function(){
//   bar.
// })
let current = document.getElementById('.current')
$(function(){
    'use strict'
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    



})

$('.imeges_galary').mixItUp({  

    selectors: {
      target: '.tile',
      filter: '.filter',
      sort: '.sort-btn'
    },
    
        animation: {
        animateResizeContainer: false,
        effects: 'fade scale'
      }
  
  });
  new VenoBox({
    selector: '.imges_popup',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
new VenoBox({
  width:'500vw',
    hight:'300vh',
  selector: '.my-video-links',
});
// const dist = document.querySelector('#bee');

// document.querySelector('button').addEventListener('scroll', () => {
//   dist.classList.remove('moveright');
//   setTimeout(function(){
//     dist.classList.add('moveright');
//   },100);
// });

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("bar");  
    var width = 10;
    var id = setInterval(frame, 15);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
        
      }
    }
  }
}

$('.slick_slider').slik()