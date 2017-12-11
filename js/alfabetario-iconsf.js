$(document).ready(function(){

  var z = document.createElement("AUDIO");

$("#f").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/F.mp3");
    l.play();
  });

  $("#fa").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/FA.mp3");
    l.play();
  });  

  $("#fe").click(function() {
    var le = document.createElement("AUDIO");
    le.setAttribute("src", "sounds/FE.mp3");
    le.play();
  }); 

  $("#fi").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/FI.mp3");
    l.play();
  }); 

  $("#fo").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/FO.mp3");
    l.play();
  }); 

  $("#fu").click(function() {
    var l = document.createElement("AUDIO");
    l.setAttribute("src", "sounds/FU.mp3");
    l.play();
  }); 


  var $listItemL = $('#faca');
  var legenda = '<span id="consc"> f</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">c</span>';
  legenda += '<span id="vogalc">a</span>';

  $listItemL.on('mouseover click', function() {
    z.setAttribute("src", "sounds/FACA.mp3");
    z.play();
    $listItemL.children('p').remove();
    $(this).append(' <p>' + legenda + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemM = $('#feijao');
  var legendam = '<span id="consc"> f</span>';
  legendam += '<span id="vogalc">e</span>';
  legendam += '<span id="vogalc">i</span>';
  legendam += '<span id="consc">j</span>';
  legendam += '<span id="vogalc">ã</span>';  
  legendam += '<span id="vogalc">o</span>';

  $listItemM.on('mouseover click', function() {
    z.setAttribute("src", "sounds/FEIJÃO.mp3");
    z.play();
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#fita');
  var legendar = '<span id="consc">f</span>';
  legendar += '<span id="vogalc">i</span>';
  legendar += '<span id="consc">t</span>';
  legendar += '<span id="vogalc">a</span>';

  $listItemR.on('mouseover click', function() {
    z.setAttribute("src", "sounds/FITA.mp3");
    z.play();
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });
  var $listItemLdown = $('#foca');
  var legendald = '<span id="consc">f</span>';
  legendald += '<span id="vogalc">o</span>';
  legendald += '<span id="consc">c</span>';
  legendald += '<span id="vogalc">a</span>';

  $listItemLdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/FOCA.mp3");
    z.play();
    $listItemLdown.children('p').remove();
    $(this).append(' <p>' + legendald + '</p>');
  });

  $listItemLdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemMdown = $('#funil');
  var legendamd = '<span id="consc">f</span>';
  legendamd += '<span id="vogalc">u</span>';
  legendamd += '<span id="consc">n</span>';
  legendamd += '<span id="vogalc">i</span>';
  legendamd += '<span id="consc">l</span>';

  $listItemMdown.on('mouseover click', function() {
    z.setAttribute("src", "sounds/FUNIL.mp3");
    z.play();
    $listItemMdown.children('p').remove();
    $(this).append(' <p>' + legendamd + '</p>');
  });

  $listItemMdown.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
