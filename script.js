function showBox() {
  var content = document.getElementById("share-box-desktop");
  var icon = document.getElementById("share-icon");

  var mainBottom = document.getElementById("main-bottom");
  var mainBottomActive = document.getElementById("main-bottom-active");

  color = "hsl(217, 19%, 35%)";

  //alert(window.innerWidth);

  if(window.innerWidth <= 782){

    if (mainBottomActive.style.display === "none") {
      mainBottomActive.style.display = "block";
      mainBottom.style.display ="none"; // Show content
    } else {
      mainBottomActive.style.display = "none";
      mainBottom.style.display ="flex";
    }

  } else {

    if (content.style.display === "none") {
      content.style.display = "block"; // Show content
      icon.style.background = color;
    } else {
      content.style.display = "none";
      icon.style.background = ""; // Hide content
    }
    
  }
}