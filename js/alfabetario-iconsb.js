$(document).ready(function(){

  var z = document.createElement("AUDIO");

$("#b").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/B.mp3");
    l.play();
  });

  $("#ba").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/BA.mp3");
    l.play();
  });  

  $("#be").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/BE.mp3");
    le.play();
  }); 

  $("#bi").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/BI.mp3");
    l.play();
  }); 

  $("#bo").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/BO.mp3");
    l.play();
  }); 

  $("#bu").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/BU.mp3");
    l.play();
  }); 


  var $listItemL = $('#bala');
  var legenda = '<span id="consc"> b</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">l</span>';
  legenda += '<span id="vogalc">a</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/BALA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#bebe');
  var legendam = '<span id="consc">b</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="consc">b</span>';
  legendam += '<span id="vogalc">ê</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/BEBÊ.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#bicicleta');
  var legendar = '<span id="consc">b</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="consc">c</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="consc">c</span>';
  legendar += '<span id="consc">l</span>';
  legendar += '<span id="vogalc">e</span>';
  legendar += '<span id="consc">t</span>';
  legendar += '<span id="vogalc">a</span>';


  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/BICICLETA.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#bola');
  var legendald = '<span id="consc">b</span>';
  legendald += '<span id="vogalc">o</span>';
  legendald += '<span id="consc">l</span>';
  legendald += '<span id="vogalc">a</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/BOLA.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#bule');
  var legendamd = '<span id="consc">b</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">l</span>';
  legendamd += '<span id="vogalc">e</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/BULE.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
