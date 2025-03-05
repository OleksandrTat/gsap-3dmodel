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


  // Primera parte: de 0% a 48% (crecer el elemento)
  gsap.to(".videobg", {
    top: "0%",
    left: "0%",
    width: "100%",
    height: "100%",
    borderRadius: "0px",
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".section5",
        start: "top center",
        end: "center center",
        scrub: true,
        toggleActions: "play reverse play reverse",
    }
  });













  

  // Глобальний лічильник активних секцій з класом sectionRed
  let activeRedCount = 0;

  // Функція для анімації кольорів фігур (перейменовано, щоб уникнути конфлікту)
  function updateColorAnimation() {
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
        updateColorAnimation();
      },
      onLeave: () => {
        activeRedCount = Math.max(0, activeRedCount - 1);
        updateColorAnimation();
      },
      onEnterBack: () => {
        activeRedCount++;
        updateColorAnimation();
      },
      onLeaveBack: () => {
        activeRedCount = Math.max(0, activeRedCount - 1);
        updateColorAnimation();
      }
    });
  });






  gsap.registerPlugin(TextPlugin, EasePack);

  let container = $("#demo"),
      _sentenceEndExp = /(\.|\?|!)$/g;

  function machineGun(text) {    
    let words = text.split(" "),
        tl = gsap.timeline({delay: 0.6, repeat: -1, repeatDelay: 2}),
        wordCount = words.length,
        time = 0,
        word, element, duration, isSentenceEnd, i;
    
    for(i = 0; i < wordCount; i++){
      word = words[i];
      isSentenceEnd = _sentenceEndExp.test(word);
      element = $("<h3>" + word + "</h3>").appendTo(container);
      duration = Math.max(0.5, word.length * 0.08);
      if (isSentenceEnd) {
        duration += 0.4;
      }
      gsap.set(element, {autoAlpha:0, scale:0, z:0.01});
      tl.to(element, duration, {scale:1.2,  ease:"slow(0.25, 0.9)"}, time)
        .to(element, duration, {autoAlpha:1, ease:"slow(0.25, 0.9, true)"}, time);
      time += duration - 0.05;
      if (isSentenceEnd) {
        time += 0.6;
      }
    }
    
  }

  machineGun("Glory to Ukraine! Glory to the heroes!");
