

// =========================
// TYPEWRITER ANIMATION
// =========================

const text = [
"Full Stack Developer",
"Cybersecurity Learner",
"AI Enthusiast",
"Tech Builder",
"Frontend Developer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

const typingElement = document.querySelector(".typing");

if(!typingElement) return;

current = text[i];

if(isDeleting){
j--;
}else{
j++;
}

typingElement.innerHTML =
current.substring(0,j) + '<span class="cursor">|</span>';

if(!isDeleting && j === current.length){

isDeleting = true;

setTimeout(type,1200);

return;
}

if(isDeleting && j === 0){

isDeleting = false;

i = (i + 1) % text.length;

}

setTimeout(type,isDeleting ? 60 : 110);

}

type();

// =========================
// HEADER SCROLL EFFECT
// =========================

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(!header) return;

if(window.scrollY > 50){

header.style.background = "rgba(5,5,15,0.85)";
header.style.boxShadow = "0 0 30px rgba(0,0,0,0.4)";

}else{

header.style.background = "rgba(10,10,20,0.55)";
header.style.boxShadow = "0 0 25px rgba(0,0,0,0.25)";

}

});

// =========================
// SCROLL REVEAL
// =========================

const observer = new IntersectionObserver((entries) => {

entries.forEach((entry) => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

const hiddenElements = document.querySelectorAll(
".about-box, .skill-card, .project-card, .cert-card, .contact-card, .stat-box"
);

hiddenElements.forEach((el) => {
observer.observe(el);
});

// =========================
// CURSOR GLOW
// =========================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

if(glow){

glow.style.left = e.clientX + "px";
glow.style.top = e.clientY + "px";

}

});

// =========================
// TOP BUTTON
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(!topBtn) return;

if(window.scrollY > 400){

topBtn.classList.add("show-top");

}else{

topBtn.classList.remove("show-top");

}

});

if(topBtn){

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let currentSection = "";

sections.forEach((section)=>{

const sectionTop = section.offsetTop - 150;

if(window.scrollY >= sectionTop){

currentSection = section.getAttribute("id");

}

});

navLinks.forEach((link)=>{

link.classList.remove("active");

if(link.getAttribute("href") === "#" + currentSection){

link.classList.add("active");

}

});

});

// =========================
// LIVE CLOCK
// =========================

const liveClock = document.createElement("div");

liveClock.classList.add("live-clock");

document.body.appendChild(liveClock);

function updateClock(){

const now = new Date();

let time = now.toLocaleTimeString();

liveClock.innerHTML =
'<i class="fa-regular fa-clock"></i> ' + time;

}

setInterval(updateClock,1000);

updateClock();

// =========================
// CARD 3D EFFECT
// =========================

const cards = document.querySelectorAll(
".skill-card, .project-card, .cert-card"
);

cards.forEach((card)=>{

card.addEventListener("mousemove",(e)=>{

const rect = card.getBoundingClientRect();

const x = e.clientX - rect.left;
const y = e.clientY - rect.top;

const rotateY = ((x / rect.width) - 0.5) * 10;
const rotateX = ((y / rect.height) - 0.5) * -10;

card.style.transform =
`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform =
"perspective(1000px) rotateX(0) rotateY(0)";

});

});

// =========================
// RANDOM PARTICLES
// =========================

for(let i = 0; i < 25; i++){

const particle = document.createElement("span");

particle.classList.add("particle");

particle.style.left = Math.random() * 100 + "vw";

particle.style.animationDuration =
(Math.random() * 10 + 8) + "s";

particle.style.opacity = Math.random();

particle.style.width =
particle.style.height =
(Math.random() * 6 + 2) + "px";

document.body.appendChild(particle);

}

// =========================
// TITLE GLOW
// =========================

setInterval(()=>{

document.querySelectorAll(".title").forEach((title)=>{

title.style.textShadow =
`0 0 ${Math.random()*25}px rgba(139,92,246,0.7)`;

});

},1200);

// =========================
// VISITOR GREETING
// =========================

const greeting = document.createElement("div");

greeting.classList.add("visitor-msg");

const hour = new Date().getHours();

let greetText = "Welcome";

if(hour < 12){

greetText = "Good Morning 👋";

}else if(hour < 18){

greetText = "Good Afternoon 🚀";

}else{

greetText = "Good Evening 🌙";

}

greeting.innerHTML = greetText;

document.body.appendChild(greeting);

setTimeout(()=>{

greeting.classList.add("hide-greeting");

},4000);

// =========================
// PROJECT CARD GLOW
// =========================

document.querySelectorAll(".project-card").forEach((card)=>{

card.addEventListener("mousemove",(e)=>{

const x = e.offsetX;
const y = e.offsetY;

card.style.background =
`radial-gradient(circle at ${x}px ${y}px,
rgba(139,92,246,0.25),
rgba(255,255,255,0.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background =
"rgba(255,255,255,0.06)";

});

});


function createClock() {
  const clock = document.createElement("div");
  clock.className = "live-timer";
  document.body.appendChild(clock);

  function update() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";

    // 24h → 12h conversion
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 ko 12 banana

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    clock.innerHTML =
      `<i class="fa-regular fa-clock"></i> ${hours}:${minutes}:${seconds} ${ampm}`;
  }

  update();
  setInterval(update, 1000);
}

window.addEventListener("load", createClock);

const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    toggleBtn.innerHTML = "☀️";
  } else {
    toggleBtn.innerHTML = "🌙";
  }
});