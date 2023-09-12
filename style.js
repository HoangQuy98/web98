
var images = [
    "a1.jpg",
    "a2.jpg",
    
  ];
  
  var currentIndex = 0; 
  var imageElement = document.getElementById("image");
  var prevButton = document.getElementById("prev-button");
  var nextButton = document.getElementById("next-button");
  prevButton.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }
    imageElement.src = images[currentIndex];
  });
  
  nextButton.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= images.length) {
      currentIndex = 0;
    }
    imageElement.src = images[currentIndex];
  });