document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrambleTextPlugin);

  const element = document.querySelector("h1");

  gsap.to(element, {
    duration: 1,
    scrambleText: "THIS IS NEW TEXT",
  });
});
