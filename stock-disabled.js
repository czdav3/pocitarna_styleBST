console.log("-------------------------------");
console.log("Externí sklad IMMAX .disabled = false;");

var inputName = document.getElementsByName('stocksAmount[5]')[0];
var inputLocation = document.getElementsByName('stocksLocation[5]')[0];

inputName.disabled = true;
inputLocation.disabled = true;

console.log(inputName);
console.log(inputLocation);

console.log("Externí sklad IMMAX .disabled = true;");
console.log("-------------------------------");

console.log("-------------------------------");
console.log("Servisní blokace .disabled = false;");

var htmlString = $('body').html().toString();

var index = htmlString.indexOf("_SERV");

if (index != -1)
    alert("Warning this is a gene 1001");

console.log(htmlString);

console.log("-------------------------------");
console.log("Servisní blokace .disabled = false;");
