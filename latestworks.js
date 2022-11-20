//Header//
document.getElementById("header").innerHTML = `
<div class="logo">
    <a href="index.html"><img class="imagen_logo" src="IMG/AlveArt-Mano-Alpha.png" alt=""></a>
</div>
<div class="contenido_header">
  <h1> AlveArt </h1>
  <h2> Art Gallery </h2>
</div>
`

//Footer//
document.getElementById("footer").innerHTML = `<div>
  <a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
  <a class="redsoc" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
  <a class="redsoc" href="https://ar.pinterest.com/" target="_blank"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
  <a class="redsoc" href="https://www.instagram.com/?hl=es" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
  <a class="redsoc" href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
  <p> © Copyright 2022 AlveArt. All rights reserved.</p></div>
  `


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
