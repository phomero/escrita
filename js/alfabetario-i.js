$(document).ready(function(){

  var z = document.createElement("AUDIO");
 
  $("button").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/I.mp3");
    l.play();
  });

  var $listItemL = $('#igreja');
  var legenda = '<span id="vogalc"> i</span>';
  legenda += '<span id="consc">g</span>';
  legenda += '<span id="consc">r</span>';
  legenda += '<span id="vogalc">e</span>';
  legenda += '<span id="consc">j</span>';
  legenda += '<span id="vogalc">a</span>';

  $listItemL.on('click', function() {
    z.setAttribute("src", "sounds/IGREJA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#ilha');
  var legendam = '<span id="vogalc"> i</span>';
  legendam += '<span id="consc">l</span>';
  legendam += '<span id="consc">h</span>';
  legendam += '<span id="vogalc">a</span>';

  $listItemM.on('click', function() {
    z.setAttribute("src", "sounds/ILHA.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#indio');
  var legendar = '<span id="vogalc">í</span>';
  legendar += '<span id="consc">n</span>';
  legendar += '<span id="consc">d</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="vogalc">o</span>';

  $listItemR.on('click', function() {
    z.setAttribute("src", "sounds/ÍNDIO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });


});
