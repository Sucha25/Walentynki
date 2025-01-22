document.addEventListener("DOMContentLoaded", () => {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const photoInput = document.getElementById("photoInput");
  const photoSlot = document.querySelector(".photo-slot");
  const responseDiv = document.getElementById("response");

  yesButton.addEventListener("click", () => {
    // Pokazanie szczęśliwego kota
    responseDiv.innerHTML = `
      <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGh1d3RkNmV5enU3anJ2NnRzbmx1NTdlbXE4ejJmYTdlMGRzeXo1YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ToCRja2miF3Xi/giphy.gif" alt="Szczęśliwy kot">
      <p>Strasznie mnie to cieszyyyyy 🥰 Kocham Cię!</p>
    `;
    responseDiv.classList.remove("hidden");
  });

  noButton.addEventListener("click", () => {
    // Pokazanie smutnego kota
    responseDiv.innerHTML = `
      <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2o4ZndnMHN3NnlocDIzZTI1amRkOWdybXowbDIxb2Q1Y2J0YTRxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wfS4vDyVsASQygl4mN/giphy.gif" alt="Smutny kot">
      <p>I po co to klikasz? Nie ma takiej możliwości!!</p>
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
