console.log("---------------------------");
console.log(" ");

var akontace = document.getElementsByName('text3')[0].value;
console.log(akontace);

if(akontace){
var table = document.getElementById("t-order-contact").getElementsByTagName("tbody")[0];
var row = table.insertRow();
var cell = row.insertCell();
cell.colSpan = 3;
var div = document.createElement('div');
div.id = "hc_akontace_alert";
div.innerHTML += '<b>POZOR!!!</b> Odeslat s dobírkou '+akontace+'!';
cell.appendChild(div);
}
console.log(" ");
console.log("---------------------------");
