import { copyAlert } from "./alerts.js";
const colorInput = document.getElementById("userInput");
const type = document.getElementById("schemeType");
const colorBox = document.querySelector(".color-box");
let colorArr = [];

// using this as a placeholder when the page loads
fetch(
  "https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=analogic&count=6"
)
  .then((res) => res.json())
  .then((data) => {
    colorArr = data.colors.map((color) => {
      return color.hex.value;
    });
    renderColors();
  });

// added event listeners
document.body.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.id === "getBtn") {
    fetch(
      `https://www.thecolorapi.com/scheme?hex=${colorInput.value.replace(
        "#",
        ""
      )}&format=json&mode=${type.value}&count=6`
    )
      .then((res) => res.json())
      .then((data) => {
        // pushed all color scheme to my array to render later
        colorArr = data.colors.map((color) => {
          return color.hex.value;
        });
        renderColors();
      });
  }

  // copy to clipboard
  if (e.target.dataset.color) {
    navigator.clipboard.writeText(e.target.dataset.color);
    Toastify(copyAlert).showToast();
  }
});

function renderColors() {
  let html = "";

  colorArr.map((color) => {
    html += `<div style="background-color:${color};" class="colors"><p data-color="${color}" class="color-value">${color}</p></div>`;
  });

  colorBox.innerHTML = html;
}
