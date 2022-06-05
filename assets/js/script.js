//update with correct element id's
var homeEl = document.getElementById("home");
var inputEl = document.getElementById("input");
var btnEl = document.getElementById("search-button");
var imgEl = document.getElementById("result-img");
var nameEl = document.getElementById("name");
var actorName = "";
var quoteEl = document.getElementById("quote");
var randomPic = document.getElementById("rdm-char-img");
var randomName = document.getElementById("character-name");

// setup a clean object for a new search
var searchResults = {
  charName: [],
  charImg: [],
  charSpec: [],
  charPlanet: [],
  actorName: [],
  actorImg: []
};


var clickHandler = function (event) {
  event.preventDefault();

  console.log(nameEl.value);
  character = nameEl.value.trim();
  getCharacter(character);
};

// get character data from API futurama
var getCharacter = function (character) {
  var apiUrl =
    "https://futuramaapi.herokuapp.com/api/v2/characters?search=" + character;
  fetch(apiUrl).then(function (response) {
    if (!response) {
      return;
    }
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        if (data[0].VoicedBy == "Billy West Iván Muelas (Spain)" || data[0].VoicedBy == "Regular: Billy WestAnime: David Herman") {
          actor = "Billy West"
        } else {
          actor = data[0].VoicedBy;
        }
        nameEl.textContent = data[0].Name;
        charSpec = data[0].Species;
        charPlanet = data[0].Planet;
        var charImg = data[0].PicUrl;

        searchResults.charName.push(nameEl.textContent);
        searchResults.charImg.push(charImg);
        searchResults.actorName.push(actor);
        searchResults.charSpec.push(charSpec);
        searchResults.charPlanet.push(charPlanet);

        localStorage.setItem("searchResults", JSON.stringify(searchResults));

        location.replace("./ResultPage.html");
      });
    }
  });
};

btnEl.addEventListener("click", clickHandler);

//random front page character and assets

var charList = ["Philip J. Fry", "Leela", "Hubert J. Farnsworth", "Bender", "Amy"];
var charListQuote = ["Fry", "Leela", "Professor-Farnsworth", "Bender", "Amy"]
var randomChar = function () {
  var choice = Math.floor(Math.random() * 5)
  console.log(choice);
  return choice;

}

var setRandomChar = function (character) {
  var apiUrl =
    "https://futuramaapi.herokuapp.com/api/v2/characters?search=" + charList[character];
  fetch(apiUrl).then(function (response) {
    if (!response) {
      return;
    }
    if (response.ok) {

      response.json().then(function (data) {

        randomName.textContent = data[0].Name;
        randomPic.src = data[0].PicUrl;
        actor = data[0].VoicedBy;

      });
    }
  });
  var apiUrl2 =
    "https://futuramaapi.herokuapp.com/api/characters/" + charListQuote[character];
  fetch(apiUrl2).then(function (response) {
    if (!response) {
      return;
    }
    if (response.ok) {

      response.json().then(function (data) {
        console.log(data);
        var quoteChoice = Math.floor(Math.random() * data.length);
        quoteEl.textContent = data[quoteChoice].quote;

      });
    }
  });
};
setRandomChar(randomChar());
