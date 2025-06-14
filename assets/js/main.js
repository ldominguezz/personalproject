gsap.registerPlugin(ScrollTrigger, SplitText);

document.addEventListener("DOMContentLoaded", () => {
  const splitText = new SplitText(".definition", {
    type: "words"
  })
  gsap.from(splitText.words, {
    duration: 2,
    y: 20, //estado inicial
    stagger: 0.7, // segundos entre animacion de cada palabra
    autoAlpha: 0, // desde opacidad 0
    filter: "blur(10px)"
  })

  const tl = gsap.timeline({
    defaults: {
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        scrub: 1, //vincula la animación al scroll  "center center" inicia al centro de la pantalla
        start: "top top", //en que pixel empieza la animacion                 
      }
    }
  })
  tl
    .to('#habilidades', {
      y: 100,
      x: 100
    })
    .to('#tiempo', {
      x: 200,
      y: 20
    })
    .to('#pensamiento', {
      x: -80,
      y: -10
    })
    .to('#creatividad', {
      x: -50
    })
    .to('#trabajo', {
      y: -150,
    })
    .to('#sociales', {
      x: 70,
      y: -10
    })
    .to('#detalles', {
      x: -70,
      y: 40
    })
    .to('#solucion', {
      x: -70,
      y: -40
    })
    .to('#resiliencia', {
      y: -170
    })


  const hoverElements = ['#habilidades', '#tiempo', '#pensamiento', '#creatividad', '#trabajo', '#sociales', '#detalles', '#solucion', '#resiliencia'];
  hoverElements.forEach(element => {
    let animation = gsap.to(element, {
      paused: true,
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out",
      color: "green"
    });
    var elementid = document.querySelector(element);
    elementid.addEventListener("mouseenter", () => animation.play());
    elementid.addEventListener("mouseleave", () => animation.reverse());
  })
})