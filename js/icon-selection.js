
function selectIcon(elemento) {
   if(elemento.style.border != "solid red") {
      //document.getElementsByClassName("profile-img").style.border = "none";


      elemento.style.border = "solid red";

   }else {
      elemento.style.border = "none";
   }
}