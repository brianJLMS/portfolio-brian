import hamburgerMenu from "./hamburger.js";
import contactFormValidations from "./form_validation.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu("hamburger", ".hdr", ".ulist__link", "is-active", ".content");
  contactFormValidations();
});
