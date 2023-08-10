const counterUp = window.counterUp.default;

const callback = (entries) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (entry.isIntersecting) {
      counterUp(el, {
        duration: 1500,
        delay: 16,
      });
    }
  });
};

const IO = new IntersectionObserver(callback, { threshold: 1 });

const el = document.querySelectorAll('.js-stat-row-counter');
el.forEach((element) => IO.observe(element));

// IO.observe( el )
