function go(id) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');

  if (id === 'final') {
    startFireworks();
  }
}

function flip(card) {
  card.classList.toggle('flipped');
}

const letterLines = [
  "Hey love 💗",
  "Thank you… for staying even after being blamed.",
  "Even after misunderstandings, we chose love.",
  "From 1 year to a whole lifetime.",
  "Thank you for listening to me, for being my therapist, my safe place.",
  "For never judging my bakchodis and kand.",
  "I’m sorry if I was selfish sometimes or made you insecure.",
  "I never wanted that, I swear.",
  "You made me feel beautiful when I never felt I was.",
  "Living with you is a dream I never want to wake up from."
];

let i = 0;
const textEl = document.getElementById("letterText");

function typeLetter() {
  if (i < letterLines.length) {
    textEl.innerHTML += letterLines[i] + "<br><br>";
    i++;
    setTimeout(typeLetter, 1200);
  }
}

document.getElementById("letter").addEventListener("click", typeLetter, { once: true });

function startFireworks() {
  const canvas = document.getElementById("fireworks");
  canvas.style.display = "block";
  const ctx = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;

  setInterval(() => {
    ctx.fillStyle = `hsl(${Math.random()*360},100%,70%)`;
    ctx.beginPath();
    ctx.arc(Math.random()*canvas.width, Math.random()*canvas.height, 3, 0, Math.PI*2);
    ctx.fill();
  }, 50);
}
