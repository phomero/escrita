$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("button").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/E.mp3");
    l.play();
  });

  var $listItemL = $('#ema');
  var legenda = '<span id="vogalc"> e</span>';
  legenda += '<span id="consc">m</span>';
  legenda += '<span id="vogalc">a</span>';

  $listItemL.on('mouseover click', function() {
  	z.setAttribute("src", "sounds/EMA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#escada');
  var legendam = '<span id="vogalc"> e</span>';
  legendam += '<span id="consc">s</span>';
  legendam += '<span id="consc">c</span>';
  legendam += '<span id="vogalc">a</span>';
  legendam += '<span id="consc">d</span>';
  legendam += '<span id="vogalc">a</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ESCADA.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#elefante');
  var legendar = '<span id="vogalc">e</span>';
  legendar += '<span id="consc">l</span>';
  legendar += '<span id="vogalc">e</span>';
  legendar += '<span id="consc">f</span>';
  legendar += '<span id="vogalc">a</span>';
  legendar += '<span id="consc">n</span>';
  legendar += '<span id="consc">t</span>';
  legendar += '<span id="vogalc">e</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ELEFANTE.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });


});
