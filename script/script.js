// new LocomotiveScroll({
//     el:document.querySelector("#main"),
//     smooth : true
// });

gsap.from(".line h1", {
    y: 100,
    opacity: 0,
    stagger: 0.5,
    delay: 0.5,
    duration: 0.6
})
var counter = 1;
var countervalyue = document.querySelector("#line1-part1 h5");
var timeinterval = setInterval(() => {
    countervalyue.textContent = counter;
    counter++;
    if (counter == 101) {
        clearInterval(timeinterval);
    }
}, 10)

var t1 = gsap.timeline();
t1.to("#loader", {
    opacity: 0,
    delay: 2,
    duration: 0.5,
    display: "none",
    transition:"all 0.5s ease"
});