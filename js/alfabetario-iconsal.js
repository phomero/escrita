$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#ial").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/IAL.mp3");
    l.play();
  });

  $("#al").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/AL.mp3");
    l.play();
  });  

  $("#el").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/EL.mp3");
    le.play();
  }); 

  $("#il").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/IL.mp3");
    l.play();
  }); 

  $("#ol").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/OL.mp3");
    l.play();
  }); 

  $("#ul").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/UL.mp3");
    l.play();
  }); 


  var $listItemL = $('#alface');
  var legenda = '<span id="vogalc"> a</span>';
  legenda += '<span id="consc">l</span>';
  legenda += '<span id="consc">f</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">c</span>';
  legenda += '<span id="vogalc">e</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ALFACE.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#elmo');
  var legendam = '<span id="vogalc">e</span>';
  legendam += '<span id="consc">l</span>';
  legendam += '<span id="consc">m</span>';
  legendam += '<span id="vogalc">o</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ELMO.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#filme');
  var legendar = '<span id="consc">f</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="consc">l</span>';  
  legendar += '<span id="consc">m</span>';
  legendar += '<span id="vogalc">e</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/FILME.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#bolsa');
  var legendald = '<span id="consc">b</span>';
    legendald += '<span id="vogalc">o</span>';  
    legendald += '<span id="consc">l</span>';
    legendald += '<span id="consc">s</span>';
    legendald += '<span id="vogalc">a</span>';   

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/BOLSA.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#pulseira');
  var legendamd = '<span id="consc">p</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">l</span>';
  legendamd += '<span id="consc">s</span>';   
  legendamd += '<span id="vogalc">e</span>';
  legendamd += '<span id="vogalc">i</span>';
  legendamd += '<span id="consc">r</span>';   
  legendamd += '<span id="vogalc">a</span>';
  
  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/PULSEIRA.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });


});
