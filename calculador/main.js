/*Simple calculator
author:Manny Santiago
LIC:GPLv3
*/

//User can enter values into inputs
//User can click on one of four buttons
document.getElementById('add').onclick= add;
document.getElementById('sub').onclick= sub;
document.getElementById('mult').onclick= mult;
document.getElementById('divide').onclick= divide;
//-User expects operation to occur
function add (){
  //get values out of inputs

var num1 = parseFloat(document.getElementById('firstVal').value)
var num2 = parseFloat(document.getElementById('secondVal').value)
document.getElementById('result').innerHTML= num1 + num2
//clear inputs
document.getElementById('firstVal').value= ""
document.getElementById('secondVal').value=""
}
//User sees result
function sub (){
  //get values out of inputs
  var num1 = parseFloat(document.getElementById('firstVal').value)
  var num2 = parseFloat(document.getElementById('secondVal').value)
  //do the math
  //display
document.getElementById('result').innerHTML= num1 - num2
//clear inputs
document.getElementById('firstVal').value= ""
document.getElementById('secondVal').value=""
}

function mult (){
  //get values out of inputs
  var num1 = parseFloat(document.getElementById('firstVal').value)
  var num2 = parseFloat(document.getElementById('secondVal').value)
  //do the math
  var sum = num1 * num2
  //display
document.getElementById('result').innerHTML= num1 * num2
//clear inputs
document.getElementById('firstVal').value= ""
document.getElementById('secondVal').value=""
}

function divide (){
  //get values out of inputs
  var num1 = parseFloat(document.getElementById('firstVal').value)
  var num2 = parseFloat(document.getElementById('secondVal').value)
  //do the math
  var sum = num1/ num2
  //display
document.getElementById('result').innerHTML= num1 / num2
//clear inputs
document.getElementById('firstVal').value= ""
document.getElementById('secondVal').value=""
}
