$(document).ready(function(){


  $("button").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/FO.mp3");
    l.play();
  });

  var certo = '<span id="certo" class="glyphicon glyphicon-thumbs-up"></span>'
  var errado = '<span id="errado" class="glyphicon glyphicon-remove"></span>'
  var x = document.createElement("AUDIO");
  var y = document.createElement("AUDIO");

  var $listItemL = $('#feijao');
  var legenda = '<span id="consc">f</span>';
  legenda += '<span id="vogalc">e</span>';
  legenda += '<span id="vogalc">i</span>';  
  legenda += '<span id="consc">j</span>';
  legenda += '<span id="vogalc">ã</span>';
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

  var $listItemM = $('#funil');
  var legendam = '<span id="consc">f</span>';
  legendam += '<span id="vogalc">u</span>';
  legendam += '<span id="consc">n</span>';
  legendam += '<span id="vogalc">i</span>';
  legendam += '<span id="consc">l</span>';

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

  var $listItemR = $('#foca');
  var legendar = '<span id="consc">f</span>';
    legendar += '<span id="vogalc">o</span>';
    legendar += '<span id="consc">c</span>';
    legendar += '<span id="vogalc">a</span>';

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