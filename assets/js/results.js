//global var
var charTgt = document.getElementById("char-target");
var charName = document.getElementById("char-name");
var actorNameEl = document.getElementById("actor-name");
var backBtnEl = document.getElementById("go-back");
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
  var apiActorImg = "https://imdb-api.com/en/API/Images/k_4lc84q6o/" + actorId;
  console.log(apiActorImg);
  fetch(apiActorImg).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      actorImg = data.items[0].image;
      document.getElementById("actor-image").setAttribute("src", actorImg);
    });
  });
};

var returnToSearch = function () {
   // localStorage.clear();
  location.replace("./SearchPage.html");
};

//go back
backBtnEl.addEventListener("click", returnToSearch);
