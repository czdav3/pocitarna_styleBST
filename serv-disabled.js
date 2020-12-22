console.log("-------------------------------");
console.log("Servisní blokace .disabled = false;");

var htmlString = $('body').html().toString();

var index = htmlString.indexOf("_SERV");

if (index != -1)
    {var inputName = document.getElementsByName('stocksAmount[1]')[0];
    var inputLocation = document.getElementsByName('stocksLocation[1]')[0];

    inputName.disabled = true;
    inputLocation.disabled = true;

    console.log(inputName);
    console.log(inputLocation);}


console.log("-------------------------------");
console.log("Servisní blokace .disabled = false;");
