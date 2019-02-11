axios({
  method: "get",
  url:
    "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=json&lang=en"
}).then(response => {
  document.querySelector(".quote").textContent = response.data.quoteText;
});
