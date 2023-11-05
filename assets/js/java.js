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
  carouselSlide.style.transform = `translateX(${-cardWidth * 8}px)`;
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
// $(".dropdown").click(function() {
//   $(".dropdown-toggle").css("transform", "translateY(-20px)");
// });
// $(".dropdown").click(function() {
//   $(".dropdown-toggle").css("transform", "translateY(0px)");
// });

// function showSearchbar() {
//   var search = document.getElementById("searchbar");
//   var inputsearch = document.getElementById("searchinput");
//   var allsite = document.getElementById("allmarginright");
//   search.onclick = function () {
//     if
//       (inputsearch.style.display === "none") {
//       inputsearch.style.display = "block";
//       allsite.style.filter = "brightness(30%)"

//     } else {
//       inputsearch.style.display = "none";
//       allsite.style.filter = ""
//     }
//   }
//   //for hide when i click on site
//   document.addEventListener("click", function (event) {
//     var target = event.target;
//     if (!search.contains(target)) {
//       inputsearch.style.display = "none";
//       allsite.style.filter = "";
//     }
//   });
// }
function showSearchbar() {
  var search = document.getElementById("searchbar");
  var inputsearch = document.getElementById("searchinput");
  var allsite = document.getElementById("allmarginright");

  search.addEventListener("click", function (event) {
    if (inputsearch.style.display === "none" || inputsearch.style.display === "") {
      inputsearch.style.display = "block";
      allsite.style.filter = "brightness(30%)";
    } else {
      inputsearch.style.display = "none";
      allsite.style.filter = "";
    }
    event.stopPropagation();
  });

  inputsearch.addEventListener("click", function (event) {
    event.stopPropagation();
  });

  document.addEventListener("click", function () {
    if (inputsearch.style.display === "block") {
      inputsearch.style.display = "none";
      allsite.style.filter = "";
    }
  });
}


function sideNavBurger() {
  var burgurBtn = document.getElementById("burgerbtnnav");
  burgurBtn.onclick = function () {
    var navitems = document.getElementById("navbarSupportedContent");
    if (navitems.style.display === "flex") {
      navitems.style.display = "none"
      document.getElementById("fullsidenav").style.marginRight = "0px"
      document.getElementById("allmarginright").style.display = "block"
    }
    else {
      navitems.style.display = "flex"
      document.getElementById("fullsidenav").style.marginRight = "0px"
      document.getElementById("allmarginright").style.display = "none"
    }
    transition = 1
  }
}


// function goNegative() {
//   var clicknega = document.getElementById("changenegative");
//   var changnega = document.getElementById("fanegative");
//   var showdiv= document.getElementById("collapseExample2")
//   clicknega.addEventListener("click", function () { 
//     if (showdiv.classList.contains("show")) {
//       changnega.innerHTML = " <i class='fa fa-minus'></i>"
//     }
//     else {
//       changnega.innerHTML = "<i class='fa fa-plus'></i>"
//     }
//   })
// }


// function goNegative(){
//   var clicknega = document.getElementById("changenegative");
//   var changnega = document.getElementById("fanegative");
//   clicknega.onclick =function(){
//     changnega.classList.toggle()
//   }
// }





// function goNegative() {
//   var clicknega = document.getElementById("changenegative");
//   var changnega = document.getElementById("fanegative");
//   var changnega1 = document.getElementById("faplus");

//   clicknega.addEventListener("click", function() {
//     if (changnega.classList.contains("invis")||changnega1.classList.contains("invis")){
//       changnega.classList.toggle("invis")
//     }
//   });
// }

// function goNegative() {
//   var changnega = document.getElementById("faplus");
//   var changnega1 = document.getElementById("fanegative");
//   changnega.classList.toggle("invis");
//   changnega1.classList.toggle("invis");
// }
// function goNegative() {
//   var allmobilefooter = document.getElementById("footer");
//   var colapsitem = allmobilefooter.querySelectorAll(".changenegative");
//   var liItems = allmobilefooter.querySelectorAll(".collapse")
//   for (var i = 0; i < colapsitem.length; i++) {

