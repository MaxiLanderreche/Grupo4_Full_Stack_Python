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
document.getElementById("footer").innerHTML = `
  <a class="redsoc" href="https://www.twitter.com" target="_blank"><i class="fa fa-twitter" aria-hidden="true"></i></a>
  <a class="redsoc" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" aria-hidden="true"></i></a>
  <a class="redsoc" href="https://ar.pinterest.com/" target="_blank"><i class="fa fa-pinterest" aria-hidden="true"></i></a>
  <a class="redsoc" href="https://www.instagram.com/?hl=es" target="_blank"><i class="fa fa-instagram" aria-hidden="true"></i></a>
  <a class="redsoc" href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin" aria-hidden="true"></i></a>
  <p> © Copyright 2022 AlveArt. All rights reserved.</p>
  `

//carousel//
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

