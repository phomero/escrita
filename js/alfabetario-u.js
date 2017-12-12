$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("button").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/U.mp3");
    l.play();
  });

  var $listItemL = $('#uva');
  var legenda = '<span id="vogalc"> u</span>';
  legenda += '<span id="consc">v</span>';
  legenda += '<span id="consc">a</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/UVA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#urso');
  var legendam = '<span id="vogalc"> u</span>';
  legendam += '<span id="consc">r</span>';
  legendam += '<span id="consc">s</span>';
  legendam += '<span id="vogalc">o</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/URSO.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#urubu');
  var legendar = '<span id="vogalc">u</span>';
  legendar += '<span id="consc">r</span>';
  legendar += '<span id="vogalc">u</span>';
  legendar += '<span id="consc">b</span>';
  legendar += '<span id="vogalc">u</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/URUBU.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });


});
