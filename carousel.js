// find all items with class="carousel" and put them in an array
let currentPicture = document.getElementById("firstImage");
// right button will hide current picture, move up one index in array, then show picture
let nextButton = document.getElementById("nextBtn");

document.getElementById("nextBtn").addEventListener("click", () => {
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