// new LocomotiveScroll({
//     el:document.querySelector("#main"),
//     smooth : true
// });

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
    transition: "all 0.5s ease"
});

t1.from("#page1",{
    delay:0.1,
    y:1200,
    opacity:0,
    ease: "power2.out"
})

}

loadingAnimation();