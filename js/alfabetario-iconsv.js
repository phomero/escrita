$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#v").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/V.mp3");
    l.play();
  });

  $("#va").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/VA.mp3");
    l.play();
  });  

  $("#ve").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/VE.mp3");
    le.play();
  }); 

  $("#vi").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/VI.mp3");
    l.play();
  }); 

  $("#vo").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/VO.mp3");
    l.play();
  }); 

  $("#vu").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/VU.mp3");
    l.play();
  }); 

  $("#vó").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/VO.mp3");
    l.play();
  }); 


  var $listItemL = $('#vaca');
  var legenda = '<span id="consc"> v</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">c</span>';
  legenda += '<span id="vogalc">a</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/VACA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#vela');
  var legendam = '<span id="consc">v</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="consc">l</span>';
  legendam += '<span id="vogalc">a</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/VELA.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#viola');
  var legendar = '<span id="consc">v</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="vogalc">o</span>';
  legendar += '<span id="consc">l</span>';
  legendar += '<span id="vogalc">a</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/VIOLA.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#vovô');
  var legendald = '<span id="consc">v</span>';
  legendald += '<span id="vogalc">o</span>';
  legendald += '<span id="consc">v</span>';
  legendald += '<span id="vogalc">ô</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/VOVÔ.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#vovó');
  var legendamd = '<span id="consc">v</span>';
  legendamd += '<span id="vogalc">o</span>';
  legendamd += '<span id="consc">v</span>';
  legendamd += '<span id="vogalc">ó</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/VOVÓ.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemRdown = $('#vulcao');
  var legendard = '<span id="consc">v</span>';
  legendard += '<span id="vogalc">u</span>';
  legendard += '<span id="consc">l</span>';
  legendard += '<span id="consc">c</span>';
  legendard += '<span id="vogalc">ã</span>';
  legendard += '<span id="vogalc">o</span>';

  $listItemRdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/VULCÃO.mp3");
    z.play();
    $listItemRdown.children('p').remove();
    $(this).append(' <p>' + legendard + '</p>');
  });

  $listItemRdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
