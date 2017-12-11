$(document).ready(function(){
//$(function() {
  var certo = '<span class="glyphicon glyphicon-thumbs-up"></span>'
  var errado = '<span class="glyphicon glyphicon-thumbs-down"></span>'

  var $listItemL = $('#sapo');
  var legenda = '<span id="consc"> s</span>';
  legenda += '<span id="vogalc">a</span>';
  legenda += '<span id="consc">p</span>';
  legenda += '<span id="vogalc">o</span>';

  $listItemL.on('mouseover click', function() {
    $listItemL.children('p').remove();
    $(this).children('h2').remove();
    $(this).append(' <p>' + legenda + ' ' + certo + '</p>');
  });

  $listItemL.on('mouseout', function() {
    $(this).children('h2').remove();
    $(this).children('p').remove();
  });

  var $listItemM = $('#pato');
  var legendam = '<span id="consc"> p</span>';
  legendam += '<span id="vogalc">a</span>';
  legendam += '<span id="consc">t</span>';
  legendam += '<span id="vogalc">o</span>';

  $listItemM.on('mouseover click', function() {
    $listItemM.children('p').remove();
    $(this).append(' <p>' + legendam + ' ' + errado + '</p>');
  });

  $listItemM.on('mouseout', function() {
    $(this).children('p').remove();
  });

  var $listItemR = $('#rato');
  var legendar = '<span id="consc"> r</span>';
  legendar += '<span id="vogalc">a</span>';
  legendar += '<span id="consc">t</span>';
  legendar += '<span id="vogalc">o</span>';

  $listItemR.on('mouseover click', function() {
    $listItemR.children('p').remove();
    $(this).append(' <p>' + legendar + ' ' + errado + '</p>');
  });

  $listItemR.on('mouseout', function() {
    $(this).children('p').remove();
  });

});
