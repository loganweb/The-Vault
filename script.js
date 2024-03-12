let cpassword="vauLt"
let c=0
document.getElementById("button").onclick = function () {
  let password = document.getElementById("password").value;
  if (password === cpassword) {
    window.location.href="vault.html";
  }else{
    c++
    document.getElementById("a").value=c
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