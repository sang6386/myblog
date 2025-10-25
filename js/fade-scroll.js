const faders = document.querySelectorAll('.fade-scroll');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });
faders.forEach(fader => observer.observe(fader));
