//global var
var charTgt = document.getElementById("char-target");
var charName = document.getElementById("char-name");
var charPlanetEl = document.getElementById("planet");
var charSpecEl = document.getElementById("species");
var actorNameEl = document.getElementById("actor-name");
var backBtnEl = document.getElementById("go-back");
var actorInfo = document.getElementById("actor-info");
var actorLinkEl = document.getElementById("card-link")
var actorId = "";
var actorImg = "";

// get results from localStorage to build the page
searchResults = JSON.parse(localStorage.getItem("searchResults"));

// setup character card
var charUrl = searchResults.charImg[0];
var charSpec = searchResults.charSpec[0];
var charPlanet = searchResults.charPlanet[0]

charTgt.setAttribute("src", charUrl);
charName.textContent = searchResults.charName[0];
charSpecEl.textContent = "Species: " + charSpec;
charPlanetEl.textContent = "Planet: " + charPlanet;

// set up actor cards
var actorName = searchResults.actorName[0];
actorNameEl.textContent = actorName;


// fetch more this time from IMDB api
var apiImdb = `https://imdb-api.com/en/API/SearchName/k_4lc84q6o/${actorName}`;
fetch(apiImdb).then(function (response) {
  if (!response.ok) {
    console.log("error");
    return;
  }
  if (response.ok)
    response.json().then(function (data) {
      actorId = data.results[0].id;
      getActorImg(actorId);
    });
})
  .catch(error => console.log("error", error))

var getActorImg = function (actorId) {
  var apiActorImg = `https://imdb-api.com/en/API/Search/k_4lc84q6o/${actorId}?=bio`;
  console.log(apiActorImg);
  fetch(apiActorImg).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      actorImg = data.results[0].image;
      console.log("actor image", actorImg);
      var actorDesc = data.results[0].description;
      console.log("actor description", actorDesc);
      actorUrl = `https://imdb.com/name/${actorId}`;
      console.log("actor URL", actorUrl);
      document.getElementById("actor-image").setAttribute("src", actorImg);
      document.getElementById("actor-desc").textContent = actorDesc
      var actorLink = document.createElement("a");
      actorLink.setAttribute("href", actorUrl)
      actorLink.setAttribute("target", "_blank")
      actorLink.textContent = "Find out more.  Click Me!!"
      actorLinkEl.appendChild(actorLink)
    });
  });
};

// go back function
var returnToSearch = function () {
  location.replace("./index.html");
};

//go back
backBtnEl.addEventListener("click", returnToSearch);
