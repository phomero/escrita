$(document).ready(function(){

  $("#o").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/O.mp3");
    l.play();
  });  

  $("#u").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/U.mp3");
    le.play();
  }); 
 

});
