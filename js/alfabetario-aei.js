$(document).ready(function(){

  $("#a").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/A.mp3");
    l.play();
  });  

  $("#e").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/E.mp3");
    le.play();
  }); 

  $("#i").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/I.mp3");
    l.play();
  }); 

 
});
