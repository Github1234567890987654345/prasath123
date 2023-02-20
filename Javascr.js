let a;
let b;
let c;
a = Number(a);
b = Number(b);
c = Number(c);
c = 0;
document.getElementById("answer").innerHTML = 0;

document.getElementById("addsbutton").onclick = function(){
a = Number(document.getElementById("value1").value);
b = Number(document.getElementById("value2").value);
add(a,b);


document.getElementById("answer").innerHTML=c;
}


document.getElementById("subbutton").onclick = function(){
a = document.getElementById("value1").value;
b = document.getElementById("value2").value;
sub(a,b);
document.getElementById("answer").innerHTML=c;
}


document.getElementById("clcbutton").onclick = function(){
document.getElementById("value1").value = null;
document.getElementById("value2").value = null;

document.getElementById("answer").innerHTML= 0;
}

document.getElementById("mulbutton").onclick = function(){
a = document.getElementById("value1").value;
b = document.getElementById("value2").value;
mul(a,b);
document.getElementById("answer").innerHTML=c;
}
document.getElementById("divbutton").onclick= function(){
 a = Number(document.getElementById("value1").value);
 b = Number(document.getElementById("value2").value);
  div(a,b);
  document.getElementById("answer").innerHTML = c;
}

function mul(a,b){
 
  c = a*b;
}

function add(a,b){
  c = a+b;
}
function sub(a,b)
{
  c = a-b;
}
function div(a,b)
{
  c = a/b;
}