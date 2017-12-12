$(document).ready(function(){

  var z = document.createElement("AUDIO");

$("#t").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/T.mp3");
    l.play();
  });

  $("#ta").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/TA.mp3");
    l.play();
  });  

  $("#te").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/TE.mp3");
    le.play();
  }); 

  $("#ti").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/TI.mp3");
    l.play();
  }); 

  $("#to").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/TO.mp3");
    l.play();
  }); 

  $("#tu").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/TU.mp3");
    l.play();
  }); 


  var $listItemL = $('#tatu');
  var legenda = '<span id="consc"> t</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">t</span>';
  legenda += '<span id="vogalc">u</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/TATU.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#teto');
  var legendam = '<span id="consc">t</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="consc">t</span>';
  legendam += '<span id="vogalc">o</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/TETO.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#tilapia');
  var legendar = '<span id="consc">t</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="consc">l</span>';
  legendar += '<span id="vogalc">á</span>';
  legendar += '<span id="consc">p</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="vogalc">a</span>';


  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/TILAPIA.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#tomate');
  var legendald = '<span id="consc">t</span>';
  legendald += '<span id="vogalc">o</span>';
  legendald += '<span id="consc">m</span>';
  legendald += '<span id="vogalc">a</span>';
  legendald += '<span id="consc">t</span>';
  legendald += '<span id="vogalc">e</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/TOMATE.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#tulipa');
  var legendamd = '<span id="consc">t</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">l</span>';
  legendamd += '<span id="vogalc">i</span>';
  legendamd += '<span id="consc">p</span>';
  legendamd += '<span id="vogalc">a</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/TULIPA.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
