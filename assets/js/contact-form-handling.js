// Contact Form Handling
const scriptURL = "https://script.google.com/macros/s/AKfycbx2GV4H8gTxgKuv7Ef7lCz5_jk82UBONFf-St2tDyY6Tqu4OFPFp-hNm8gdS3QWdIXdBQ/exec";
const form = document.forms["contact-form"];
const btnSend = document.querySelector(".btn-send");
const btnLoad = document.querySelector(".btn-load");
const alertSuccess = document.querySelector(".alert-success");
const alertDanger = document.querySelector(".alert-danger");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Hide btnSend and Display btnLoad
  btnSend.classList.toggle("d-none");
  btnLoad.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // Hide btnLoad and Display btnSend
      btnSend.classList.toggle("d-none");
      btnLoad.classList.toggle("d-none");

      // Display Alert
      alertSuccess.classList.toggle("d-none");

      form.reset();
      // Hide Alert
      setTimeout(() => {
        alertSuccess.classList.toggle("d-none");
      }, 3000);
    })
    .catch((error) => {
      // Hide btnLoad and Display btnSend
      btnSend.classList.toggle("d-none");
      btnLoad.classList.toggle("d-none");

      // Display Alert
      alertDanger.classList.toggle("d-none");

      form.reset();
      // Hide Alert
      setTimeout(() => {
        alertDanger.classList.toggle("d-none");
      }, 3000);
    });
});
