document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const photoInput = document.getElementById("photoInput");
  const photoSlot = document.querySelector(".photo-slot");
  const responseDiv = document.getElementById("response");

  yesButton.addEventListener("click", () => {
    // Pokazanie szczęśliwego kota
    responseDiv.innerHTML = `
      <img src="happy-cat.gif" alt="Szczęśliwy kot">
      <p>Hurra! 🥰 Czeka nas mnóstwo wspaniałych chwil razem!</p>
    `;
    responseDiv.classList.remove("hidden");
  });

  noButton.addEventListener("click", () => {
    // Pokazanie smutnego kota
    responseDiv.innerHTML = `
      <img src="sad-cat.gif" alt="Smutny kot">
      <p>Oh nie... 😿 Mam nadzieję, że zmienisz zdanie!</p>
    `;
    responseDiv.classList.remove("hidden");
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
