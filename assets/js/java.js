const carouselSlide = document.querySelector('.carousel-slide');
const carouselCards = Array.from(document.querySelectorAll('.carousel-card'));
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');
const cardWidth = carouselCards[0].getBoundingClientRect().width;
carouselCards[0].style.transform = `translateX(${400}px)`;
carouselCards[1].style.transform = `translateX(${400}px)`;
carouselCards[2].style.transform = `translateX(${400}px)`;


// Set initial position of the slide
carouselSlide.style.transform = `translateX(${-cardWidth}px)`;

const slideLeft = () => {
  carouselSlide.style.transition = "transform 2s ease-in-out";
  carouselSlide.style.transform = `translateX(${-cardWidth * 3}px)`;
  setTimeout(() => {
    carouselSlide.style.transition = "none";
    carouselSlide.appendChild(carouselCards[0]);
    carouselSlide.style.transform = `translateX(${-cardWidth}px)`;
    carouselCards.push(carouselCards.shift());
  }, 500);
};

// Slide the carousel to the right
const slideRight = () => {
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  carouselSlide.style.transform = `translateX(0)`;
  setTimeout(() => {
    carouselSlide.style.transition = "none";
    carouselSlide.insertBefore(carouselCards[carouselCards.length - 1], carouselCards[0]);
    carouselSlide.style.transform = `translateX(${-cardWidth}px)`;
    carouselCards.unshift(carouselCards.pop());
  }, 500);
};
// Update the active indicator
const updateIndicators = () => {
  carouselIndicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
};
// Add click event listeners to the buttons
prevButton.addEventListener('click', slideRight);
nextButton.addEventListener('click', slideLeft);



$('#playButton').click(function () {
  $('#carouselExampleFade').carousel('cycle');
});
$('#pauseButton').click(function () {
  $('#carouselExampleFade').carousel('pause');
});



// function changePage(){
//  document.getElementById('topGames').classList.remove('mytransform');
//  document.getElementById('newRelease').classList.add('mytransform');

//  document.getElementById('topBt').classList.remove('unknowm');
//  document.getElementById('newBt').classList.add('unknowm');
//  document.getElementById('newBt').classList.remove('usseless');
//  document.getElementById('topBt').classList.add('usseless');


// }
// function changePageTwo(){
//  document.getElementById('newRelease').classList.remove('mytransform');
//  document.getElementById('topGames').classList.add('mytransform');

//  document.getElementById('newBt').classList.remove('unknowm');
//  document.getElementById('topBt').classList.add('unknowm');
//  document.getElementById('topBt').classList.remove('usseless');
//  document.getElementById('newBt').classList.add('usseless');

//  this.style.transition = 1
// }
function changePage() {
  var topGames = document.getElementById('topGames');
  var newRelease = document.getElementById('newRelease');
  var topBt = document.getElementById('topBt');
  var newBt = document.getElementById('newBt');

  topGames.classList.remove('mytransform');
  newRelease.classList.add('mytransform');
  topBt.classList.remove('unknowm');
  newBt.classList.add('unknowm');
  newBt.classList.remove('usseless');
  topBt.classList.add('usseless');
}

function changePageTwo() {
  var topGames = document.getElementById('topGames');
  var newRelease = document.getElementById('newRelease');
  var topBt = document.getElementById('topBt');
  var newBt = document.getElementById('newBt');

  newRelease.classList.remove('mytransform');
  topGames.classList.add('mytransform');
  newBt.classList.remove('unknowm');
  topBt.classList.add('unknowm');
  topBt.classList.remove('usseless');
  newBt.classList.add('usseless');

  this.style.animation = '3s';
}

// $(document).ready(function(){
//   $("#navbarDropdown").click(function(){
//     $("#navbarDropdown").css("display", "flex").css("flex-wrap", "wrap");
//   });
// });

// $(".dropdown").click(function () {
//   $(this).css("transition, 1s");
// }
// )
// $("#godp").click(function() {
//   $(this).animate({ opacity: 0.5 });

// });
$(".dropdown").click(function() {
  $(".dropdown-toggle").css("transform", "translateY(-20px)");
});
$(".dropdown").click(function() {
  $(".dropdown-toggle").css("transform", "translateY(0px)");
});