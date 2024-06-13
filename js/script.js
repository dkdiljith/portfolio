document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const errorElement = document.querySelector(".error-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document
      .querySelector('textarea[name="message"]')
      .value.trim();

    errorElement.innerHTML = "";

    if (name === "" || email === "" || subject === "" || message === "") {
      errorElement.textContent = "All fields are required";
      return;
    }

    form.submit();
  });
});
