const isMobile = window.innerWidth < 768;

const birthdayText = "HAPPY BIRTHDAY ANH IUUUU 🎂💙";

const messages = [
  birthdayText, birthdayText, birthdayText,
  "ANH ĐÃ RẤT NỔ LỰC RỒIII ✨",
  "TUỔI MỚI THÀNH CÔNGGG 💫",
  "CÓ THẬT NHIỀU SỨC KHỎE 💙",
  "CON ĐƯỜNG SẮP TỚI SẼ THUẬN LỢI VỚI CHÚNG TA 💙",
  "LOVE YOU TO THE MOON AND BACK 🌙",
  "YOU MAKE MY WORLD BRIGHTER ⭐",
  "FOREVER STARTS WITH YOU 💍",
  "I'M ALWAYS BY YOUR SIDE 💙",
  "CƯỜI NHIỀU LÊNNNNN",
  "HÃY LUÔN TIN TƯỞNG BẢN THÂN ANHHH 💍",
  "EVERYTHING WILL BE OKAY 💍",
  "THƯƠNG ANHHHHHHH 💙",
  "EM YÊU ANHHH 💙",
  "BÉ AN YÊU ANHHH 💙",
];

const stickers = ["💙","✨","🌙","⭐","🪐","💫"];

const images = [
  "img/img1.jpg",
  "img/img2.jpg",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg"
];

/* ===== QUESTION LOGIC ===== */
const question = document.getElementById("question");
const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const noText = document.getElementById("no-text");
const music = document.getElementById("music");
const hint = document.getElementById("music-hint");

function startShow() {
  question.style.opacity = 0;
  setTimeout(() => question.remove(), 600);
  music.play();
  hint.style.display = "none";
  initStars();
  startEffects();
}

yesBtn.onclick = startShow;

noBtn.onclick = () => {
  noText.style.opacity = 1;
  setTimeout(startShow, 1200);
};

function createFalling() {
  const el = document.createElement("div");
  el.className = "fall";

  const depth = Math.random();
  const scale = (isMobile ? 0.55 : 0.75) + depth * 0.8;
  const duration = 8 + (1 - depth) * (isMobile ? 6 : 9);

  const type = Math.random();
  if (type < 0.45) {
    const t = document.createElement("div");
    t.className = "text";
    t.innerText = messages[Math.floor(Math.random()*messages.length)];
    el.appendChild(t);
  } else if (type < 0.65) {
    const s = document.createElement("div");
    s.className = "sticker";
    s.innerText = stickers[Math.floor(Math.random()*stickers.length)];
    el.appendChild(s);
  } else {
    const img = document.createElement("img");
    img.className = "image";
    img.src = images[Math.floor(Math.random()*images.length)];
    el.appendChild(img);
  }

  el.style.left = Math.random()*90 + "vw";
  el.style.animationDuration = duration + "s";
  el.style.transform += ` scale(${scale})`;

  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration*1000);
}

function createMeteor() {
  if (isMobile && Math.random() > 0.5) return;
  const m = document.createElement("div");
  m.className = "meteor";
  document.body.appendChild(m);
  setTimeout(() => m.remove(), 1400);
}

function startEffects() {
  setInterval(createFalling, isMobile ? 750 : 420);
  setInterval(createMeteor, 6000);
}

function initStars() {
  const count = isMobile ? 60 : 120;
  for (let i=0;i<count;i++) {
    const s = document.createElement("div");
    s.className = "star";
    s.style.left = Math.random()*100 + "vw";
    s.style.top = Math.random()*100 + "vh";
    s.style.animationDelay = Math.random()*3 + "s";
    document.body.appendChild(s);
  }
}
