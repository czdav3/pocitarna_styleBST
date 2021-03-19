console.log("---------------------------");
console.log(" ");

$(document).ready(function() {
  $('table tr').each(function() {
    var element = this.id;
    var trueId = element.split('-')[1];

    var url = "url[" + trueId + "]";
    var selected = document.getElementsByName(url);
    
    if(typeof selected[0] === 'undefined'){
        //console.log("nic moc");
    }
    else{

        var result = window.location.hostname + "/" + selected[0].value;
        console.log(result);
}
})
});

console.log(" ");
console.log("---------------------------");
