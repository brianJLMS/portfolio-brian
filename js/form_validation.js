const d = document;

export default function contactFormValidations() {
  const $form = d.querySelector(".contact__form"),
    $inputs = d.querySelectorAll(".contact__form [required]");

  $inputs.forEach((input) => {
    const $paragraph = d.createElement("p");
    $paragraph.id = input.name;
    $paragraph.textContent = input.title;
    $paragraph.classList.add("contact__form-error", "none");
    input.insertAdjacentElement("afterend", $paragraph);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".contact__form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  d.addEventListener("submit", (e) => {
    const $loader = d.querySelector(".contact__form-loader"),
      $response = d.querySelector(".contact__form-response");

    $loader.classList.remove("none");

    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      setTimeout(() => {
        $response.classList.add("none");
      }, 3000);
    }, 3000);
  });
}
