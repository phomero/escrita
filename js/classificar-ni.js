$(document).ready(function(){


  $("button").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/NI.mp3");
    l.play();
  });

  var certo = '<span id="certo" class="glyphicon glyphicon-thumbs-up"></span>'
  var errado = '<span id="errado" class="glyphicon glyphicon-remove"></span>'
  var x = document.createElement("AUDIO");
  var y = document.createElement("AUDIO");

  var $listItemL = $('#navio');
  var legenda = '<span id="consc">n</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">v</span>';
  legenda += '<span id="vogalc">i</span>';
  legenda += '<span id="vogalc">o</span>';

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

  var $listItemM = $('#nuvem');
  var legendam = '<span id="consc">n</span>';
  legendam += '<span id="vogalc">u</span>';
  legendam += '<span id="consc">v</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="consc">m</span>';  

  $listItemM.on('click', function() {
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
    $(this).append('<span> ' + errado + '</span> <p>' + legendam + '</p>');
  });

  var $listItemR = $('#ninho');
  var legendar = '<span id="consc">n</span>';
    legendar += '<span id="vogalc">i</span>';
    legendar += '<span id="consc">n</span>';
    legendar += '<span id="consc">h</span>';    
    legendar += '<span id="vogalc">o</span>';

  $listItemR.on('click', function() {
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
    $(this).append(' <span> ' + certo + '</span> <p>' + legendar + '</p>');
  });

});