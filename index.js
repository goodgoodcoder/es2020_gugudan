const btn = document.querySelector("#click");
const result = document.querySelector("#result");

function gugudan() {
  const input1 = document.querySelector("#first").value;
  const input2 = document.querySelector("#second").value;
  if (input1 && input2) {
    result.innerText = `${input1 * input2}`;
  } else {
    alert("Input the number!");
  }
}

function init() {
  btn.addEventListener("click", gugudan);
}
init();
