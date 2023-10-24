import "./styles.css";

document.getElementById("app").innerHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="src/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@500&family=Tilt+Neon&family=Ubuntu:wght@300&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant&family=Tilt+Neon&family=Ubuntu:wght@300&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Arsenal&family=Cormorant&family=Tilt+Neon&family=Ubuntu:wght@300&display=swap" rel="stylesheet">

  </head>
  <body>
    <header>
  <!-- header co Nikolay Kolev -->
  <a class="logo" href="http://minimaldev.com">JIM SHEBIB</a>
  
  <input id="nav" type="checkbox">
  <label for="nav"></label>
  
  <nav>
    <ul>
      <li><a href="#">Works on Paper</a></li>
      <li><a href="#">Painting</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">CV</a></li>
    </ul>
  </nav> 
  
</header>
   <div class="wrapper">
      <div class="griditem"><img id="myImg" src="https://jimshebib.cc/cdn-cgi/imagedelivery/GQWI_LD5tR7d0YM7NU81VA/91fb6cce-f752-4cd6-4875-1bf2d0a24500/public" alt="(After Cezanne)"></div>
      <div class="griditem"><img id="myImg2" src="https://jimshebib.cc/cdn-cgi/imagedelivery/GQWI_LD5tR7d0YM7NU81VA/1327b952-3c97-470d-bd01-16c65cac6d00/public" alt="Groves Point in Late Summer"></div>
      <div class="griditem"><img id="myImg" src="https://jimshebib.cc/cdn-cgi/imagedelivery/GQWI_LD5tR7d0YM7NU81VA/aaa60e64-3ef4-4c2a-ff1b-9386f982e600/public" alt="Snow"></div>
      <div class="griditem"><img id="myImg" src="https://jimshebib.cc/cdn-cgi/imagedelivery/GQWI_LD5tR7d0YM7NU81VA/0b9e2ec8-95e9-4bba-4453-556b7e343800/public" alt="Snow"></div>
      <div class="griditem"><img id="myImg" src="https://jimshebib.cc/cdn-cgi/imagedelivery/GQWI_LD5tR7d0YM7NU81VA/683f26da-51d9-477e-af37-a5abcda7e700/public" alt="Snow"></div>
    </div>

  <!-- The Modal -->
  <div id="myModal" class="modal">

  <!-- the Close Button -->
  <span class="close">&times;</span>

  <!-- Modal Content (the Image) -->
  <img class="modal-content" id="img01">
  <div id="caption"></div></div>

  




    <script src="src/script.js" type="module"></script>
    
  </body>
</html>
`;

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}



// Get the modal 2nd time
var modal2 = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal2.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal2.style.display = "none";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
