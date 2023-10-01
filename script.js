const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function mousefollow(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#mousecircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
        ///console.log(dets.clientX,dets.clientY);
    })

}

var timeout;

function mousesize(){
  var xscale=1;
  var yscale=1;

  var xprev=0;
  var yprev=0;

  window.addEventListener("mouseover",function(dets){
    clearTimeout(timeout)
    var xdiff=dets.clientX-xprev;
    var ydiff=dets.clientY-yprev;

    xscale=gsap.utils.clamp(0.8,1.2,xdiff);
    yscale=gsap.utils.clamp(0.8,1.2,ydiff);
    xprev=dets.clientX;
    yprev=dets.clientY;

    mousefollow(xscale,yscale);

    timeout=setTimeout(function(){

      document.querySelector("#mousecircle").style.transform=`translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    },100)
    console.log(timeout);


} 
    

)}


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
mousesize();
