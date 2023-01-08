const groceries = document.querySelector(".groceries"),
  pencil = document.querySelector("#pencil"),
  allItems = document.querySelector("#allItems"),
  userInput = document.querySelector("#userInput");

pencil.addEventListener("click", () => {
  allItems.innerHTML = "";
});

userInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") addItem();
});

function addItem() {
  let h2 = document.createElement("h2");
  h2.innerHTML = "- " + userInput.value;
  h2.addEventListener("click", () => {
    h2.style.textDecoration = "line-through";
  });

  allItems.insertAdjacentElement("beforeend", h2);

  userInput.value = "";
}
