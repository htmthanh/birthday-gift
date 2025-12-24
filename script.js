const isMobile = window.innerWidth < 768;
const music = document.getElementById("music");

let started = false;

/* ===== LOVE OPTION ===== */
const overlay = document.getElementById("love-overlay");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");
const noText = document.getElementById("no-text");

btnYes.onclick = startExperience;

btnNo.onclick = () => {
  noText.style.opacity = 1;
  setTimeout(startExperience, 1400);
};

function startExperience() {
  if (started) return;
  started = true;

  overlay.style.display = "none";
  music.play();

  initStars();
  startFalling();
}

/* ===== CONTENT ===== */
const birthdayText = "HAPPY BIRTHDAY ANH IUUUU 🎂💙";

const messages = [
  birthdayText, birthdayText, birthdayText,
  "YOU ARE BRILLIANT ✨",
  "YOU ARE MY FAVORITE PERSON ✨",
  "MY HEART IS ALWAYS YOURS 💫",
  "LOVE YOU TO THE MOON AND BACK 🌙",
  "WITH YOU, EVERYTHING FEELS RIGHT",
  "YOU MAKE MY WORLD BRIGHTER ⭐",
  "FOREVER STARTS WITH YOU 💍",
  "MY SAFE PLACE, MY LOVE 💙",
  "I'M SO PROUD OF YOU 🔥",
  "KEEP SMILING 💙",
  "BELIEVE IN YOURSELF ⭐",
  "EVERYTHING WILL BE OKAY 🌙"

];

const specialMessage = "BEST WISHES FOR YOU ON YOUR BIRTHDAY 💙";
let specialShown = false;

const stickers = ["💙","✨","🌙","⭐","💫"];
const images = [
  "img/img1.jpg","img/img2.jpg","img/img3.jpg",
  "img/img4.jpg","img/img5.jpg","img/img6.jpg"
];

/* ===== FALLING ===== */
function createFallingItem() {
  const el = document.createElement("div");
  el.className = "fall";

  const depth = Math.random();
  const scale = (isMobile ? 0.55 : 0.75) + depth * 0.7;
  const duration = 7 + (1 - depth) * 6;

  const type = Math.random();

  if (type < 0.5) {
    const t = document.createElement("div");
    t.className = "text";
    t.innerText = messages[Math.floor(Math.random() * messages.length)];
    el.appendChild(t);
  } else if (type < 0.7) {
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

function startFalling() {
  setInterval(createFallingItem, isMobile ? 700 : 380);
  setTimeout(spawnSpecial, 45000);
}

/* ===== STARS ===== */
function initStars() {
  const STAR_COUNT = isMobile ? 60 : 120;
  for (let i = 0; i < STAR_COUNT; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 3 + "s";
    document.body.appendChild(star);
  }
}
