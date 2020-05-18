 console.log("Rate ready!");
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
            console.log("HODNOTÍCÍ SCRIPT: Klikl jsme na {1}");
    eventFire(document.querySelectorAll(".star.star-on.show-tooltip")[4], 'click');
         console.log("HODNOTÍCÍ SCRIPT: Klikl jsme na {2}");
        eventFire(document.querySelectorAll(".star.star-off.show-tooltip.is-active.productRatingAction")[4], 'click');
    console.log("HODNOTÍCÍ SCRIPT: Klikl jsme na {3}");
        console.log("HODNOTÍCÍ SCRIPT: Vše naklikáno.");
