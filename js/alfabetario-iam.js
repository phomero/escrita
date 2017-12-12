$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#iamum").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/AMUM.mp3");
    l.play();
  });

  $("#am").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/AM.mp3");
    l.play();
  });  

  $("#em").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/EM.mp3");
    le.play();
  }); 

  $("#im").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/IM.mp3");
    l.play();
  }); 

  $("#om").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/OM.mp3");
    l.play();
  }); 

  $("#um").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/UM.mp3");
    l.play();
  }); 



  var $listItemL = $('#lâmpada');
  var legenda = '<span id="consc">l</span>';
    legenda += '<span id="vogalc">â</span>';
    legenda += '<span id="consc">m</span>';
    legenda += '<span id="consc">p</span>';
    legenda += '<span id="vogalc">a</span>';
    legenda += '<span id="consc">d</span>';
    legenda += '<span id="vogalc">a</span>';
  
  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/LÂMPADA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#cachimbo');
  var legendam = '<span id="consc">c</span>';
    legendam += '<span id="vogalc">a</span>';
    legendam += '<span id="consc">c</span>';
    legendam += '<span id="consc">h</span>'; 
    legendam += '<span id="vogalc">i</span>';
    legendam += '<span id="consc">m</span>';
    legendam += '<span id="consc">b</span>'; 
    legendam += '<span id="vogalc">o</span>';
  
  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/CACHIMBO.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#embrião');
  var legendar = '<span id="vogalc">e</span>';
    legendar += '<span id="consc">m</span>';
    legendar += '<span id="consc">b</span>';
    legendar += '<span id="consc">r</span>';
    legendar += '<span id="vogalc">i</span>';
    legendar += '<span id="vogalc">ã</span>';
    legendar += '<span id="vogalc">o</span>';
  
  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/EMBRIÃO.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#ONÇA');
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

  var $listItemMdown = $('#pomba');
  var legendamd = '<span id="consc">p</span>';
    legendamd += '<span id="vogalc">o</span>';
    legendamd += '<span id="consc">m</span>';
    legendamd += '<span id="consc">b</span>';
    legendamd += '<span id="vogalc">a</span>';
  
  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/POMBA.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemRdown = $('#bumbo');
  var legendard = '<span id="consc">b</span>';
    legendard += '<span id="vogalc">u</span>';
    legendard += '<span id="consc">m</span>';
    legendard += '<span id="consc">b</span>';
    legendard += '<span id="vogalc">o</span>';

  $listItemRdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/BUMBO.mp3");
    z.play();
    $listItemRdown.children('p').remove();
    $(this).append(' <p>' + legendard + '</p>');
  });

  $listItemRdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
