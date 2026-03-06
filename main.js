// Navbar scroll
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('navbar--scrolled');
      navbar.classList.remove('navbar--transparent');
    } else {
      navbar.classList.remove('navbar--scrolled');
      if (document.body.classList.contains('home')) {
        navbar.classList.add('navbar--transparent');
      }
    }
  });
}

// Hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

// Flash auto-dismiss
setTimeout(() => {
  document.querySelectorAll('.flash').forEach(f => {
    f.style.transition = 'opacity .4s';
    f.style.opacity = '0';
    setTimeout(() => f.remove(), 400);
  });
}, 4500);
