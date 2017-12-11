$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#G").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/G.mp3");
    l.play();
  });

  $("#ge").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/GE.mp3");
    l.play();
  });  

  $("#ge1").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/GE.mp3");
    le.play();
  }); 

  $("#ge2").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/GE.mp3");
    l.play();
  }); 

  $("#gi").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/GI.mp3");
    l.play();
  }); 

  $("#gi1").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/GI.mp3");
    l.play();
  }); 

  $("#gi2").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/GI.mp3");
    l.play();
  }); 


  var $listItemL = $('#geladeira');
  var legenda = '<span id="consc"> g</span>';
  legenda += '<span id="vogalc">e</span>';
  legenda += '<span id="consc">l</span>';  
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">d</span>';
  legenda += '<span id="vogalc">e</span>';
  legenda += '<span id="vogalc">i</span>';
  legenda += '<span id="consc">r</span>';
  legenda += '<span id="vogalc">a</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/GELADEIRA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#gema');
  var legendam = '<span id="consc">g</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="consc">m</span>';
  legendam += '<span id="vogalc">a</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/GEMA.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#gelo');
  var legendar = '<span id="consc">g</span>';
  legendar += '<span id="vogalc">e</span>';  
  legendar += '<span id="consc">l</span>';
  legendar += '<span id="vogalc">o</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/GELO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#girafa');
  var legendald = '<span id="consc">g</span>';
  legendald += '<span id="vogalc">i</span>';
  legendald += '<span id="consc">r</span>';
  legendald += '<span id="vogalc">a</span>';
  legendald += '<span id="consc">f</span>';
  legendald += '<span id="vogalc">a</span>';   

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/GIRAFA.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#girassol');
  var legendamd = '<span id="consc">g</span>';
  legendamd += '<span id="vogalc">i</span>';
  legendamd += '<span id="consc">r</span>';
  legendamd += '<span id="vogalc">a</span>';
  legendamd += '<span id="consc">s</span>';   
  legendamd += '<span id="consc">s</span>';
  legendamd += '<span id="vogalc">o</span>';
  legendamd += '<span id="consc">l</span>'; 

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/GIRASSOL.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemRdown = $('#giz');
  var legendard = '<span id="consc">g</span>';
  legendard += '<span id="vogalc">i</span>';
  legendard += '<span id="consc">z</span>';

  $listItemRdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/GIZ.mp3");
    z.play();
    $listItemRdown.children('p').remove();
    $(this).append(' <p>' + legendard + '</p>');
  });

  $listItemRdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
