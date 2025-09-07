(function(){
  const layers = document.querySelectorAll('[data-parallax]');
  if (!layers.length) return;

  let ticking = false;
  function onScroll(){
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const t = window.scrollY || 0;
      layers.forEach(el => {
        const factor = parseFloat(el.dataset.parallax) || 0.08; // slow by default
        el.style.transform = `translateY(${t * factor}px)`;
      });
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
})();
