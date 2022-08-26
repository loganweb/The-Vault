document.getElementById("button").onclick = function () {
  let password = document.getElementById("password").value;
  if (password === "vauLt") {
    document.write(
      '<link href="style.css" rel="stylesheet" />  <a href="vault.html">open vault</a>'
    );
  }
};
