const starContainer = document.getElementById("starlight");
const asteroidContainer = document.getElementById("asteroidBelt");

const buildStars = (count) => {
  if (!starContainer) return;
  starContainer.innerHTML = "";

  for (let i = 0; i < count; i += 1) {
    const star = document.createElement("span");
    const sizeClass = Math.random() > 0.7 ? "star" : "star star--soft";
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = 4 + Math.random() * 8;
    const delay = Math.random() * 5;

    star.className = sizeClass;
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    star.style.setProperty("--twinkle-duration", `${duration}s`);
    star.style.setProperty("--twinkle-delay", `${delay}s`);
    starContainer.appendChild(star);
  }
};

const buildAsteroids = (count) => {
  if (!asteroidContainer) return;
  asteroidContainer.innerHTML = "";

  for (let i = 0; i < count; i += 1) {
    const asteroid = document.createElement("span");
    const size = 12 + Math.random() * 18;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = 14 + Math.random() * 14;

    asteroid.className = "asteroid";
    asteroid.style.top = `${top}%`;
    asteroid.style.left = `${left}%`;
    asteroid.style.setProperty("--asteroid-size", `${size}px`);
    asteroid.style.setProperty("--drift-duration", `${duration}s`);
    asteroidContainer.appendChild(asteroid);
  }
};

buildStars(140);
buildAsteroids(14);

window.addEventListener("resize", () => {
  buildStars(140);
  buildAsteroids(14);
});
