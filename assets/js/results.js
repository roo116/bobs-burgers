//global var
var charTgt = document.getElementById("char-target");
var charName = document.getElementById("char-name");
var actorNameEl = document.getElementById("actor-name");
var backBtnEl = document.getElementById("go-back");
var actorInfo = document.getElementById("actor-info")
var actorId = "";
var actorImg = "";

searchResults = JSON.parse(localStorage.getItem("searchResults"));

var charUrl = searchResults.charImg[0];
var actorName = searchResults.actorName[0];
charTgt.setAttribute("src", charUrl);
charName.textContent = searchResults.charName[0];
actorNameEl.textContent = actorName;

var apiImdb = `https://imdb-api.com/en/API/SearchName/k_c7pld9ns/${actorName}`;
fetch(apiImdb).then(function (response) {
  if (response.ok)
    response.json().then(function (data) {
      actorId = data.results[0].id;
      getActorImg(actorId);
    });
});

var getActorImg = function (actorId) {
  console.log(actorId);
  var apiActorImg = `https://imdb-api.com/en/API/Search/k_4lc84q6o/${actorId}?=bio`;
  console.log(apiActorImg);
  fetch(apiActorImg).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      actorImg = data.results[0].image;
      var actorDesc = data.results[0].description
      actorUrl = `https://imdb.com/name/${actorId}`
      document.getElementById("actor-image").setAttribute("src", actorImg);

      var actorLink = document.createElement("a");
      var actorEl = document.createElement("p")

      actorLink.setAttribute("href", actorUrl);
      actorLink.textContent = "IMDB link"
      actorEl.textContent = actorDesc;

      actorInfo.appendChild(actorEl);
      actorInfo.appendChild(actorLink)







    });
  });
};

var returnToSearch = function () {
  // localStorage.clear();
  location.replace("./index.html");
};

//go back
backBtnEl.addEventListener("click", returnToSearch);
