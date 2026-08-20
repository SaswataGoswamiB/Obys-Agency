function loadingAnimation() {

    var counter = 1;
    var countervalyue = document.querySelector("#line1-part1 h5");
    var timeinterval = setInterval(() => {
        countervalyue.textContent = counter;
        counter++;
        if (counter == 101) {
            clearInterval(timeinterval);
        }
    }, 40)
}

function loadgsap() {
    var timeline = gsap.timeline();
    const dotLine = document.querySelector(".line h2");
    if (dotLine && !dotLine.dataset.split) {
        const chars = dotLine.textContent.split("");
        dotLine.innerHTML = chars.map((c) => `<span>${c}</span>`).join("");
        dotLine.dataset.split = "true";
    }

    timeline.from(".line h1", {
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: 0.5,
        delay: 0.3
    });

    timeline.from(".line h2 span", {
        x: -20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
    });

    const dotLine1 = document.querySelector(".line h3");
    if (dotLine1 && !dotLine1.dataset.split) {
        const chars = dotLine1.textContent.split("");
        dotLine1.innerHTML = chars.map((c) => `<span>${c}</span>`).join("");
        dotLine1.dataset.split = "true";
    }

    timeline.from(".line h3 span", {
        y: 20,
        opacity: 0,
        duration: 0.4,
        stagger: 0.2,
    });

    timeline.to("#loader", {
        // y:-200,
        opacity: 0,
        duration: 0.5,
        delay : 2
    });

    timeline.from("#page1", {
        y: 1200,
        opacity: 0,
        duration: 0.4,
        // ease:power4.out,
    });

    timeline.to("#loader", {
        display: "none",
    });

    timeline.from("#page1 #nav", {
        y: -100,
        opacity: 0,
        stagger: 0.2,
    });

    timeline.from("#page1 .hero h1", {
        y: 100,
        opacity: 0,
        stagger: 0.2,
    });
}

loadingAnimation();
loadgsap();


//cursor effect
document.addEventListener("mousemove", function (e) {
    gsap.to("#crsr", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
    });
});


Shery.makeMagnet("#nav-part2 h4", {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 2,
});