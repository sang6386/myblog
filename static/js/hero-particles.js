const canvas = document.getElementById("hero-canvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Tạo particle
for(let i=0;i<100;i++){
  particles.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    r: Math.random()*2+1,
    dx: (Math.random()-0.5)*2,
    dy: (Math.random()-0.5)*2
  });
}

function animateParticles() {
  // Gradient nền chuyển động
  const gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
  const t = Date.now()*0.002;
  gradient.addColorStop(0, `hsl(${(t*40)%360}, 80%, 30%)`);
  gradient.addColorStop(1, `hsl(${(t*80)%360}, 80%, 50%)`);
  ctx.fillStyle = gradient;
  ctx.fillRect(0,0,canvas.width,canvas.height);

  // Vẽ particle
  particles.forEach(p=>{
    p.x+=p.dx; p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;

    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = 'rgba(0,246,255,0.8)';
    ctx.fill();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();
