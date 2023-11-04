// scroll
function scrollL() {
    var container = document.querySelector('.banner-contenido');
    container.scrollLeft -= 250;
  }
   
  function scrollR() {
    var container = document.querySelector('.banner-contenido');
    container.scrollLeft += 250;
  } 


//  scroll images
function imgBanner(img){
    let imgP = document.getElementById("img-banner-c")
    let imgNone = document.getElementById("img-banner-none")
    imgNone.style.display = "none"
    imgP.src = img.src
}