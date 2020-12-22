console.log("-------------------------------");
console.log("Servisní blokace .disabled = false;");

var htmlString = $('body').html().toString();

var index = htmlString.indexOf("_SERV");

if (index != -1)
    alert("Warning this is a gene 1001");

console.log(htmlString);

console.log("-------------------------------");
console.log("Servisní blokace .disabled = false;");
