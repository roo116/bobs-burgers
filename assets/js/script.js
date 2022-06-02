//update with correct element id's
var homeEl = document.getElementById("home");
var inputEl = document.getElementById("input");
var btnEl = document.getElementById("search-button");
var imgEl = document.getElementById("result-img");
var nameEl = document.getElementById("name");
var actorName = "";

// function init() {
searchResults = JSON.parse(localStorage.getItem("searchResults"));

// if (!searchResults) {
var searchResults = {
  charName: [],
  charImg: [],
  actorName: [],
  actorImg: [],
};

// return;
// }
// }

var clickHandler = function (event) {
  event.preventDefault();

  console.log(nameEl.value);
  character = nameEl.value.trim();
  getCharacter(character);
};

var getCharacter = function (character) {
  var apiUrl =
    "https://futuramaapi.herokuapp.com/api/v2/characters?search=" + character;
  fetch(apiUrl).then(function (response) {
    if (!response) {
      return;
    }
    if (response.ok) {
      response.json().then(function (data) {
        nameEl.textContent = data[0].Name;
        imgEl.src = data[0].PicUrl;
        actor = data[0].VoicedBy;

        searchResults.charName.push(nameEl.textContent);
        searchResults.charImg.push(imgEl.src);
        searchResults.actorName.push(actor);

        localStorage.setItem("searchResults", JSON.stringify(searchResults));

        location.replace("./ResultPage.html");
      });
    }
  });
};

btnEl.addEventListener("click", clickHandler);
