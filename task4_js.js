function showDate() {
  // Get the current date and time.
  const date = new Date();

  // Format the date.
  const formattedDate = date.toLocaleDateString("en-US", {
    dateStyle: "long",
  });

  // Display the date in the result span.
  document.getElementById("result").innerHTML = formattedDate;
}

function showTime() {
  // Get the current date and time.
  const date = new Date();

  // Format the time.
  const formattedTime = date.toLocaleTimeString("en-US", {
    timeStyle: "long",
  });

  // Display the time in the result span.
  document.getElementById("result").innerHTML = formattedTime;
}
