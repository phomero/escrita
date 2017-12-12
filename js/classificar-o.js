$(document).ready(function(){

  $("button").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/O.mp3");
    l.play();
  });
//$(function() {
  var certo = '<span id="certo" class="glyphicon glyphicon-thumbs-up"></span>'
  var errado = '<span id="errado" class="glyphicon glyphicon-remove"></span>'
  var x = document.createElement("AUDIO");
  var y = document.createElement("AUDIO");

  var $listItemL = $('#urubu');
  var legenda = '<span id="vogalc">u</span>';
  legenda += '<span id="consc">r</span>';
  legenda += '<span id="vogalc">u</span>';
  legenda += '<span id="consc">b</span>';
  legenda += '<span id="vogalc">u</span>';

  $listItemL.on('click', function() {
    if (x.canPlayType("audio/wav")) {
      x.setAttribute("src", "sounds/331912__kevinvg207__wrong-buzzer.wav");
      x.play();
    } else {
      x.setAttribute("src", "sounds/269577__sparxtraxx__soldier-no.mp3");
      x.play();
    };    

    $('.questionGlyph').remove()
    $(this).children('p').remove();
    $(this).children('span').remove();
    $(this).append(' <span> ' + errado + '</span> <p>' + legenda + '</p>');
  });

  var $listItemM = $('#ovo');
  var legendam = '<span id="vogalc">o</span>';
  legendam += '<span id="consc">v</span>';
  legendam += '<span id="vogalc">o</span>';

  $listItemM.on('click', function() {
    if (y.canPlayType("audio/mpeg")) {
      y.setAttribute("src", "sounds/354038__nc3studios08__applause-3.mp3");
      y.play();
    } else {
      y.setAttribute("src", "sounds/277022__sandermotions__applause-1.wav");
      y.play();
    };
    
    $('.questionGlyph').remove()
    $(this).children('p').remove();
    $(this).children('span').remove();
    $(this).append('<span> ' + certo + '</span> <p>' + legendam + '</p>');
  });


  var $listItemR = $('#urso');
  var legendar = '<span id="vogalc">u</span>';
  legendar += '<span id="consc">r</span>';
  legendar += '<span id="consc">s</span>';
  legendar += '<span id="vogalc">o</span>';

  $listItemR.on('click', function() {
    if (x.canPlayType("audio/wav")) {
      x.setAttribute("src", "sounds/331912__kevinvg207__wrong-buzzer.wav");
      x.play();
    } else {
      x.setAttribute("src", "sounds/269577__sparxtraxx__soldier-no.mp3");
      x.play();
    };    

    $('.questionGlyph').remove()
    $(this).children('p').remove();
    $(this).children('span').remove();
    $(this).append(' <span> ' + errado + '</span> <p>' + legendar + '</p>');
  });

});
