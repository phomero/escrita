$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("button").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/O.mp3");
    l.play();
  });

  var $listItemL = $('#ovo');
  var legenda = '<span id="vogalc"> o</span>';
  legenda += '<span id="consc">v</span>';
  legenda += '<span id="consc">o</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/OVO.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#onca');
  var legendam = '<span id="vogalc"> o</span>';
  legendam += '<span id="consc">n</span>';
  legendam += '<span id="consc">ç</span>';
  legendam += '<span id="vogalc">a</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ONÇA.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#osso');
  var legendar = '<span id="vogalc">o</span>';
  legendar += '<span id="consc">s</span>';
  legendar += '<span id="consc">s</span>';
  legendar += '<span id="vogalc">o</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/OSSO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });


});
