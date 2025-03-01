gsap.registerPlugin(ScrollTrigger)

gsap.to(".leftfirst", {
    x: "-90%",
    rotate: "-15deg",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "10% center",
        end: "55% center",
        scrub: true,
        markers: false,
    }
})
gsap.to(".rightfirst", {
    x: "90%",
    rotate: "15deg",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "10% center",
        end: "55% center",
        scrub: true,
        markers: false,
    }
})