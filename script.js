const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function mousefollow(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#mousecircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px)`;
        ///console.log(dets.clientX,dets.clientY);
    })

}


function firstanimations(){
    var t1 = gsap.timeline();

    t1.from("#navbar", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
      })
        .to(".boundingprg", {
          y: 0,
          ease: Expo.easeInOut,
          duration: 2,
          delay: -1,
          stagger: 0.1,
        })
        .from("#footer_landingpage", {
          y: -10,
          opacity: 0,
          duration: 1.5,
          delay: -1,
          ease: Expo.easeInOut,
        });
}

mousefollow();
firstanimations();
