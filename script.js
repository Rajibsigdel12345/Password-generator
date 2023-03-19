let sliderValue = document.getElementById("sliderValue");
sliderValue.innerHTML = document.getElementById("myRange").value;
// Add event listeners to the slider and the +/- buttons
document.getElementById("myRange").addEventListener("input", () => {
  sliderValue.innerHTML = document.getElementById("myRange").value;
});

document.getElementById("minus").addEventListener("click", () => {
  document.getElementById("myRange").stepDown();
  sliderValue.innerHTML = document.getElementById("myRange").value;
});

document.getElementById("plus").addEventListener("click", () => {
  document.getElementById("myRange").stepUp();
  sliderValue.innerHTML = document.getElementById("myRange").value;
});

function generatePassword(useUppercase, useLowercase, useNumbers, useSymbols) {
  let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numberChars = "0123456789";
  let symbolChars = "!@#$%^&*()_-+={}[];:'\"\\|<>,.?/~`";

  let allowedChars = "";
  if (useLowercase) {
    allowedChars += lowercaseChars;
  }
  if (useUppercase) {
    allowedChars += uppercaseChars;
  }
  if (useNumbers) {
    allowedChars += numberChars;
  }
  if (useSymbols) {
    allowedChars += symbolChars;
  }

  // let password = "";
  // for (let i = 0; i < length; i++) {
  //   password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
  // }
  return allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
}

let checkbox = document.querySelectorAll('.form-check-input')
let button = document.getElementById("button");
let slider = document.getElementById("myRange");
let output = document.getElementById("sliderValue");
let content = document.getElementById("password")
// output.innerHTML = slider.value;
// slider.oninput = function () {
//   output.innerHTML = this.value;
// }

button.onclick = () => {
  content.value = ''
  let count = 0
  let start = setInterval(() => {
    content.value += generatePassword(checkbox[0].checked, checkbox[1].checked, checkbox[2].checked, checkbox[3].checked)
    count++
    if (count == output.innerHTML) {
      clearInterval(start)
    }
  }, 5)
  slider.onchange = function () {
    let value1 = output.innerHTML
    count = 0;
    content.value = ''
    let start = setInterval(() => {
      content.value += generatePassword(checkbox[0].checked, checkbox[1].checked, checkbox[2].checked, checkbox[3].checked)
      count++
      if (count == value1) {
        clearInterval(start)
      }
    }, 5)
  }
}