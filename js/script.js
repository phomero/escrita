// Select the element and store it in a variable.
var el = document.getElementById('a');
var legenda = '<span id="vogalc">A</span>';
legenda += '<span id="consc">b</span>';
legenda += '<span id="vogalc">a</span>';
legenda += '<span id="consc">c</span>';
legenda += '<span id="vogalc">a</span>';
legenda += '<span id="consc">x</span>';
legenda += '<span id="vogalc">i</span>';
// Change the value of the class attribute.
el.innerHTML = legenda;

$(document).ready(function(){
  $("#ave").click(function(){
     $(this).hide();
 });
});
