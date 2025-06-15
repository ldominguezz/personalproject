gsap.registerPlugin(ScrollTrigger, SplitText);

document.fonts.ready.then(function() {
  const splitText = new SplitText(".definition", {
    type: "words"
  })
  gsap.from(splitText.words, {
    duration: 3,
    y: 20, //estado inicial
    stagger: 0.7, // segundos entre animacion de cada palabra
    autoAlpha: 0, // desde opacidad 0
    filter: "blur(10px)"
  })

  const tl = gsap.timeline({
    defaults: {
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        scrub: 2, //vincula la animación al scroll  "center center" inicia al centro de la pantalla
        start: "80% center", //en que pixel empieza la animacion                 
      }
    }
  })
  tl
    .to('#tiempo', {
      x: 200,
      y: 20
    })
    .to('#pensamiento', {
      x: -80,
      y: -10
    })
    .to('#creatividad', {
      x: -30
    })
    .to('#trabajo', {
      y: -170,
    })
    .to('#sociales', {
      x: 70,
      y: -10
    })
    .to('#detalles', {
      x: 150,
      y: 40
    })
    .to('#solucion', {
      x: -70,
      y: -45
    })
    .to('#resiliencia', {
      x: 200,
      y: 160
    })


  const hoverElements = ['#tiempo', '#pensamiento', '#creatividad', '#trabajo', '#sociales', '#detalles', '#solucion', '#resiliencia'];
  hoverElements.forEach(element => {
    let animation = gsap.to(element, {
      paused: true,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
    var elementid = document.querySelector(element);
    elementid.addEventListener("mouseenter", () => animation.play());
    elementid.addEventListener("mouseleave", () => animation.reverse());
  })
})