let cpassword="vauLt"
document.getElementById("button").onclick = function () {
  let password = document.getElementById("password").value;
  if (password === cpassword) {
    window.location.href="vault.html";
  }
};
document.addEventListener("keypress",e=>{
if(e.key="Enter"){
  let password = document.getElementById("password").value;
  if (password === cpassword) {
    window.location.href="vault.html";
  }
}
})