function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
window.onscroll=function()
{
  scrollFuncrion()
}
function openMenu() {

  var menu = document.getElementById("navLinks");

  if (menu.style.display === "block") {

    menu.style.display = "none";

  } else {
    menu.style.display = "block";
  }
}

*{box-sizing:border-box}

$(window).scroll(function() { 
  
	if ($(window).scrollTop() > 100 ){
    
 		$('.bg').stop().animate({

   		opacity : 0.5

   	}, 10 );
    
  } else {
    
		$('.bg').stop().animate({

   		opacity : 0.0 


   	}, 200 );				
    
 	};   

});


$('.scroll').on('click', function(e){	

	e.preventDefault()
    
  $('html, body,').animate({

      scrollTop : $(this.hash).offset().top

    }, 1500);


let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {

  showSlides(slideIndex += n);

}

function currentSlide(n) {

  showSlides(slideIndex = n);

}

function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName("mySlides");

  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {slideIndex = 1}

  if (n < 1) {slideIndex = slides.length}

  for (i = 0; i < slides.length; i++) {

    slides[i].style.display = "none";

  }


  for (i = 0; i < dots.length; i++) {

    dots[i].className = dots[i].className.replace(" active", "");

  }

  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";

}

const scrollUp = document.querySelector("#scroll-up");


scrollUp.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    left: 0,

    behavior: "smooth",

  });

});

const inputs = document.querySelectorAll(".input");

function focusFunc() {

  let parent = this.parentNode;

  parent.classList.add("focus");

}

inputs.forEach((input) => {

  input.addEventListener("focus", focusFunc);

  input.addEventListener("blur", blurFunc);

});

function search() {

    var input, filter, ul, li, a, i, txtValue;

    input = document.getElementById("myInput");

    filter = input.value.toUpperCase();

    ul = document.getElementById("myList");

    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {

        a = li[i];

        txtValue = a.textContent;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {

            li[i].style.display = "block";

        } else {

            li[i].style.display = "none";

        }

    }

}


$(document).ready(function() {

        $(function() { 

            $('#theText').draggable({

                containment: 'parent' 

                    
            }); 

        });

    });


   