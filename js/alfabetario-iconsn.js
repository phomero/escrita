$(document).ready(function(){

  var z = document.createElement("AUDIO");

$("#n").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/N.mp3");
    l.play();
  });

  $("#na").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/NA.mp3");
    l.play();
  });  

  $("#ne").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/NE.mp3");
    le.play();
  }); 

  $("#ni").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/NI.mp3");
    l.play();
  }); 

  $("#no").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/NO.mp3");
    l.play();
  }); 

  $("#nu").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/NU.mp3");
    l.play();
  }); 


  var $listItemL = $('#navio');
  var legenda = '<span id="consc"> n</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">v</span>';
  legenda += '<span id="vogalc">i</span>';
  legenda += '<span id="vogalc">o</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/NAVIO.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#neve');
  var legendam = '<span id="consc"> n</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="consc">v</span>';
  legendam += '<span id="vogalc">e</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/NEVE.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#ninho');
  var legendar = '<span id="consc">n</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="consc">n</span>';
  legendar += '<span id="consc">h</span>';
  legendar += '<span id="vogalc">o</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/NINHO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#nó');
  var legendald = '<span id="consc">n</span>';
  legendald += '<span id="vogalc">ó</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/NÓ.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#nuvem');
  var legendamd = '<span id="consc">n</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">v</span>';
  legendamd += '<span id="vogalc">e</span>';
  legendamd += '<span id="consc">m</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/NUVEM.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
