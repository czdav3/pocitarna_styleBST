var activeRate = document.getElementsByClassName('is-active productRatingAction')[4];

if (activeRate){
    console.log(activeRate);
    activeRate.dispatchEvent(new MouseEvent("click"));
    console.log("Kliknul jsem!");
}
else{
    console.log("Není nic ke kliknutí!");
}
