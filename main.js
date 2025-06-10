gsap.registerPlugin(SplitText)

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