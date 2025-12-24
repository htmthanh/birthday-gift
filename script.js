/* ===== TEXT ===== */
const messages = [
  "HAPPY BIRTHDAY ANH IUUUU 💙",
  "YOU ARE MY FAVORITE PERSON ✨",
  "MY HEART IS ALWAYS YOURS 💫",
  "LOVE YOU TO THE MOON AND BACK 🌙",
  "WITH YOU, EVERYTHING FEELS RIGHT",
  "YOU MAKE MY WORLD BRIGHTER ⭐",
  "FOREVER STARTS WITH YOU 💍",
  "MY SAFE PLACE, MY LOVE 💙",
  "I'M SO PROUD OF YOU 🔥"
];

/* ===== STICKERS ===== */
const stickers = ["💙","✨","🌙","⭐","🪐","🔥","💫"];

/* ===== IMAGES ===== */
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

  const type = Math.random();

  if (type < 0.5) {
    const t = document.createElement("div");
    t.className = "text";
    t.innerText = messages[Math.floor(Math.random() * messages.length)];
    el.appendChild(t);

  } else if (type < 0.75) {
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

  const duration = Math.random() * 5 + 9; // 9–14s
  const size = Math.random() * 0.5 + 0.9;

  el.style.left = Math.random() * 95 + "vw";
  el.style.animationDuration = duration + "s";
  el.style.transform = `scale(${size})`;

  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

/* 🔥 DÀY HƠN */
setInterval(createFallingItem, 240);

/* ⭐ STARS */
for (let i = 0; i < 180; i++) {
  const star = document.createElement("div");
  star.className = "star";
  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";
  star.style.animationDelay = Math.random() * 3 + "s";
  document.body.appendChild(star);
}

/* 🎵 CLICK TO PLAY MUSIC */
const music = document.getElementById("music");
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });
