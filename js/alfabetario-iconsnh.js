$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#nh").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/NH.mp3");
    l.play();
  });

  $("#nha").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/NHA.mp3");
    l.play();
  });  

  $("#nhe").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/NHE.mp3");
    le.play();
  }); 

  $("#in").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/IN.mp3");
    l.play();
  }); 

  $("#nho").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/NHO.mp3");
    l.play();
  }); 

  $("#un").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/UN.mp3");
    l.play();
  }); 



  var $listItemL = $('#dinheiro');
  var legenda = '<span id="consc">d</span>';
    legenda += '<span id="vogalc">i</span>';
    legenda += '<span id="consc">n</span>';
    legenda += '<span id="consc">h</span>';
    legenda += '<span id="vogalc">e</span>';
    legenda += '<span id="vogalc">i</span>';
    legenda += '<span id="consc">r</span>';
    legenda += '<span id="vogalc">o</span>';
  
  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/DINHEIRO.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#moinho');
  var legendam = '<span id="consc">m</span>';
    legendam += '<span id="vogalc">o</span>';
    legendam += '<span id="vogalc">i</span>';
    legendam += '<span id="consc">n</span>';
    legendam += '<span id="consc">h</span>'; 
    legendam += '<span id="vogalc">o</span>';
  
  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/MOINHO.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#aranha');
  var legendar = '<span id="vogalc">a</span>';
    legendar += '<span id="consc">r</span>';
    legendar += '<span id="vogalc">a</span>';
    legendar += '<span id="consc">n</span>';
    legendar += '<span id="consc">h</span>';
    legendar += '<span id="vogalc">a</span>';
  
  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ARANHA.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  
  var $listItemMdown = $('#galinha');
  var legendamd = '<span id="consc">g</span>'; 
    legendamd += '<span id="vogalc">a</span>';
    legendamd += '<span id="consc">l</span>';
    legendamd += '<span id="vogalc">i</span>';
    legendamd += '<span id="consc">n</span>';
    legendamd += '<span id="consc">h</span>';
    legendamd += '<span id="vogalc">a</span>';
  
  
  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/GALINHA.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemRdown = $('#pinheiro');
  var legendard = '<span id="consc">p</span>';
    legendard += '<span id="vogalc">i</span>';
    legendard += '<span id="consc">n</span>';
    legendard += '<span id="consc">h</span>';
    legendard += '<span id="vogalc">e</span>';
    legendard += '<span id="vogalc">i</span>';
    legendard += '<span id="consc">r</span>';
    legendard += '<span id="vogalc">o</span>';
  
  $listItemRdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/PINHEIRO.mp3");
    z.play();
    $listItemRdown.children('p').remove();
    $(this).append(' <p>' + legendard + '</p>');
  });

  $listItemRdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
