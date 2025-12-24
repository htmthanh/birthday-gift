const isMobile = window.innerWidth < 768;

const birthdayText = "HAPPY BIRTHDAY ANH IUUUU 🎂💙";

const messages = [
  birthdayText, birthdayText, birthdayText,
  "Anh đã rất nổ lực rồi ✨",
  "Anh đã làm rất tốt rồi ✨",
  "Tuổi mới thành công 💫",
  "Tuổi mới thật nhiều sức khỏe 💙",
  "Tuổi mới yêu em hơn nha 💙",
  "LOVE YOU TO THE MOON AND BACK 🌙",
  "YOU MAKE MY WORLD BRIGHTER ⭐",
  "FOREVER STARTS WITH YOU 💍",
  "I'M ALWAYS BY YOUR SIDE 💙",
  "Cười nhiều lênn",
  "Hãy luôn tin tưởng mình 💍",
  "EVERYTHING WILL BE OKAY 💍",
  "Thương anhhhh 💙",
  "Em yêu anhhh 💙",
  "Luôn bên anhhh 💙",
  "Bé An yêu anhhh 💙",
];


/* ===== QUESTION LOGIC ===== */
const screen = document.getElementById("question-screen");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noText = document.getElementById("no-text");
const music = document.getElementById("music");

noBtn.onclick = () => {
  noText.style.opacity = 1;
  setTimeout(() => noText.style.opacity = 0, 1200);
};

yesBtn.onclick = () => {
  screen.style.opacity = 0;
  setTimeout(() => screen.remove(), 600);
  music.play();
  startEffect();
};



const stickers = ["💙","✨","🌙","⭐","💫"];

const images = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg"
];

/* ===== FALLING ===== */
function createFallingItem() {
  const el = document.createElement("div");
  el.className = "fall";

  const depth = Math.random();
  const scale = (isMobile ? 0.55 : 0.7) + depth * 0.6;
  const duration = 7 + (1 - depth) * (isMobile ? 6 : 8);

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
  el.style.transform = `scale(${scale})`;

  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration * 1000);
}

/* ===== STARS ===== */
function createStars() {
  const count = isMobile ? 60 : 120;
  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animationDelay = Math.random() * 3 + "s";
    document.body.appendChild(star);
  }
}

/* ===== START ===== */
function startEffect() {
  createStars();
  setInterval(createFallingItem, isMobile ? 520 : 300);
}
