$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#ca").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/CA.mp3");
    l.play();
  });  

  $("#co").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/CO.mp3");
    le.play();
  }); 

  $("#cu").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/CU.mp3");
    l.play();
  }); 

  var $listItemL = $('#caju');
  var legenda = '<span id="consc"> c</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">j</span>';
  legenda += '<span id="vogalc">u</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/CAJU.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#côco');
  var legendam = '<span id="consc">c</span>';
  legendam += '<span id="vogalc">ô</span>';
  legendam += '<span id="consc">c</span>';
  legendam += '<span id="vogalc">o</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/CÔCO.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#cubo');
  var legendar = '<span id="consc">c</span>';
  legendar += '<span id="vogalc">u</span>';
  legendar += '<span id="consc">b</span>';  
  legendar += '<span id="vogalc">o</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/CUBO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });  

  
});
