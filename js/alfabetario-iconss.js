$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("button").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/S.mp3");
    l.play();
  });

  var $listItemL = $('#sapo');
  var legenda = '<span id="consc"> s</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">p</span>';
  legenda += '<span id="vogalc">o</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/SAPO.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#seta');
  var legendam = '<span id="consc">s</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="consc">t</span>';
  legendam += '<span id="vogalc">a</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/SETA.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#sino');
  var legendar = '<span id="consc">s</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="consc">n</span>';
  legendar += '<span id="vogalc">o</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/SINO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#sol');
  var legendald = '<span id="consc">s</span>';
  legendald += '<span id="vogalc">o</span>';
  legendald += '<span id="consc">l</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/SOL.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#suco');
  var legendamd = '<span id="consc">s</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">c</span>';
  legendamd += '<span id="vogalc">o</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/SUCO.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
