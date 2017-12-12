$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#lh").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/LH.mp3");
    l.play();
  });

  $("#lha").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/LHA.mp3");
    l.play();
  });  

  $("#lhe").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/LHE.mp3");
    le.play();
  }); 

  $("#in").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/IN.mp3");
    l.play();
  }); 

  $("#lho").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/LHO.mp3");
    l.play();
  }); 

  $("#un").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/UN.mp3");
    l.play();
  }); 

  var $listItemL = $('#folha');
  var legenda = '<span id="consc">f</span>';
    legenda += '<span id="vogalc">o</span>';
    legenda += '<span id="consc">l</span>';
    legenda += '<span id="consc">h</span>';
    legenda += '<span id="vogalc">a</span>';
  
  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/FOLHA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#colher');
  var legendam = '<span id="consc">c</span>';
    legendam += '<span id="vogalc">o</span>';
    legendam += '<span id="consc">l</span>';
    legendam += '<span id="consc">h</span>'; 
    legendam += '<span id="vogalc">e</span>';
    legendam += '<span id="consc">r</span>'; 
  
  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/COLHER.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#abelha');
  var legendar = '<span id="vogalc">a</span>';
    legendar += '<span id="consc">b</span>';
    legendar += '<span id="vogalc">e</span>';
    legendar += '<span id="consc">l</span>';
    legendar += '<span id="consc">h</span>';
    legendar += '<span id="vogalc">a</span>';
  
  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ABELHA.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  
  var $listItemMdown = $('#coelho');
  var legendamd = '<span id="consc">c</span>'; 
    legendamd += '<span id="vogalc">o</span>';
    legendamd += '<span id="vogalc">e</span>';
    legendamd += '<span id="consc">l</span>';
    legendamd += '<span id="consc">h</span>';
    legendamd += '<span id="vogalc">o</span>';
  
  
  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/COELHO.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemRdown = $('#milho');
  var legendard = '<span id="consc">m</span>';
    legendard += '<span id="vogalc">i</span>';
    legendard += '<span id="consc">l</span>';
    legendard += '<span id="consc">h</span>';
    legendard += '<span id="vogalc">o</span>';
  
  $listItemRdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/MILHO.mp3");
    z.play();
    $listItemRdown.children('p').remove();
    $(this).append(' <p>' + legendard + '</p>');
  });

  $listItemRdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
