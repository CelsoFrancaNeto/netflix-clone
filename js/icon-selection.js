document.getElementById("closeButton").addEventListener("click",closeAvatarsWindow);
document.getElementById("change-avatar-button").addEventListener("click",openAvatarsWindow);

function selectAvatar(elemento) {
   var avatars = document.getElementsByClassName("profile-img")

   if (elemento.style.border == "solid red") {

      elemento.style.border = "none";

   } else {

      for (i = 0; i < avatars.length; i++) {
         avatars[i].style.border = "none"
      }
      elemento.style.border = "solid red";
   }
}

function submitAvatar() {

   
   var icon = document.getElementById("icon-profile");
   console.log(icon)
   var avatars = document.getElementsByClassName("profile-img")

   for(i = 0; i < avatars.length ; i++)
      if(avatars[i].style.border == "solid red")
         icon.src= "img/profile03.png";
}

function closeAvatarsWindow() {
   document.getElementById("avatarsWindow").style.display = "none";
}

function openAvatarsWindow() {
   document.getElementById("avatarsWindow").style.display = "block";
}