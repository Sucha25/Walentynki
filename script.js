document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const photoInput = document.getElementById("photoInput");
  const photoSlot = document.querySelector(".photo-slot");

  yesButton.addEventListener("click", () => {
    alert("Hurra! 🥰 Nie mogę się doczekać naszych wspólnych walentynek!");
  });

  noButton.addEventListener("click", () => {
    alert("😿 Oh nie... Ale mam nadzieję, że zmienisz zdanie!");
  });

  photoInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        photoSlot.style.backgroundImage = `url('${e.target.result}')`;
        photoSlot.style.backgroundSize = "cover";
        photoSlot.style.backgroundPosition = "center";
        photoSlot.textContent = "";
      };
      reader.readAsDataURL(file);
    }
  });
});
