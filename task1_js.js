function rev_num() {
  // Get the number from the input field.
  var num = document.getElementById("nums").value;

  // Convert the number to a string.
  var num_str = num.toString();

  // Split the string into an array of characters.
  var num_array = num_str.split("");

  // Reverse the array.
  num_array.reverse();

  // Join the array back into a string.
  var reversed_num = num_array.join("");

  // Convert the string back to a number.
  var reversed_num_int = parseInt(reversed_num);

  // Display the reversed number in the result span.
  document.getElementById("result").innerHTML = reversed_num_int;
}
