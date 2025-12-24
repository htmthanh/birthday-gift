/* ===== TEXT ===== */
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

function createTunnelText() {
  const el = document.createElement("div");
  el.className = "fall";

  const depth = Math.random(); // 0 xa – 1 gần
  const scale = 0.6 + depth * 1.2;
  const duration = 6 + (1 - depth) * 9;

  const t = document.createElement("div");
  t.className = "text";
  t.innerText = messages[Math.floor(Math.random() * messages.length)];

  el.style.animationDuration = duration + "s";
  el.style.transform += `
    scale(${scale})
    translateZ(${depth * 300}px)
  `;

  el.appendChild(t);
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

  el.style.animationDuration = "18s";
  el.style.transform += " scale(1.3) translateZ(350px)";

  el.appendChild(t);
  document.body.appendChild(el);

  setTimeout(() => el.remove(), 18000);
}

function createMeteor() {
  const m = document.createElement("div");
  m.className = "meteor";
  document.body.appendChild(m);
  setTimeout(() => m.remove(), 1500);
}

for (let i = 0; i < 160; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDelay = Math.random() * 3 + "s";
  document.body.appendChild(star);
}

setInterval(createTunnelText, 300);
setInterval(createMeteor, 5500);
setTimeout(spawnSpecial, 45000);

const music = document.getElementById("music");
const hint = document.getElementById("music-hint");

document.body.addEventListener("click", () => {
  music.play();
  if (hint) hint.style.display = "none";
}, { once: true });
