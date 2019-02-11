axios({
  method: "get",
  url: `https://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&APPID=e33801499993a423831b424478d9abd4`
})
  .then(Response => {
    console.log(Response.data.weather[0].icon);

    document.querySelector(".temp").textContent =
      " " + Response.data.main.temp + "℃";
    let img = document.createElement("IMG");
    img.setAttribute(
      "src",
      `https://openweathermap.org/img/w/${Response.data.weather[0].icon}.png`
    );
    let icon = document.querySelector(".icon").append(img);
  })
  .catch(Error => console.log(Error));

// :rain_cloud::thunder_cloud_and_rain:
