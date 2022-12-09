const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a0fc9638a5msh20831abe21a6647p133736jsn380ceab117ee",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
