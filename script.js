document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll('.home');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1
  });

  reveals.forEach(el => observer.observe(el));
});


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
  );
}


function revealOnScroll() {
  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((element) => {
      if (isInViewport(element)) {
          element.classList.add('show');
      }
  });
}


window.addEventListener('scroll', revealOnScroll);


window.addEventListener('load', revealOnScroll);



