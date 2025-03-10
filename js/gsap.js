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
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: ".section5",
        start: "top center",
        end: "center center",
        scrub: true,
        toggleActions: "play reverse play reverse",
    }
  });

  // animation-right
  gsap.to(".animation-right", {
    width: "100%",
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".section6",
        start: "0% center",
        end: "center center",
        scrub: true,
        markers: false,
    }
  })

  // vishivanka
  gsap.to(".ivvish", {
    opacity: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".section7",
        start: "0% center",
        end: "center center",
        scrub: true,
        markers: false,
    }
  });
  gsap.from(".vyshyvankabg", {
    y: "20%",
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".section7",
        start: "0% center",
        end: "center center",
        scrub: true,
        markers: false,
    }
  });

  
  // Cuisine
  gsap.utils.toArray('[data-speed]').forEach(layer => {
    const speed = parseFloat(layer.getAttribute('data-speed'));
    
    gsap.to(layer, {
      // Розраховуємо зміну положення по осі Y залежно від висоти документу та швидкості
      y: -(document.documentElement.scrollHeight - window.innerHeight) / speed,
      ease: 'none',
      scrollTrigger: {
        trigger: layer,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });
  gsap.from(".cuisinebg", {
    // y: "-20%",
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: ".cuisinebg",
        start: "0% bottom",
        end: "center center",
        scrub: true,
        markers: false,
    }
  });














  

  // Глобальні лічильники активних секцій
  let activeRedCount = 0;
  let activeYellowCount = 0;

  // Функція для анімації кольорів фігур
  function updateColorAnimation() {
    let startColor, endColor;
    
    if (activeRedCount > 0) {
      startColor = "#FD0000";
      endColor = "#000000";
    } else if (activeYellowCount > 0) {
      startColor = "#D36216";
      endColor = "#ffffff";
    } else {
      startColor = "#0057b7";
      endColor = "#FFD700";
    }
    
    // Анімація для кореневого елемента
    gsap.to(document.documentElement, {
      duration: 1,
      "--start-color": startColor,
      "--end-color": endColor,
      ease: "power2.inOut"
    });
  }


  // Додаємо ScrollTrigger для секцій sectionRed
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

  // Додаємо ScrollTrigger для секцій sectionYellow
  gsap.utils.toArray(".sectionYellow").forEach(section => {
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        activeYellowCount++;
        updateColorAnimation();
      },
      onLeave: () => {
        activeYellowCount = Math.max(0, activeYellowCount - 1);
        updateColorAnimation();
      },
      onEnterBack: () => {
        activeYellowCount++;
        updateColorAnimation();
      },
      onLeaveBack: () => {
        activeYellowCount = Math.max(0, activeYellowCount - 1);
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






// -------------------------------- footer
  
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.circle-container');
  const circles = [];
  const totalCircles = 15;
  const title = document.querySelector('.title');
  let circleAnimations = [];

  // Función para resetear el estado
  const resetState = () => {
    circles.forEach(circle => {
      gsap.set(circle, {
        background: 'linear-gradient(45deg, #0057b7, #ffd700)',
        opacity: 0.8,
        scale: 1
      });
    });

    title.style.setProperty('background-clip', 'text');
    title.style.setProperty('-webkit-text-fill-color', 'transparent');
    title.style.setProperty('background', 'linear-gradient(45deg, #0057b7, #ffd700)');
    gsap.set(title, {
      innerHTML: 'STAND WITH UKRAINE',
      scale: 1,
      rotation: 0
    });
  };

  // Creación de animaciones de los círculos
  const createCircleAnimations = () => {
    circleAnimations = circles.map(circle => 
      gsap.to(circle, {
        duration: gsap.utils.random(3, 5),
        x: gsap.utils.random(-150, 150),
        y: gsap.utils.random(-100, 100),
        scale: gsap.utils.random(0.8, 1.5),
        rotation: gsap.utils.random(-90, 90),
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      })
    );
  };

  // Inicializar círculos
  for(let i = 0; i < totalCircles; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    const size = gsap.utils.random(40, 80);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${Math.random() * 100}%`;
    circle.style.top = `${Math.random() * 100}%`;
    container.appendChild(circle);
    circles.push(circle);
  }

  resetState();
  createCircleAnimations();

  const masterTL = gsap.timeline({paused: true});

  masterTL
    .to({}, {duration: 3})
    .add(() => {
      // Detener todas las animaciones de los círculos
      circleAnimations.forEach(anim => anim.pause());

      // Animación de parpadeo de los círculos
      circles.forEach(circle => {
        const tl = gsap.timeline({ repeat: 3 });
        tl.to(circle, {
          duration: 0.1,
          background: 'transparent',
          scale: 0.9,
          ease: 'power1.inOut'
        })
        .to(circle, {
          duration: 0.1,
          background: 'linear-gradient(45deg, #FD0000, #000000)',
          scale: 1,
          ease: 'power1.inOut'
        });
      });

      // Animación del texto
      gsap.to(title, {
        duration: 0.3,
        '-webkit-text-fill-color': '#FD0000',
        repeat: 3,
        yoyo: true,
        ease: 'power1.inOut'
      });
    }, '+=0.5')
    .to(title, {
      duration: 1,
      textShadow: '0 0 30px rgba(253,0,0,0.6)',
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.to(title, {scale: 1, duration: 0.5, ease: 'power2.in'});
      }
    })
    .to(title, {
      duration: 1,
      innerHTML: 'SUPPORT UKRAINE',
      onStart: () => {
        title.style.setProperty('background', 'linear-gradient(45deg, #FD0000, #000000)');
        title.style.setProperty('background-clip', 'text');
        title.style.setProperty('-webkit-text-fill-color', 'transparent');
      }
    }, '<')
    .to(circles, {
      background: 'linear-gradient(45deg, #FD0000, #000000)',
      duration: 2,
      ease: 'power2.inOut',
      onStart: () => {
        circleAnimations.forEach(anim => anim.kill());
        createCircleAnimations();
      }
    }, '<');

  // Evento de clic
  document.querySelector('.footer').addEventListener('click', () => {
    if(masterTL.isActive()) return;
    
    // Resetear completamente el estado
    resetState();
    masterTL.restart(true);
    masterTL.play();
  });

  // Autoejecutar la animación después de 1 segundo
  setTimeout(() => masterTL.play(), 1000);
});