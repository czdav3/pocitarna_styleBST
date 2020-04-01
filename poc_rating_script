    console.log("AUTORATER: Loaded rater");
    console.log("AUTORATER: Page loaded can rate now hopefully");
            function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

        document.querySelectorAll(".star.star-off.show-tooltip.is-active.productRatingAction")[4].click();
            console.log("AUTORATER: JQuery Clicked on it");
    eventFire(document.querySelectorAll(".star.star-on.show-tooltip")[4], 'click');
         console.log("AUTORATER: OLD type Clicked on it");
        eventFire(document.querySelectorAll(".star.star-off.show-tooltip.is-active.productRatingAction")[4], 'click');
    console.log("AUTORATER: OLD Clicked on it");
        console.log("AUTORATER: All clicked!");
