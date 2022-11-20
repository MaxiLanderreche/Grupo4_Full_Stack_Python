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

//carousel//
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

//carousel_latestworks//





function quoteMe(){

  let cp = prompt("What's your post code?");
  let API_URL = "https://apis.andreani.com/v1/tarifas?cpDestino="+ cp +"&contrato=300006611&cliente=CL0003750&sucursalOrigen=TRI&bultos[0][valorDeclarado]=1200&bultos[0][volumen]=200&bultos[0][kilos]=1.3&bultos[0][altoCm]=1&bultos[0][largoCm]=1.5&bultos[0][anchoCm]=2";
  
   fetch(API_URL)
        .then((response) => response.json())
        .then((json) => {
                   console.log(json.tarifaConIva.total);
                   //let costValue = json.tarifaConIva.total;
                   //console.log(costValue);
                   alert ("Your shiping cost is $"+ json.tarifaConIva.total);
              });

}
