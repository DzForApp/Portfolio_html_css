var slidePosition =0;
SlideShow(slidePosition + 1);

// forward/Back controls
function plusSlides(n) {
  SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
  SlideShow(slidePosition = n);
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
   
  var circles = document.getElementsByClassName("dote");
  if (n > slides.length) {slidePosition = 1}
  if (n < 1) {slidePosition = slides.length+1}
     
     for (i = 0; i < slides.length; i++) {
           
            slides[i].style.display = "none";
           
     }
     
  
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition-1].style.display = "block";
  circles[slidePosition-1].className += " active";
  setTimeout(showSlides, 2000);
} 


