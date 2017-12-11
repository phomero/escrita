$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("button").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/A.mp3");
    l.play();
  });

  var $listItemL = $('#ave');
  var legenda = '<span id="vogalc"> a</span>';
  legenda += '<span id="consc">v</span>';
  legenda += '<span id="vogalc">e</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/AVE.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    z.setAttribute("src", "sounds/AVE.mp3");
    z.play();
    $(this).children('p').remove();
  });

  var $listItemM = $('#abacaxi');
  var legendam = '<span id="vogalc"> a</span>';
  legendam += '<span id="consc">b</span>';
  legendam += '<span id="vogalc">a</span>';
  legendam += '<span id="consc">c</span>';
  legendam += '<span id="vogalc">a</span>';
  legendam += '<span id="consc">x</span>';
  legendam += '<span id="vogalc">i</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ABACAXI.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#arvore');
  var legendar = '<span id="vogalc">á</span>';
  legendar += '<span id="consc">r</span>';
  legendar += '<span id="consc">v</span>';
  legendar += '<span id="vogalc">o</span>';
  legendar += '<span id="consc">r</span>';
  legendar += '<span id="vogalc">e</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ARVORE.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });


});
