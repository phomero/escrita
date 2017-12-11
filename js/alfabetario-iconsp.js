$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#p").click(function () {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/P.mp3");
    l.play();
  });

  $("#pa").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/PA.mp3");
    l.play();
  });  

  $("#pe").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/PE.mp3");
    le.play();
  }); 

  $("#pi").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/PI.mp3");
    l.play();
  }); 

  $("#po").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/PO.mp3");
    l.play();
  }); 

  $("#pu").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/PU.mp3");
    l.play();
  }); 

  $("#pão").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/PÃO.mp3");
    l.play();
  }); 


  var $listItemL = $('#pato');
  var legenda = '<span id="consc"> p</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">t</span>';
  legenda += '<span id="vogalc">o</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/PATO.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#pera');
  var legendam = '<span id="consc">p</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="consc">r</span>';
  legendam += '<span id="vogalc">a</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/PERA.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#pinto');
  var legendar = '<span id="consc">p</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="consc">n</span>';
  legendar += '<span id="consc">t</span>';
  legendar += '<span id="vogalc">o</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/PINTO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#pote');
  var legendald = '<span id="consc">p</span>';
  legendald += '<span id="vogalc">o</span>';
  legendald += '<span id="consc">t</span>';
  legendald += '<span id="vogalc">e</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/POTE.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#pudim');
  var legendamd = '<span id="consc">p</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">d</span>';
  legendamd += '<span id="vogalc">i</span>';
  legendamd += '<span id="consc">m</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/PUDIM.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemRdown = $('#pao');
  var legendard = '<span id="consc">p</span>';
  legendard += '<span id="vogalc">ã</span>';
  legendard += '<span id="vogalc">o</span>';

  $listItemRdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/PÃO.mp3");
    z.play();
    $listItemRdown.children('p').remove();
    $(this).append(' <p>' + legendard + '</p>');
  });

  $listItemRdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
