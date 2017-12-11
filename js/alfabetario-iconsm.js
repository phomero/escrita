$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#m").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/M.mp3");
    l.play();
  });

  $("#ma").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/MA.mp3");
    l.play();
  });  

  $("#me").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/ME.mp3");
    le.play();
  }); 

  $("#mi").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/MI.mp3");
    l.play();
  }); 

  $("#mo").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/MO.mp3");
    l.play();
  }); 

  $("#mu").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/MU.mp3");
    l.play();
  }); 

  $("#mão").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/MÃO.mp3");
    l.play();
  }); 


  var $listItemL = $('#mala');
  var legenda = '<span id="consc"> m</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">l</span>';
  legenda += '<span id="vogalc">a</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/MALA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#menina');
  var legendam = '<span id="consc">m</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="consc">n</span>';
  legendam += '<span id="vogalc">i</span>';
  legendam += '<span id="consc">n</span>';
  legendam += '<span id="vogalc">a</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/MENINA.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#milho');
  var legendar = '<span id="consc">m</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="consc">l</span>';
  legendar += '<span id="consc">h</span>';
  legendar += '<span id="vogalc">o</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/MILHO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#mola');
  var legendald = '<span id="consc">m</span>';
  legendald += '<span id="vogalc">o</span>';
  legendald += '<span id="consc">l</span>';
  legendald += '<span id="vogalc">a</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/MOLA.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#muro');
  var legendamd = '<span id="consc">m</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">r</span>';
  legendamd += '<span id="vogalc">o</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/MURO.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemRdown = $('#mao');
  var legendard = '<span id="consc">m</span>';
  legendard += '<span id="vogalc">ã</span>';
  legendard += '<span id="vogalc">o</span>';

  $listItemRdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/MÃO.mp3");
    z.play();
    $listItemRdown.children('p').remove();
    $(this).append(' <p>' + legendard + '</p>');
  });

  $listItemRdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
