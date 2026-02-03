const starsContainer = document.querySelector(".stars");
const dimStarsContainer = document.querySelector(".stars--dim");

const createStars = (count, container) => {
  if (!container) return;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const star = document.createElement("span");
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 6}s`;
    star.classList.add("star");
    fragment.appendChild(star);
  }

  container.appendChild(fragment);
};

createStars(40, starsContainer);
createStars(25, dimStarsContainer);

const updateHeroGlow = () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  const offset = window.scrollY * 0.2;
  hero.style.transform = `translateY(${offset * -0.02}px)`;
};

window.addEventListener("scroll", updateHeroGlow);
updateHeroGlow();
