document.addEventListener('DOMContentLoaded', function () {
  //Mobile Menu
  const toggleButton =document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu =document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', function(){
    mobileMenu.classList.toggle('active');
  });

// Video Modal
const modal = document.getElementById('videoModal');
const videoButton = document.querySelector('.preview__video-button');
const closeButton = document.querySelector('.modal__close-button');
const videoPlayer = document.getElementById('videoPlayer');

// Open Modal when clicked
videoButton.addEventListener('click', function () {
  // Show modal
  modal.style.display = 'block';
  // Replace source attribute
videoPlayer.src = 'https://www.youtube.com/watch?v=3ZBrjJIU6ok';
// Close modal
closeButton.addEventListener('click', function () {
modal.style.display = 'none';
videoPlayer.src='';
});
// Close Modal on click outside
window.addEventListener('click', function (event) {
if (event.target == modal) {
  modal.style.display = 'none';
  videoPlayer.src='';
}
});
});
});

// Navigation background on scroll
window.addEventListener('scroll', function () {
const navbar = this.document.querySelector('.navbar');
if (window.scrollY >0) {
  navbar.classList.add('navbar--scroll');
} else {
  navbar.classList.remove('navbar--scroll');
}
});