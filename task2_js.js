function alpha_order() {
  str = document.getElementById("word").value;
  lettersOnly = str.replace(/[^a-zA-Z]/g, "");
  document.getElementById("result").innerHTML = lettersOnly
    .split("")
    .sort()
    .join("");
}
