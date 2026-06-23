
// 🔐 ŞİFRE (BURADAN DEĞİŞTİR)
const REAL_PASSWORD = "11072004";

// LOGIN
function login() {
  const pass = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (pass === REAL_PASSWORD) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("app").classList.remove("hidden");
  } else {
    error.innerText = "❌ Hatalı şifre";
  }
}

// PAGE SWITCH
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function openGift(){

  document
  .getElementById("giftResult")
  .classList.add("show");

}

const audio = document.getElementById("audio");
const btn = document.getElementById("playBtn");

let isPlaying = false;

btn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    btn.textContent = "▶";
  } else {
    audio.play();
    btn.textContent = "⏸";
  }
  isPlaying = !isPlaying;
});

// PROGRESS BAR
audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

const cards = document.querySelectorAll(".msgCard");

function typeText(el, text, i = 0) {
  if (i < text.length) {
    el.innerHTML += text.charAt(i);
    setTimeout(() => typeText(el, text, i + 1), 35);
  }
}

// sırayla gelme + typing effect
cards.forEach((card, index) => {
  const text = card.getAttribute("data-text");
  const textEl = card.querySelector(".text");

  setTimeout(() => {
    typeText(textEl, text);
  }, index * 700);
});

function showPage(id){

  document
  .querySelectorAll(".page")
  .forEach(page =>
      page.classList.remove("active")
  );

  document
  .getElementById(id)
  .classList.add("active");

  document
  .querySelectorAll(".navMenu button")
  .forEach(btn =>
      btn.classList.remove("activeBtn")
  );

  event.currentTarget.classList.add("activeBtn");
}

