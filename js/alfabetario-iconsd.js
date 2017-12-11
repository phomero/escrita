$(document).ready(function(){

  var z = document.createElement("AUDIO");

$("#d").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/D.mp3");
    l.play();
  });

  $("#da").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/DA.mp3");
    l.play();
  });  

  $("#de").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/DE.mp3");
    le.play();
  }); 

  $("#di").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/DI.mp3");
    l.play();
  }); 

  $("#do").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/DO.mp3");
    l.play();
  }); 

  $("#du").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/DU.mp3");
    l.play();
  }); 


  var $listItemL = $('#dado');
  var legenda = '<span id="consc"> d</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">d</span>';
  legenda += '<span id="vogalc">o</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/DADO.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#dedo');
  var legendam = '<span id="consc">d</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="consc">d</span>';
  legendam += '<span id="vogalc">o</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/DEDO.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#dia');
  var legendar = '<span id="consc">d</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="vogalc">a</span>';


  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/DIA.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#domino');
  var legendald = '<span id="consc">d</span>';
  legendald += '<span id="vogalc">o</span>';
  legendald += '<span id="consc">m</span>';
  legendald += '<span id="vogalc">i</span>';
  legendald += '<span id="consc">n</span>';
  legendald += '<span id="vogalc">ó</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/DOMINÓ.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#ducha');
  var legendamd = '<span id="consc">d</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">c</span>';
  legendamd += '<span id="consc">h</span>';
  legendamd += '<span id="vogalc">a</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/DUCHA.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
