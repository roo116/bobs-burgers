//global var
var charTgt = document.getElementById("char-target")
var charName = document.getElementById("char-name");
var actorName = document.getElementById("actor-name");
var actorId = ""
var actorImg = ""
// var searchResults = "";

// function getActorID(actorName) {
//     var apiImdb = `https://imdb-api.com/en/API/SearchName/k_c7pld9ns/${name}`;
//     fetch(apiImdb)
//         .then(function (response) {
//             response.json().then(function (data) {
//                 console.log(data);
//                 actorId = data.results[0].id;
//                 // console.log(data);

//                 getActorImg(actorId);

//             })

//         })
// }

// function getActorImg(id) {
//     var apiActorImg = `https://imdb-api.com/en/API/Images/k_4lc84q6o${id}}`;
//     fetch(apiActorImg)
//         .then(function (response) {
//             response.json().then(function (data) {
//                 actorImg = data[0].image
//                 document.getElementById("actor-image").setAttribute("src", actorImg);

//             })
//         })

// }

searchResults = JSON.parse(localStorage.getItem("searchResults"));

var charUrl = searchResults.charImg[0];
var actorName = searchResults.actorName[0]
charTgt.setAttribute("src", charUrl);
charName.textContent = searchResults.charName[0];
actorName.textContent = actorName;

// charTgt = searchResults.charImg

// document.

var apiImdb = `https://imdb-api.com/en/API/SearchName/k_c7pld9ns/${actorName}`;
fetch(apiImdb)
    .then(function (response) {
        if (response.ok)
            response.json().then(function (data) {
                console.log(data);
                actorId = data.results[0].id;
                console.log(actorId);
                // console.log(data);

                // getActorImg(actorId);

            })

    })

debugger;
var apiActorImg = `https://imdb-api.com/en/API/Images/k_4lc84q6o/${actorId}`;
console.log(apiActorImg);
fetch(apiActorImg)
    .then(function (response) {
        response.json().then(function (data) {
            actorImg = data.results[0].image
            document.getElementById("actor-image").setAttribute("src", actorImg);

        })
    })

// function init() {


    // searchResults = JSON.parse(localStorage.getItem("searchResults"));
    // if (!searchResults) {
    //     return;
    // }

    // var charUrl = searchResults.charImg[0];
    // charTgt.setAttribute("src", charUrl);
    // charName.textContent = searchResults.charName[0];
    // actorName.textContent = searchResults.actorName[0];

    // // charTgt = searchResults.charImg

    // // document.

    // getActorImg(searchResults.actorName[0]);


// };




// init()