//     if (liItems[i].display =="block") {
//       colapsitem[i].innerHTML = " <i class='fa fa-minus invis' id='fanegative'></i>"
//     }
//     else {
//       if (liItems[i].display =="none") {
//       colapsitem[i].innerHTML = " <i class='fa fa-plus noinvis' id='faplus'></i>"
//       }
//     }
//   }
// }






// function goNegative() {
//   var allmobilefooter = document.getElementById("footer");
//   var colapsitem = allmobilefooter.querySelectorAll(".changenegative");
//   var liItems = allmobilefooter.querySelectorAll(".collapse");

//   for (var i = 0; i < liItems.length; i++) {
//     if (liItems[i].classList.contains("show")) {
//       colapsitem[i].innerHTML = "-";
//     }
//     else {
//       colapsitem[i].innerHTML = "+";
//     }
//   }
// }

// function goNegative() {
//   var allmobilefooter = document.getElementById("footer");
//   var colapsitem = allmobilefooter.querySelectorAll(".changenegative");
//   var liItems = allmobilefooter.querySelectorAll(".collapse");
//   var button = allmobilefooter.querySelectorAll(".mobilebtn");

//   for (var i = 0; i < button.length; i++) {
//     button[i].addEventListener("click", function() {
//       for (var j ; j<liItems.length ; j++){
//       if (liItems[j].classList.contains("show")) {
//         colapsitem[j].textContent = "-";
//       } else {
//         colapsitem[j].textContent = "+";
//       }
//       }
//     });
//   }
// }

function goNegative() {
  var allmobilefooter = document.getElementById("footer");
  var colapsitem = allmobilefooter.querySelectorAll(".changenegative");
  var liItems = allmobilefooter.querySelectorAll(".collapse");
  var button = allmobilefooter.querySelectorAll(".mobilebtn");
  
  for (var i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
     
      for (var j = 0; j < liItems.length; j++) { 
        var currentitem = this
        for (var k =0 ; k<colapsitem.length ; k++){
        if ( !button[j].classList.contains("collapsed")) {
          
          colapsitem[j].textContent = "-";
     
        } else {
          colapsitem[j].textContent = "+";
      
        }}
      }
    });
  }
}




// function goNegative() {
//   var i = changnega.length;
//   var j = changnega1.length;
//   i++;
//   j++;
//    var changnega = document.getElementsByClassName("noinvis")[i];
//  var changnega1 = document.getElementsByClassName("invis")[i];

// changnega.classList.toggle("invis");
//  changnega1.classList.toggle("invis"); }

// function goNegative() {
//   var changnega = document.querySelectorAll(".noinvis");
//   var changnega1 = document.querySelectorAll(".invis");

//   for (var i = 0; i < changnegas.length; i++) {
//     changnega[i].classList.toggle("invis");
//     changnega1[i].classList.toggle("invis");
//   }
// }

// function goNegative() {
//   var main = document.querySelectorAll(".changenegative")
//   var changnegas = document.querySelectorAll(".noinvis");
//   var changnega1s = document.querySelectorAll(".invis");
// addEventListener("click",function(){
//   for (var i = 0; i < main.length; i++) {
//     changnegas[i].classList.toggle("invis");
//     changnega1s[i].classList.toggle("noinvis");
//   }})
// }

// function goNegative() {
//   var ids = [{"faplus", "fanegative"},{"faplus1", "fanegative1"},{"faplus2", "fanegative2"},{"faplus3", "fanegative3"},{"faplus4", "fanegative4"},{"faplus5", "fanegative5"}];

//   for (var i = 0; i < ids.length; i++) {
//     var element = document.getElementById(ids[i]);
//     element.classList.toggle("invis");
//   }
// }

// function goNegative() {
//   var ids = [["faplus", "fanegative"], ["faplus1", "fanegative1"], ["faplus2", "fanegative2"], ["faplus3", "fanegative3"], ["faplus4", "fanegative4"], ["faplus5", "fanegative5"]];

//   for (var i = 0; i < ids.length; i++) {
//     var element1 = document.getElementById(ids[i][0]);
//     element1.classList.add("invis");

//     var element2 = document.getElementById(ids[i][1]);
//     element2.classList.remove("invis");
//   }
// }