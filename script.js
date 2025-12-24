const birthdayText = "HAPPY BIRTHDAY ANH IUUUU 🎂💙";

const messages = [
  birthdayText,
  birthdayText,
  birthdayText,
  "YOU ARE BRILLIANT ✨",
  "BELIEVE IN YOURSELF 💫",
  "MY HEART IS ALWAYS YOURS 💫",
  "LOVE YOU TO THE MOON AND BACK 🌙",
  "WITH YOU, EVERYTHING FEELS RIGHT",
  "YOU MAKE MY WORLD BRIGHTER ⭐",
  "FOREVER STARTS WITH YOU 💍",
  "MY SAFE PLACE, MY LOVE 💙",
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

  const depth = Math.random(); // 0 xa – 1 gần
  const scale = 0.6 + depth * 1.1;
  const duration = 7 + (1 - depth) * 8;

  const type = Math.random();

  if (type < 0.45) {
    // TEXT
    const t = document.createElement("div");
    t.className = "text";
    t.innerText = messages[Math.floor(Math.random() * messages.length)];
    el.appendChild(t);

  } else if (type < 0.65) {
    // STICKER
    const s = document.createElement("div");
    s.className = "sticker";
    s.innerText = stickers[Math.floor(Math.random() * stickers.length)];
    el.appendChild(s);

  } else {
    // IMAGE
    const img = document.createElement("img");
    img.className = "image";
    img.src = images[Math.floor(Math.random() * images.length)];
    el.appendChild(img);
  }

  el.style.left = Math.random() * 90 + "vw";
  el.style.animationDuration = duration + "s";
  el.style.transform += `
    scale(${scale})
    translateZ(${depth * 300}px)
  `;

  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

function spawnSpecial() {
  if (specialShown) return;
  specialShown = true;

  const el = document.createElement("div");
  el.className = "fall";

  const t = document.createElement("div");
  t.className = "text special";
  t.innerText = specialMessage;

  el.style.left = "50vw";
  el.style.animationDuration = "20s";
  el.style.transform = `
  rotateY(32deg)
  rotateX(18deg)
  scale(${scale})
  translateZ(${depth * 300}px)
`;


  el.appendChild(t);
  document.body.appendChild(el);
}

function createMeteor() {
  const m = document.createElement("div");
  m.className = "meteor";
  document.body.appendChild(m);
  setTimeout(() => m.remove(), 1600);
}

setInterval(createFallingItem, 320);
setInterval(createMeteor, 6000);
setTimeout(spawnSpecial, 45000);

const music = document.getElementById("music");
const hint = document.getElementById("music-hint");

document.body.addEventListener("click", () => {
  music.play();
  if (hint) hint.style.display = "none";
}, { once: true });
