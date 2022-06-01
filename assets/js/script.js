
//update with correct element id's
var homeEl = document.getElementById("home");
var inputEl = document.getElementById("input");
var inputEl = document.getElementById("go-button");
var imgEl = document.getElementById("result-img");
var nameEl = document.getElementById("name");
var actorName = "";
var imbd = {};

var getCharacter = function (character) {
  var apiUrl =
    "https://futuramaapi.herokuapp.com/api/v2/characters?search=" + character;
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        response.json().then(function (data) {
          nameEl.textContent = data[0].Name;
          imgEl.src = data[0].PicUrl;
          var voiceActor = data[0].VoicedBy;
          otherApi(voiceActor);
        });
      }
    })
    .then(function (actor) {
      actorName = actor[0].name;

      fetch(`https://imdb-api.com/en/API/SearchKeyword/k_c7pld9ns/{expression}`)
        .then(function (imbdResponse) {
          return imbdResponse.json();
        })
        .then(function (imbd) {
          displayFetchedContent(imbd);
        });
    });
};
