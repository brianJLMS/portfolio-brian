const d = document;

export default function hamburgerMenu(
  hamburger,
  nav,
  navChild,
  navActive,
  content
) {
  const $hamburger = d.getElementById(hamburger),
    $nav = d.querySelector(nav),
    $content = d.querySelector(content);

  d.addEventListener("click", (e) => {
    if (
      e.target.matches(`#${hamburger}`) ||
      e.target.matches(`#${hamburger} *`)
    ) {
      $hamburger.classList.toggle("is-active");
      $nav.classList.toggle(navActive);
      $content.classList.toggle("is-active");
    }
    if (e.target.matches(navChild)) {
      $nav.classList.remove(navActive);
      $hamburger.classList.remove("is-active");
      $content.classList.toggle("is-active");
    }
  });
}
