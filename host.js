const roomCode = document.getElementById("room-code");

roomCode.onclick = function() {
  document.execCommand("copy");
};

roomCode.addEventListener("copy", function(event) {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", roomCode.textContent);
    console.log(event.clipboardData.getData("text"));
  }
});
