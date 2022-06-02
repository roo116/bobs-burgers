
//update with correct element id's
var homeEl = document.getElementById("home");
var inputEl = document.getElementById("input");
var btnEl = document.getElementById("search-button");
var imgEl = document.getElementById("result-img");
var nameEl = document.getElementById("name");
var actorName = "";
var imbd = {};

var clickHandler = function (event) {
  event.preventDefault()

  console.log(nameEl.value);
  character = nameEl.value.trim()
  getCharacter(character)
}

var getCharacter = function (character) {
  var apiUrl = "https://futuramaapi.herokuapp.com/api/v2/characters?search=" + character;
  fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        debugger;
        response.json().then(function (data) {
          // console.log(data[0].Name);
          // console.log(data[0].PicUrl);
          // console.log(data[0].VoicedBy)
          nameEl.textContent = data[0].Name;
          imgEl.src = data[0].PicUrl;
          var voiceActor = data[0].VoicedBy;
          otherApi(voiceActor);
        });or
      }
    })
};

var otherApi = function(voiceActor) {
  var apiImdb = `https://imdb-api.com/en/API/SearchName/k_4lc84q6o/${voiceActor}`
  console.log(apiImdb);


}

// var getCharacter = function (character) {
//   var apiUrl =
//     "https://futuramaapi.herokuapp.com/api/v2/characters?search=" + character;
//   fetch(apiUrl)
//     .then(function (response) {
//       if (response.ok) {
//         response.json().then(function (data) {
//           nameEl.textContent = data[0].Name;
//           imgEl.src = data[0].PicUrl;
//           var voiceActor = data[0].VoicedBy;
//           otherApi(voiceActor);
//         });
//       }
//     })
//     .then(function (actor) {
//       actorName = actor[0].name;

//       fetch(`https://imdb-api.com/en/API/SearchKeyword/k_c7pld9ns/{expression}`)
//         .then(function (imbdResponse) {
//           return imbdResponse.json();
//         })
//         .then(function (imbd) {
//           displayFetchedContent(imbd);
//         });
//     });
// };

btnEl.addEventListener("click", clickHandler)