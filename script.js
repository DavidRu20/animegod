const starLayers = document.querySelectorAll(".starfield__layer");
const asteroidField = document.querySelector(".starfield__asteroids");

const createStar = (layer) => {
  const star = document.createElement("span");
  const size = Math.random() * 2 + 0.5;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;
  star.style.opacity = `${Math.random() * 0.6 + 0.2}`;
  star.style.animationDelay = `${Math.random() * 8}s`;
  star.classList.add("star");
  layer.appendChild(star);
};

const createAsteroid = () => {
  const asteroid = document.createElement("span");
  const size = Math.random() * 120 + 60;
  asteroid.style.width = `${size}px`;
  asteroid.style.height = `${size}px`;
  asteroid.style.left = `${Math.random() * 100}%`;
  asteroid.style.top = `${Math.random() * 100}%`;
  asteroid.style.animationDelay = `${Math.random() * 6}s`;
  asteroid.classList.add("asteroid");
  asteroidField.appendChild(asteroid);
};

starLayers.forEach((layer) => {
  const count = layer.dataset.layer === "1" ? 45 : layer.dataset.layer === "2" ? 32 : 20;
  Array.from({ length: count }).forEach(() => createStar(layer));
});

Array.from({ length: 6 }).forEach(() => createAsteroid());

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".card, .program, .experience__item, .campus-card").forEach((item) => {
  observer.observe(item);
});
