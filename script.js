<script>
  const contactForm = document.getElementById("contactForm");
  const sendButton = document.getElementById("sendButton");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      sendButton.disabled = true;
      sendButton.innerText = "Sending...";

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(
          "https://api.web3forms.com/submit",
          {
            method: "POST",
            body: formData
          }
        );

        const result = await response.json();

        if (result.success) {
          window.location.href = "success.html";
        } else {
          alert("Message could not be sent. Please try again.");

          sendButton.disabled = false;
          sendButton.innerText = "Send Message ↗";
        }

      } catch (error) {
        console.error("Form Error:", error);

        alert("Something went wrong. Please check your internet connection.");

        sendButton.disabled = false;
        sendButton.innerText = "Send Message ↗";
      }
    });
  }
</script>