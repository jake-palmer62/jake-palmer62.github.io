// Smooth scroll for navigation links
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
