$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#l").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/L.mp3");
    l.play();
  });

  $("#la").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/LA.mp3");
    l.play();
  });  

  $("#le").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/LE.mp3");
    le.play();
  }); 

  $("#li").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/LI.mp3");
    l.play();
  }); 

  $("#lo").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/LO.mp3");
    l.play();
  }); 

  $("#lu").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/LU.mp3");
    l.play();
  }); 


  var $listItemL = $('#lago');
  var $som = $('#som')
  var legenda = '<span id="consc"> l</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">g</span>';
  legenda += '<span id="vogalc">o</span>';

  $listItemL.on('mouseover click', function() {
    $som.remove()
    z.setAttribute("src", "sounds/LAGO.mp3");
    z.play();
    $listItemL.children('p').remove();

    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#leao');
  var legendam = '<span id="consc">l</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="vogalc">ã</span>';
  legendam += '<span id="vogalc">o</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/LEÃO.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#livro');
  var legendar = '<span id="consc">l</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar +=  '<span id="consc">v</span>';
  legendar +=  '<span id="consc">r</span>';
  legendar += '<span id="vogalc">o</span>';


  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/LIVRO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#lobo');
  var legendald = '<span id="consc">l</span>';
  legendald += '<span id="vogalc">o</span>';
  legendald += '<span id="consc">b</span>';
  legendald += '<span id="vogalc">o</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/LOBO.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#lua');
  var legendamd = '<span id="consc">l</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="vogalc">a</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/LUA.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
