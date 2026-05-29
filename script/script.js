// const locoScroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });

// locoScroll.stop();

function loadingAnimation(){

    var counter = 1;
var countervalyue = document.querySelector("#line1-part1 h5");
var timeinterval = setInterval(() => {
    countervalyue.textContent = counter;
    counter++;
    if (counter == 101) {
        clearInterval(timeinterval);
    }
}, 10)

// split the highlight h2 into character spans so stagger works on a single element
const titleH2 = document.querySelector(".title-inline h2");
if (titleH2 && !titleH2.dataset.split) {
    const chars = titleH2.textContent.split("");
    titleH2.innerHTML = chars.map(c => `<span class="char">${c === " " ? "&nbsp;" : c}</span>`).join("");
    titleH2.dataset.split = "1";
}

var t1 = gsap.timeline();

t1.from(".line h1", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    delay: 0.5,
    duration: 0.6
})

// animate the split characters for the highlight word
// animate the split characters for the highlight word so total run ~3s
const charElems = document.querySelectorAll(".title-inline h2 .char");
if (charElems.length) {
    const totalTargetDuration = 3; // seconds for the whole staggered animation
    const perCharDur = 0.6; // each char's animation duration
    const staggerVal = charElems.length > 1 ? Math.max(0.01, (totalTargetDuration - perCharDur) / (charElems.length - 1)) : 0;

    t1.from(".title-inline h2 .char", {
        opacity: 0,
        x: -20,
        duration: perCharDur,
        stagger: staggerVal
    }, "+=0.1");
}

// hide loader after the heading animations finish (small pause)
t1.to("#loader", {
    opacity: 0,
    delay: 0.6,
    duration: 0.35,
    display: "none",
    transition: "all 0.5s ease",
    onComplete: () => {
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").style.overflowX = "hidden";
     //locoScroll.start();
}
});

t1.from("#page1",{
    delay:0.1,
    y:1200,
    opacity:0,
    ease: "power2.out"
})

t1.from("#nav",{
    y:-100,
    opacity:0,
    ease: "power2.out",
    duration:0.4    
})

t1.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero3 h3, #hero4 h1",{
    y:120,
    opacity:0,
    ease: "power2.out",
    duration:0.6,
    stagger:0.2
})

}

function cursoranimation(){
    //Cursor Code
const textElements = ["H1", "H2", "H3", "H4", "H5", "H6", "P", "SPAN", "A"];

document.addEventListener("mousemove", function(e){

    const hoveredElement = document.elementFromPoint(e.clientX, e.clientY);
    const crsr = document.getElementById("crsr");
    
    // Check if hovering over text element
    if (textElements.includes(hoveredElement?.tagName)) {
        gsap.to("#crsr", {
            x: e.x,
            y: e.y,
            scale: 1.5,
            ease: "power2.out",
            duration: 0.2,
        });
    } else {
        gsap.to("#crsr", {
            x: e.x,
            y: e.y,
            scale: 1,
            ease: "power2.out",
            duration: 0.2
        });
    }
});
}

// Run the animations
loadingAnimation();
cursoranimation();


Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});


