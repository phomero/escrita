$(document).ready(function(){

  var z = document.createElement("AUDIO");

$("#j").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/J.mp3");
    l.play();
  });

  $("#ja").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/JA.mp3");
    l.play();
  });  

  $("#je").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/JE.mp3");
    le.play();
  }); 

  $("#ji").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/JI.mp3");
    l.play();
  }); 

  $("#jo").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/JO.mp3");
    l.play();
  }); 

  $("#ju").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/JU.mp3");
    l.play();
  }); 


  var $listItemL = $('#jaca');
  var legenda = '<span id="consc"> j</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">c</span>';
  legenda += '<span id="vogalc">a</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/JACA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#jegue');
  var legendam = '<span id="consc"> j</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="consc">g</span>';
  legendam += '<span id="vogalc">u</span>';
  legendam += '<span id="vogalc">e</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/JEGUE.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#jilo');
  var legendar = '<span id="consc">j</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="consc">l</span>';
  legendar += '<span id="vogalc">ó</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/JILO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#jornal');
  var legendald = '<span id="consc">j</span>';
  legendald += '<span id="vogalc">o</span>';
  legendald += '<span id="consc">r</span>';
  legendald += '<span id="consc">n</span>';
  legendald += '<span id="vogalc">a</span>';
  legendald += '<span id="consc">l</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/JORNAL.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#judo');
  var legendamd = '<span id="consc">j</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">d</span>';
  legendamd += '<span id="vogalc">ô</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/JUDO.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
