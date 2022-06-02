
//update with correct element id's
var homeEl = document.getElementById("home");
var userFormEl = document.getElementById("search");
var searchButtonEl = document.getElementById("search-button");
var inputEl = document.getElementById("go-button");
var imgEl = document.getElementById("result-img");
var nameInputEl = document.getElementById("search-character");
var actorName = "";
var imbd = {};

var formSubmitHandler = function(event) {
  // prevent page from refreshing
  event.preventDefault();

  // get value from input element
  var characterName = nameInputEl.value.trim();

  if (characterName) {
    getUserRepos(characterName);

    // clear old content
    repoContainerEl.textContent = "";
    nameInputEl.value = "";
  } else {
    alert("Please enter a Futurama character");
  }
};

var buttonClickHandler = function(event) {
  // get the language attribute from the clicked element
  var charSearch = event.target.getAttribute("search-button");

  if (charSearch) {
    getFeaturedRepos(charSearch);

    // clear old content
    repoContainerEl.textContent = "";
  }
};

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

// add event listeners to form and button container
userFormEl.addEventListener("submit", formSubmitHandler);
searchButtonEl.addEventListener("click", buttonClickHandler);

