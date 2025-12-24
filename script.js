const isMobile = window.innerWidth < 768;

const birthdayText = "HAPPY BIRTHDAY ANH IUUUU 🎂💙";

const messages = [
  birthdayText, birthdayText, birthdayText,
  "YOU ARE BRILLIANT ✨",
  "BELIEVE IN YOURSELF 💫",
  "MY HEART IS ALWAYS YOURS 💙",
  "LOVE YOU TO THE MOON AND BACK 🌙",
  "YOU MAKE MY WORLD BRIGHTER ⭐",
  "FOREVER STARTS WITH YOU 💍",
  "I'M SO PROUD OF YOU 🔥"
];

const specialMessage = "YOU ARE MY FOREVER 💙";
let specialShown = false;

const stickers = ["💙","✨","🌙","⭐","🪐","💫"];

const images = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg"
];

function createFallingItem() {
  const el = document.createElement("div");
  el.className = "fall";

  const depth = Math.random();
  const scale = (isMobile ? 0.55 : 0.7) + depth * 0.9;
  const duration = 7 + (1 - depth) * (isMobile ? 6 : 9);

  const type = Math.random();

  if (type < 0.45) {
    const t = document.createElement("div");
    t.className = "text";
    t.innerText = messages[Math.floor(Math.random() * messages.length)];
    el.appendChild(t);
  } else if (type < 0.65) {
    const s = document.createElement("div");
    s.className = "sticker";
    s.innerText = stickers[Math.floor(Math.random() * stickers.length)];
    el.appendChild(s);
  } else {
    const img = document.createElement("img");
    img.className = "image";
    img.src = images[Math.floor(Math.random() * images.length)];
    el.appendChild(img);
  }

  el.style.left = Math.random() * 90 + "vw";
  el.style.animationDuration = duration + "s";
  el.style.transform += ` scale(${scale})`;
  el.style.opacity = 0.5 + depth * 0.5;

  const blur = isMobile ? (1 - depth) * 0.4 : (1 - depth) * 1.2;
  el.style.filter = `blur(${blur}px)`;

  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

function spawnSpecial() {
  if (specialShown) return;
  specialShown = true;

  const el = document.createElement("div");
  el.className = "fall";
  el.style.left = "50vw";
  el.style.animationDuration = "18s";

  const t = document.createElement("div");
  t.className = "text special";
  t.innerText = specialMessage;

  el.appendChild(t);
  document.body.appendChild(el);
}

function createMeteor() {
  if (isMobile && Math.random() > 0.6) return;
  const m = document.createElement("div");
  m.className = "meteor";
  document.body.appendChild(m);
  setTimeout(() => m.remove(), 1600);
}

setInterval(createFallingItem, isMobile ? 650 : 360);
setInterval(createMeteor, 6000);
setTimeout(spawnSpecial, 45000);

/* MUSIC */
const music = document.getElementById("music");
const hint = document.getElementById("music-hint");

document.body.addEventListener("click", () => {
  music.play();
  if (hint) hint.style.display = "none";
}, { once: true });

/* ===== STARS ===== */
const STAR_COUNT = isMobile ? 70 : 140;

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDelay = Math.random() * 3 + "s";
  document.body.appendChild(star);
}
