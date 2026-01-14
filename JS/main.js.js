(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      this
    ).then(() => {
      alert("Thank you for contacting Rabia Bholai. Our team will be in touch.");
      form.reset();
    }, () => {
      alert("Something went wrong. Please try again later.");
    });
  });
}
