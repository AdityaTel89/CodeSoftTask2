document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  const sections = document.querySelectorAll("section");
  const options = {
    root: null,
    threshold: 0.3,
    rootMargin: "0px"
  };

  const sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeIn");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});

const fadeInElements = document.querySelectorAll(".fadeIn");
const fadeInObserver = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null,
  threshold: 0.3
});

fadeInElements.forEach(element => {
  fadeInObserver.observe(element);
});


document.addEventListener("DOMContentLoaded", function () {
  const homeButton = document.querySelector('.home-btn');
  homeButton.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    targetSection.scrollIntoView({
      behavior: "smooth"
    });
  });

  const sections = document.querySelectorAll(".center-content");
  const options = {
    root: null,
    threshold: 0.2,
    rootMargin: "0px"
  };

  const sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});
