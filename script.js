// Smooth scroll when clicking nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 60,
        behavior: "smooth"
      });
    }
  });
});

// Simple image click alert (can upgrade to lightbox later)
document.querySelectorAll('.gallery img').forEach(img => {
  img.addEventListener('click', () => {
    alert(`You clicked on: ${img.alt}`);
  });
});
