const form = document.querySelector("form");
const text = document.querySelectorAll("input");

function handleSubmit(e) {
  for (let key = 0; key < text.length; key++) {
    value = text[key].value;
    if (value.length < 3) {
      e.preventDefault();
      alert("must be at least 3 characters");
      throw new Error("Invalid input");
    } else continue;
  }
  value = "";
  console.log(text.length);
  /*   When using for key in text throws and additional value

  for (let key in text) {
    value = text[key].value;
    console.log(text[key]);
    if (value.length < 3) {
      alert("must be at least 3 characters");
      throw new Error("Invalid input");
    } else continue;
  }

*/ // f entries(){native code} is the additional value
  form.removeEventListener("submit", handleSubmit);
}
if (form != null) {
  form.addEventListener("submit", handleSubmit);
}
