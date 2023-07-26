document.addEventListener("DOMContentLoaded", function () {
    // Intersection Observer to show elements with animation when scrolling down
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, { threshold: 0.5 });
  
    const animatedElements = document.querySelectorAll(".about, .missions");
    animatedElements.forEach((el) => observer.observe(el));
  });
  
