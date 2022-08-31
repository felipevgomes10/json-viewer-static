(() => {
  const button = document.querySelector(".button");
  const textArea = document.querySelector(".textarea");

  const toastContainer = document.querySelector(".toast");
  const toastMessage = document.querySelector(".toast-message");
  const toastButton = document.querySelector(".toast-button");

  if (textArea.value) button.removeAttribute("disabled");
  else button.setAttribute("disabled", "true");

  textArea.addEventListener("input", (event) => {
    const {
      target: { value },
    } = event;
    if (value) button.removeAttribute("disabled");
    else button.setAttribute("disabled", "true");
  });

  button.addEventListener("click", (event) => {
    try {
      const textArea = document.querySelector(".textarea");
      window.open(`view-json?q=${JSON.stringify(JSON.parse(textArea.value))}`);
    } catch (error) {
      event.target.innerText = "INVALID JSON!";

      toastContainer.classList.add("error", "active");
      toastMessage.innerText = error.message;

      console.log(error);
      setTimeout(() => {
        button.innerText = "VIEW YOUR JSON";
      }, 2000 /* two seconds */);
    }
  });

  toastButton.addEventListener("click", () => {
    toastContainer.classList.remove("error", "active");
  });
})();
