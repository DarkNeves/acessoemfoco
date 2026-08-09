const metrics = `
  <div class="hero-metric"><span>3</span><small>páginas analisadas</small></div>
  <div class="hero-metric metric-second"><span>4</span><small>pilares avaliados</small></div>`;

// Ilustração original do farol usada no hero.
export const HeroLighthouse = `
  <div class="hero-lighthouse-component" data-hero-component="lighthouse">
    <div class="lighthouse-mark">
      <span class="beam beam-one"></span><span class="beam beam-two"></span>
      <span class="light"></span><span class="tower"></span><span class="base"></span>
    </div>
    ${metrics}
  </div>`;

export function mountHeroVisual() {
  const container = document.querySelector("[data-hero-visual]");
  if (!container) return;
  container.innerHTML = HeroLighthouse;
}
