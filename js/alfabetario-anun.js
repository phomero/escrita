$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#anun").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/ANUN.mp3");
    l.play();
  });

  $("#an").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/AN.mp3");
    l.play();
  });  

  $("#en").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/EN.mp3");
    le.play();
  }); 

  $("#in").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/IN.mp3");
    l.play();
  }); 

  $("#on").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/ON.mp3");
    l.play();
  }); 

  $("#un").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/UN.mp3");
    l.play();
  }); 



  var $listItemL = $('#bandeira');
  var legenda = '<span id="consc">b</span>';
    legenda += '<span id="vogalc">a</span>';
    legenda += '<span id="consc">n</span>';
    legenda += '<span id="consc">d</span>';
    legenda += '<span id="vogalc">e</span>';
    legenda += '<span id="vogalc">i</span>';
    legenda += '<span id="consc">r</span>';
    legenda += '<span id="vogalc">a</span>';
  
  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/BANDEIRA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#tenda');
  var legendam = '<span id="consc">t</span>';
    legendam += '<span id="vogalc">e</span>';
    legendam += '<span id="consc">n</span>';
    legendam += '<span id="consc">d</span>'; 
    legendam += '<span id="vogalc">a</span>';
  
  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/TENDA.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#índio');
  var legendar = '<span id="vogalc">í</span>';
    legendar += '<span id="consc">n</span>';
    legendar += '<span id="consc">d</span>';
    legendar += '<span id="vogalc">i</span>';
    legendar += '<span id="vogalc">o</span>';
  
  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ÍNDIO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#onça');
  var legendald = '<span id="vogalc">o</span>';
    legendald += '<span id="consc">n</span>';
    legendald += '<span id="consc">ç</span>';
    legendald += '<span id="vogalc">a</span>';  

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ONÇA.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#ônibus');
  var legendamd = '<span id="vogalc">ô</span>'; 
  legendamd += '<span id="consc">n</span>';
  legendamd += '<span id="vogalc">i</span>';
  legendamd += '<span id="consc">b</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">s</span>';
  
  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ONIBUS.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemRdown = $('#mundo');
  var legendard = '<span id="consc">m</span>';
    legendard += '<span id="vogalc">u</span>';
    legendard += '<span id="consc">n</span>';
    legendard += '<span id="consc">d</span>';
    legendard += '<span id="vogalc">o</span>';

  $listItemRdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/MUNDO.mp3");
    z.play();
    $listItemRdown.children('p').remove();
    $(this).append(' <p>' + legendard + '</p>');
  });

  $listItemRdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
