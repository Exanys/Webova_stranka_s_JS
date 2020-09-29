var image = document.getElementById("image");
var button = document.getElementById("button");
var p1 = document.getElementById("text1");
var p2 = document.getElementById("text2");
var p3 = document.getElementById("text3");
var p4 = document.getElementById("text4");

function changeBG() {
  image.src = "Photos/paris.jpeg";
  button.innerText = "Image has been changed";
}

function changeTheme() {
  p1.style.background = "black";
  p1.style.color = "white";
  p2.style.background = "darkblue";
  p2.style.color = "lightgrey";
  p3.style.background = "red";
  p3.style.color = "yellow";
  p4.style.background = "green";
  p4.style.color = "black";
  document.body.style.backgroundColor = "grey";
}

function about(typ) {
  window.alert("This pharagraph is about " + typ);
}