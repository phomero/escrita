$(document).ready(function(){

  var z = document.createElement("AUDIO");

$("#r").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/R.mp3");
    l.play();
  });

  $("#ra").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/RA.mp3");
    l.play();
  });  

  $("#re").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/RE.mp3");
    le.play();
  }); 

  $("#ri").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/RI.mp3");
    l.play();
  }); 

  $("#ro").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/RO.mp3");
    l.play();
  }); 

  $("#ru").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/RU.mp3");
    l.play();
  }); 


  var $listItemL = $('#rato');
  var legenda = '<span id="consc"> r</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">t</span>';
  legenda += '<span id="vogalc">o</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/RATO.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#rei');
  var legendam = '<span id="consc">r</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="vogalc">i</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/REI.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#rio');
  var legendar = '<span id="consc">r</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="vogalc">o</span>';


  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/RIO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#roda');
  var legendald = '<span id="consc">r</span>';
  legendald += '<span id="vogalc">o</span>';
  legendald += '<span id="consc">d</span>';
  legendald += '<span id="vogalc">a</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/RODA.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#rua');
  var legendamd = '<span id="consc">r</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="vogalc">a</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/RUA.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
