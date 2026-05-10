const canvas = document.querySelector(".sparkle-canvas");
const context = canvas.getContext("2d");
const wishButton = document.querySelector(".wish-button");
const imageNodes = document.querySelectorAll("img");

let width = 0;
let height = 0;
let sparkles = [];

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function makeSparkle() {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    size: 1 + Math.random() * 2.8,
    speed: 0.12 + Math.random() * 0.34,
    alpha: 0.18 + Math.random() * 0.55,
    color: ["#f58aa6", "#ffb06f", "#94e2c7", "#f5d36c"][Math.floor(Math.random() * 4)]
  };
}

function resetSparkles() {
  const total = Math.min(95, Math.floor((width * height) / 14000));
  sparkles = Array.from({ length: total }, makeSparkle);
}

function drawSparkles() {
  context.clearRect(0, 0, width, height);

  for (const sparkle of sparkles) {
    context.globalAlpha = sparkle.alpha;
    context.fillStyle = sparkle.color;
    context.beginPath();
    context.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2);
    context.fill();

    sparkle.y += sparkle.speed;
    sparkle.x += Math.sin(sparkle.y * 0.01) * 0.08;

    if (sparkle.y > height + 8) {
      sparkle.y = -8;
      sparkle.x = Math.random() * width;
    }
  }

  context.globalAlpha = 1;
  requestAnimationFrame(drawSparkles);
}

function releaseWish() {
  const rect = wishButton.getBoundingClientRect();
  const originX = rect.left + rect.width / 2;
  const originY = rect.top + rect.height / 2;
  const colors = ["#f58aa6", "#ffb06f", "#94e2c7", "#f5d36c"];

  for (let i = 0; i < 22; i += 1) {
    const dot = document.createElement("span");
    const angle = (Math.PI * 2 * i) / 22;
    const distance = 70 + Math.random() * 95;

    dot.className = "wish-burst";
    dot.style.left = `${originX}px`;
    dot.style.top = `${originY}px`;
    dot.style.background = colors[i % colors.length];
    dot.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    dot.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    document.body.append(dot);
    dot.addEventListener("animationend", () => dot.remove(), { once: true });
  }
}

function replaceMissingImage(image) {
  const alt = image.alt || "Birthday photo";
  const fallback = document.createElement("div");
  fallback.className = "photo-fallback";
  fallback.textContent = alt;
  image.replaceWith(fallback);
}

imageNodes.forEach((image) => {
  image.addEventListener("error", () => replaceMissingImage(image), { once: true });
});

window.addEventListener("resize", () => {
  resizeCanvas();
  resetSparkles();
});

wishButton.addEventListener("click", releaseWish);

resizeCanvas();
resetSparkles();
drawSparkles();
