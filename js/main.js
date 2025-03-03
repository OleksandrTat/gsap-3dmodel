gsap.registerPlugin(ScrollTrigger)

// section 1
gsap.to(".section1", {
    // opacity: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".section1",
        start: "20% center",
        end: "55% center",
        scrub: true,
        markers: false,
    }
})
gsap.to(".leftfirst", {
    x: "-90%",
    rotate: "-15deg",
    ease: "power2.inOut",
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
    ease: "power2.inOut",
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
    ease: "power2.inOut",
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
    ease: "power2.inOut",
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
    ease: "power2.inOut",
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
    ease: "power2.inOut",
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
    ease: "power2.inOut",
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
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".section2",
        start: "20% center",
        end: "55% center",
        scrub: true,
        markers: false,
    }
})


// AN-225
gsap.to(".text3", {
    opacity: 1,
    filter: "blur(0px)",
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".section3",
        start: "0% center",
        end: "center center",
        scrub: true,
        markers: false,
    }
})


// AN-225 destroyed
gsap.to(".section4", {
    // opacity: 1,
    filter: "blur(0px)",
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".section4",
        start: "0% center",
        end: "center center",
        scrub: true,
        markers: false,
    }
})





// Конфігурація кольорів для кожної секції
const colorStops = [
    {section: ".section1", start: [1, 87, 183], end: [255, 215, 1]}, // Синьо-жовтий
    {section: ".section2", start: [253, 1, 1], end: [1, 1, 1]},      // Червоно-чорний
    {section: ".section3", start: [1, 87, 183], end: [255, 215, 1]}, // Синьо-жовтий
    {section: ".section4", start: [253, 1, 1], end: [1, 1, 1]}       // Червоно-чорний
  ];
  
  // Створюємо головну анімацію
  const gradientAnimation = gsap.to(":root", {
    duration: 1,
    ease: "none",
    paused: true,
    modifiers: {
      "--start-color": value => {
        const progress = gradientAnimation.progress();
        const current = Math.floor(progress * (colorStops.length - 1));
        const next = Math.min(current + 1, colorStops.length - 1);
        const ratio = (progress - current/(colorStops.length-1)) * (colorStops.length-1);
        
        const r = gsap.utils.interpolate(
          colorStops[current].start[0], 
          colorStops[next].start[0], 
          ratio
        );
        // Аналогічно для G і B
        return `rgb(${Math.round(r)},${Math.round(g)},${Math.round(b)})`;
      },
      // Аналогічний модифікатор для --end-color
    }
  });
  
  // Налаштування скролу
  ScrollTrigger.create({
    trigger: "body",
    start: "top top",
    end: "max",
    scrub: 1.5,
    animation: gradientAnimation,
    onUpdate: self => {
      const sections = gsap.utils.toArray("section");
      const progress = gsap.utils.normalize(0, sections.length - 1, self.progress);
      gradientAnimation.progress(progress);
    }
  });






  

  // Глобальний лічильник активних секцій з класом sectionRed
  let activeRedCount = 0;

  // Функція, що оновлює анімацію залежно від кількості активних секцій
  function updateAnimation() {
    if (activeRedCount > 0) {
      gsap.to(document.querySelectorAll("figure.color"), {
        duration: 1,
        "--start-color": "#FD0000",
        "--end-color": "#000000",
        ease: "power2.inOut"
      });
    } else {
      gsap.to(document.querySelectorAll("figure.color"), {
        duration: 1,
        "--start-color": "#0057b7",
        "--end-color": "#ffd700",
        ease: "power2.inOut"
      });
    }
  }

  // Для кожної секції з класом sectionRed створюємо ScrollTrigger
  gsap.utils.toArray(".sectionRed").forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        activeRedCount++;
        updateAnimation();
      },
      onLeave: () => {
        activeRedCount = Math.max(0, activeRedCount - 1);
        updateAnimation();
      },
      onEnterBack: () => {
        activeRedCount++;
        updateAnimation();
      },
      onLeaveBack: () => {
        activeRedCount = Math.max(0, activeRedCount - 1);
        updateAnimation();
      }
    });
  });