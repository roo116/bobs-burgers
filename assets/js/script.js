
//update with correct element id's
var homeEl = document.getElementById("home");
var inputEl = document.getElementById("input");
var btnEl = document.getElementById("search-button");
var imgEl = document.getElementById("result-img");
var nameEl = document.getElementById("name");
var actorName = "";
var searchResults = {
  charName: [],
  charImg: [],
  actorName: [],
  actorImg: []
};

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

          // getActor(actor);
        })

      }
    });
}


// var getActor = function (actor) {
//   // actorName = actor[0].name;




// var apiImbd = `https://imdb-api.com/en/API/SearchName/k_c7pld9ns/${actor}`;
// fetch(apiImbd)
//   .then(function (Response) {
//   Response.json().then(function (data) {
//     console.log(data);
//   })
// })
//           return imbdResponse.json();
//         })
//         .then(function (imbd) {
//           displayFetchedContent(imbd);
//         });
//     });





// var otherApi = function (voiceActor) {
// var apiImdb = `https://imdb-api.com/en/API/SearchName/k_4lc84q6o/${voiceActor}`
// window.open(apiImdb);


// }

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

//populate results page
//  <a class="list-item flex-row justify-space-between align-center" href="./single-repo.html?repo=roo116/challenge-one"><span>roo116/challenge-one</span><span class="flex-row align-center"><i class="fas fa-check-square status-icon icon-success"></i></span></a> */ }

btnEl.addEventListener("click", clickHandler)