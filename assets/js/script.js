// var myNum = "7be49e90f87d7173d0db46577a28b1ff";
// var form = document.getElementById("search");
// var currentConditionsHeaderEl = document.querySelector("#current-weather h3");
// var currentIconEl = document.querySelector("#current-icon");
// var currentTempEl = document.getElementById("current-temp");
// var currentWindEl = document.getElementById("current-wind");
// var currentHumidityEl = document.getElementById("current-humidity");
// var currentUvEl = document.getElementById("current-uv-index");
// var fiveDayForecastEl = document.getElementById("five-day-forecast");
// var searchListEl = document.querySelector(".search-list");
var characterName = "";
// var searchHistory = [];
var imbd = {};

// var handleNewSearch = function (e) {
//   e.preventDefault();

//   searchHistory.push(e.target[0].value);
//   displaySearchHistory();
//   localStorage.setItem("storedSearchHistory", JSON.stringify(searchHistory));

//   fetchData(e.target[0].value);

//   e.target[0].value = "";
// };

// var handlePreviousSearch = function (e) {
//   fetchData(e.target.textContent);
// };

var fetchData = function (characterName) {
  var apiUrl = `https://imdb-api.com/en/API/SearchKeyword/k_c7pld9ns/{expression}`;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (character) {
      characterName = character[0].name;
      //   var cityLattitude = city[0].lat;
      //   var cityLongitude = city[0].lon;
      fetch(`https://imdb-api.com/en/API/SearchKeyword/k_c7pld9ns/{expression}`)
        .then(function (imbdResponse) {
          return imbdResponse.json();
        })
        .then(function (imbd) {
          displayFetchedContent(imbd);
        });
    });
  // .catch(function () {
  //   console.log("Please Enter a Valid City.");
  // });
};

// var displayFetchedContent = function (fetchedWeatherConditions) {
//   currentConditionsHeaderEl.textContent =
//     theCity + moment().format(" (MM/DD/YYYY) ");
//   setCurrentConditionsDisplay(fetchedWeatherConditions);
//   buildFiveDayForecast(fetchedWeatherConditions);
// };

// var setCurrentConditionsDisplay = function (weatherConditions) {
//   currentIconEl.setAttribute(
//     "src",
//     "https://openweathermap.org/img/wn/" +
//       weatherConditions.current.weather[0].icon +
//       ".png"
//   );
//   currentTempEl.textContent = weatherConditions.current.temp;
//   currentWindEl.textContent = weatherConditions.current.wind_speed;
//   currentHumidityEl.textContent = weatherConditions.current.humidity;
//   // TODO Color code UV index
//   currentUvEl.textContent = weatherConditions.current.uvi;
// };

// var buildFiveDayForecast = function (weatherConditions) {
//   fiveDayForecastEl.innerHTML = "<div class='cards row'></div>";
//   for (i = 1; i < 6; i++) {
//     createDailyCard(i, weatherConditions);
//   }
// };

// var createDailyCard = function (cardIndex, weatherConditions) {
//   var newCard = document.createElement("div");
//   newCard.classList = "card col-12 col-lg-5 col-xl small m-2 p-2";

//   var cardTitle = document.createElement("div");
//   cardTitle.setAttribute("class", "card-title");
//   cardTitle.textContent = moment()
//     .add(cardIndex, "days")
//     .format(" (MM/DD/YYYY) ");

//   var cardIcon = document.createElement("img");
//   cardIcon.setAttribute(
//     "src",
//     "https://openweathermap.org/img/wn/" +
//       weatherConditions.daily[cardIndex].weather[0].icon +
//       ".png"
//   );
//   cardIcon.setAttribute("style", "max-width: 4rem;");

//   var cardTemp = document.createElement("p");
//   cardTemp.textContent =
//     "Temp: " + weatherConditions.daily[cardIndex].temp.day + " °F";

//   var cardWindSpeed = document.createElement("p");
//   cardWindSpeed.textContent =
//     "Wind: " + weatherConditions.daily[cardIndex].wind_speed + " mph";

//   var cardHumidity = document.createElement("p");
//   cardHumidity.textContent =
//     "Humidity: " + weatherConditions.daily[cardIndex].humidity + " %";

//   newCard.append(cardTitle, cardIcon, cardTemp, cardWindSpeed, cardHumidity);
//   document.querySelector("#five-day-forecast .cards").appendChild(newCard);
// };

// var getSearchHistory = function () {
//   if (localStorage.getItem("storedSearchHistory")) {
//     var data = localStorage.getItem("storedSearchHistory");
//     searchHistory = JSON.parse(data);
//   }
// };

// var displaySearchHistory = function () {
//   // Clear results from a previous search
//   searchListEl.innerHTML = "";

//   for (i = 0; i < searchHistory.length; ++i) {
//     var searchItem = document.createElement("button");
//     searchItem.classList = "btn btn-secondary col-12 my-1";
//     searchItem.textContent = searchHistory[i];

//     searchListEl.appendChild(searchItem);
//   }
// };

// getSearchHistory();
// displaySearchHistory();

// form.addEventListener("submit", handleNewSearch);
// searchListEl.addEventListener("click", handlePreviousSearch);
