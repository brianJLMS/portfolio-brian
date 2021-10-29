import hamburgerMenu from "./hamburger.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu("hamburger", ".hdr", ".ulist__link", "is-active");
});
