window.addEventListener("DOMContentLoaded", () => {

  function validate(email) {
    const regular = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regular.test(email.toLowerCase());
  }

  function validateEmail() {
    const inputField = document.querySelectorAll("[data-verification]");

    if (inputField.length) {
      inputField.forEach(elem => {
        elem.addEventListener("change", () => {
          let value = elem.value.trim();

          if (elem.classList.contains("validate-error")) {
            elem.classList.remove("validate-error");
          } else if (elem.classList.contains("validate-true")) {
            elem.classList.remove("validate-true");
          }

          if (!validate(value) && value.length > 0) {
            elem.classList.add("validate-error")
          }
          if (validate(value)) {
            elem.classList.add("validate-true")
          }
        })
      })
    }
  }

  validateEmail()
})
