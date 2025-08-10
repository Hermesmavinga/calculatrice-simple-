let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Utilisez trim() pour supprimer les espaces avant/après
    let buttonValue = button.textContent.trim();

    if (buttonValue === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Erreur";
      }
    } else if (buttonValue === "C") {
      display.value = "";
    } else {
      // Ajoutez seulement si ce n'est pas un espace
      if (buttonValue !== "") {
        display.value += buttonValue;
      }
    }
  });
});
