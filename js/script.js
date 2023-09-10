// Nav
$(`.nav-link`).on(`click`, function() {
    $(`.nav-link`).removeClass(`active`);
    $(this).addClass(`active`);
});

// Achievement
$(document).ready(function(){
    $(document).on("click", ".achivement-item", function(){
      const src = $(this).attr("src");
      $(".modal-img").attr("src", src);
      const myModal = new bootstrap.Modal($('#gallery-modal'));
      myModal.show();
    });
});


// Contact
const scriptURL =
"https://script.google.com/macros/s/AKfycbxwgbwXTmBuloTX_5bbZpsKG6ZSVD_JdUlVAyAYqGx4RL52ICfBEs28mRM7z2OtVYBb/exec";
const form = document.forms["porto-contact-form"];
const btnSubmit = document.querySelector(".btn-submit");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
e.preventDefault();
// Ketika tombol submit diklik. Hilangkan tombol submit, munculkan tombol loading
btnLoading.classList.toggle("d-none");
btnSubmit.classList.toggle("d-none");
fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => {
    // Tampilkan tombol submit, hilangkan tombol loading
    btnLoading.classList.toggle("d-none");
    btnSubmit.classList.toggle("d-none");
    // Tampilkan alert
    myAlert.classList.toggle("d-none");
    // Reset form jika sudah berhasil sukses terkirim
    form.reset();
    console.log("Success!", response);
  })
  .catch((error) => console.error("Error!", error.message));
});
