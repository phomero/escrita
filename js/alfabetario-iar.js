$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#iar").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/IAR.mp3");
    l.play();
  });

  $("#ar").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/AR.mp3");
    l.play();
  });  

  $("#er").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/ER.mp3");
    le.play();
  }); 

  $("#ir").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/IR.mp3");
    l.play();
  }); 

  $("#or").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/OR.mp3");
    l.play();
  }); 

  $("#ur").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/UR.mp3");
    l.play();
  }); 


  var $listItemL = $('#arvore');
  var legenda = '<span id="vogalc"> á</span>';
  legenda += '<span id="consc">r</span>';
  legenda += '<span id="consc">v</span>';
  legenda += '<span id="vogalc">o</span>';
  legenda += '<span id="consc">r</span>';
  legenda += '<span id="vogalc">e</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ARVORE.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#erva-doce');
  var legendam = '<span id="vogalc">e</span>';
  legendam += '<span id="consc">r</span>';
  legendam += '<span id="consc">v</span>';
  legendam += '<span id="vogalc">a-</span>';
  legendam += '<span id="consc">d</span>';
  legendam += '<span id="vogalc">o</span>';
  legendam += '<span id="consc">c</span>';
  legendam += '<span id="vogalc">e</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ERVA-DOCE.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#irmãs');
  var legendar = '<span id="vogalc">i</span>';
  legendar += '<span id="consc">r</span>';  
  legendar += '<span id="consc">m</span>';
  legendar += '<span id="vogalc">ã</span>';
  legendar += '<span id="consc">s</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/IRMÃS.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#orca');
  var legendald = '<span id="vogalc">o</span>';
  legendald += '<span id="consc">r</span>';
  legendald += '<span id="consc">c</span>';
  legendald += '<span id="vogalc">a</span>';   

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ORCA.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#urso');
  var legendamd = '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">r</span>';
  legendamd += '<span id="consc">s</span>';   
  legendamd += '<span id="vogalc">o</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/URSO.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });


});
