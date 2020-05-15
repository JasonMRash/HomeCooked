// find all items with class="carousel" and put them in an array
let currentPicture = document.getElementById("firstImage");
// right button will hide current picture, move up one index in array, then show picture
let nextButton = document.getElementById("nextBtn");

nextButton.addEventListener("click", () => {
  if (currentPicture.nextElementSibling){
    currentPicture.style.display="none";
    currentPicture = currentPicture.nextElementSibling;
    currentPicture.style.display="inline";
  }
  // else go back to first image
  else {
    currentPicture.style.display="none";
    currentPicture=document.getElementById("firstImage");
    currentPicture.style.display="inline";
  }
});
// left button will hide current picuture, move down one index in array, then show picture
let previousButton = document.getElementById("previousBtn");

previousButton.addEventListener("click", () => {
  if (currentPicture.previousElementSibling){
    currentPicture.style.display="none";
    currentPicture = currentPicture.previousElementSibling;
    currentPicture.style.display="inline";
  }

  else {
    currentPicture.style.display="none";
    currentPicture=document.getElementById("lastImage");
    currentPicture.style.display="inline";
  }
})

// should I add in a stop inteval 
autoCarousel = setInterval(() => {
  if (currentPicture.nextElementSibling){
    currentPicture.style.display="none";
    currentPicture = currentPicture.nextElementSibling;
    currentPicture.style.display="inline";
  }
  // else go back to first image
  else {
    currentPicture.style.display="none";
    currentPicture=document.getElementById("firstImage");
    currentPicture.style.display="inline";
  }
}, 3000);

