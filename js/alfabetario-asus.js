$(document).ready(function(){

  var z = document.createElement("AUDIO");

  $("#asus").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/ASUS.mp3");
    l.play();
  });

  $("#as").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/AS.mp3");
    l.play();
  });  

  $("#es").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/ES.mp3");
    le.play();
  }); 

  $("#is").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/IS.mp3");
    l.play();
  }); 

  $("#os").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/OS.mp3");
    l.play();
  }); 

  $("#us").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/US.mp3");
    l.play();
  }); 



  var $listItemL = $('#castelo');
  var legenda = '<span id="consc">c</span>';
    legenda += '<span id="vogalc">a</span>';
    legenda += '<span id="consc">s</span>';
    legenda += '<span id="consc">t</span>';
    legenda += '<span id="vogalc">e</span>';
    legenda += '<span id="consc">l</span>';
    legenda += '<span id="vogalc">o</span>';
  
  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/CASTELO.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#dois');
  var legendam = '<span id="consc">d</span>';
    legendam += '<span id="vogalc">o</span>';
    legendam += '<span id="vogalc">i</span>';
    legendam += '<span id="consc">s</span>';
  
  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/DOIS.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#estrela');
  var legendar = '<span id="vogalc">e</span>';
    legendar += '<span id="consc">s</span>';
    legendar += '<span id="consc">t</span>';
    legendar += '<span id="consc">r</span>';
    legendar += '<span id="vogalc">e</span>';
    legendar += '<span id="consc">l</span>';
    legendar += '<span id="vogalc">a</span>';
  
  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/ESTRELA.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#poste');
  var legendald = '<span id="consc">p</span>';
    legendald += '<span id="vogalc">o</span>';
    legendald += '<span id="consc">s</span>';
    legendald += '<span id="consc">t</span>';
    legendald += '<span id="vogalc">e</span>';  

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/POSTE.mp3");
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

  var $listItemRdown = $('#tesoura');
  var legendard = '<span id="consc">t</span>';
    legendard += '<span id="vogalc">e</span>';
    legendard += '<span id="consc">s</span>';
    legendard += '<span id="vogalc">o</span>';
    legendard += '<span id="vogalc">u</span>';
    legendard += '<span id="consc">r</span>';
    legendard += '<span id="vogalc">a</span>';

  $listItemRdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/TESOURA.mp3");
    z.play();
    $listItemRdown.children('p').remove();
    $(this).append(' <p>' + legendard + '</p>');
  });

  $listItemRdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
