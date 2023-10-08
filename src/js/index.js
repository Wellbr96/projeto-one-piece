const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    deselectButton();
    button.classList.add("selected");

    deselectCharacter();
    characters[index].classList.add("selected");
  });
});

function deselectCharacter() {
  const selectedCharacter = document.querySelector(".character.selected");
  selectedCharacter.classList.remove("selected");
};

function deselectButton() {
  const buttonSelected = document.querySelector(".button.selected");
  buttonSelected.classList.remove("selected");
};

