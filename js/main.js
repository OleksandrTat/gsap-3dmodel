gsap.registerPlugin(ScrollTrigger)

// section 1
gsap.to(".leftfirst", {
    x: "-90%",
    rotate: "-15deg",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "20% center",
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
        start: "20% center",
        end: "55% center",
        scrub: true,
        markers: false,
    }
})

// section 2
gsap.to(".section2first", {
    opacity: 0,
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".section2",
        start: "20% center",
        end: "55% center",
        scrub: true,
        markers: false,
    }
})
gsap.to(".left2-1", {
    x: "-90%",
    rotate: "-15deg",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".section2",
        start: "20% center",
        end: "55% center",
        scrub: true,
        markers: false,
    }
})
gsap.to(".right2-1", {
    x: "90%",
    rotate: "15deg",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".section2",
        start: "20% center",
        end: "55% center",
        scrub: true,
        markers: false,
    }
})
gsap.to(".section2second", {
    opacity: 1,
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".section2",
        start: "20% center",
        end: "55% center",
        scrub: true,
        markers: false,
    }
})
gsap.to(".left2-2", {
    x: "-90%",
    rotate: "-15deg",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".section2",
        start: "20% center",
        end: "55% center",
        scrub: true,
        markers: false,
    }
})
gsap.to(".right2-2", {
    x: "90%",
    rotate: "15deg",
    ease: "power4.inOut",
    scrollTrigger: {
        trigger: ".section2",
        start: "20% center",
        end: "55% center",
        scrub: true,
        markers: false,
    }
})