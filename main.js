// axios({
//   method: "get",
//   url:
//     "https://api.unsplash.com/photos/random?client_id=9265adffcbb4d2fbc10f5a45bd5980d088415c68387cb173f18b26a021d4ad4f"
// })
//   .then(Response => {
//     document.querySelector("body").style.backgroundImage = `url('${
//       Response.data.urls.regular
//     }')`;
//     document.querySelector("body").style.backgroundSize = "cover";
//     document.querySelector("body").style.backgroundRepeat = "no-repeat";
//   })
//   .catch(Error => console.log("error", Error));

document.querySelector("body").style.backgroundImage =
  "url('https://picsum.photos/1920/1080/?random')";
document.querySelector("body").style.backgroundSize = "cover";
// document.querySelector("body").style.backgroundSize = "auto";
document.querySelector("body").style.backgroundRepeat = "no-repeat";
//   https://picsum.photos/1920/1080/?random
console.log("fff");
