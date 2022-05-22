const buttonTexts = "789/456*123-0.+";
const buttonsContainer = document.getElementById("buttons");
const btnClasses = "py-4 border bg-black text-white";

// render btns
buttonTexts.split("").forEach((text) => {
  const button = document.createElement("button");
  button.innerText = text;
  button.className = btnClasses;
  buttonsContainer.appendChild(button);
});

// if btns are clicked
const createdButtons = Array.from(document.getElementsByClassName(btnClasses));
const contentBox = document.getElementById("content");

createdButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (contentBox.innerText === "Error!") {
      contentBox.innerText = e.target.innerText;
    } else {
      contentBox.innerText += e.target.innerText;
    }
  });
});

// if clear btn is clicked
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
  contentBox.innerText = "";
});

// if equal btn is clicked
const equalBtn = document.getElementById("equal-btn");
equalBtn.addEventListener("click", () => {
  try {
    contentBox.innerText = eval(contentBox.innerText);
  } catch {
    contentBox.innerText = "Error!";
  }
});
