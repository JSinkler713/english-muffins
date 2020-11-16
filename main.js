console.log('hey there english muffins rock')

window.addEventListener('load', function() {
  document.querySelector('body').classList.toggle("preload");
});

setTimeout(()=>{
  heroText.classList.toggle('hidden')
  heroImage.classList.toggle('overlay')
}, 750)

const heroImage = document.querySelector('.hero-image-container')

const heroText = document.querySelector('.hero-text')


