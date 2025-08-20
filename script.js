// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = { threshold: 0.2 };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Animate skill bars
const bars = document.querySelectorAll(".fill");

const barObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const targetBar = entry.target;
    const finalWidth = targetBar.style.width;
    targetBar.style.width = "0"; // reset
    setTimeout(() => {
      targetBar.style.width = finalWidth; // animate
    }, 100);
    observer.unobserve(targetBar);
  });
}, { threshold: 0.3 });

bars.forEach(bar => {
  barObserver.observe(bar);
});
