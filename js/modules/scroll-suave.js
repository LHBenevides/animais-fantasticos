// Scroll suave link interno
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  function scrollTosection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    // Forma Não Nativa
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior:'smooth',
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollTosection);
  });
}
