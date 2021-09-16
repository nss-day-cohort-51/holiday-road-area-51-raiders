// weather: api.openweathermap.org/data/2.5/forecast?q=SpringHill,Tennessee&appid=2f9757f3bd4813e8e0c4d8f63854c8f7
// list of parks: https://developer.nps.gov/api/v1/parks?api_key=GtZH6PKdkUud9AMZrhhII6Ztg3sHJjAp3RTX3Ehh
// park activities: https://developer.nps.gov/api/v1/activities?api_key=GtZH6PKdkUud9AMZrhhII6Ztg3sHJjAp3RTX3Ehh

// import { ParkList } from "./parks/parkList.js";
import { Park, showParkDetails, parkDetailsButton } from "./parks/park.js";
import { getParks, getStateArray, getStates } from "./parks/ParkDataManager.js";
// import { EateryList } from "./eateries/eateryList.js";
import { getEateries } from "./eateries/EateryDataManager.js"
import { showEatery, showEateryDetails } from "./eateries/eatery.js";
// import { AttractionList } from "./attractions/attractionList.js"
import { getAttractions } from "./attractions/AttractionDataManager.js"
import { showStateList } from "./stateDropDown.js";
import { showAttraction, showAttractionDetails } from "./attractions/attraction.js";
import { saveTrip } from "./feed/DataManager.js";
import { SaveTrip } from "./feed/SaveTrip.js";
import { getWeatherapi } from "./weather/weather.js";
import { showTrip } from "./feed/trip.js";

const mainElement = document.querySelector("main");
mainElement.addEventListener("change", (event) => {
    if (event.target.id === "stateSelection"){
        console.log('target', event.target.value);
        buildStateList(event.target.value);
    }
})

mainElement.addEventListener("change", (event) => {
    if (event.target.id === "parkSelection"){
        console.log("eyo?!", event.target.value)
        console.log(showParkDetails(event.target.value))
        getWeatherapi(event.target.value)
    }
})

mainElement.addEventListener("click", (event) => {
    if (event.target.id === "previewButton"){
        console.log("hehe lol")
    }
})

//Eat

mainElement.addEventListener("change", (event) => {
    if (event.target.id === "eaterySelection"){
        console.log("blah!", event.target.value)
        showEateryDetails(event.target.value)
    }
})

mainElement.addEventListener("change", (event) => {
    if (event.target.id === "attSelection"){
        console.log("blah!", event.target.value)
        showAttractionDetails(event.target.value)
    }
})

mainElement.addEventListener("click", (event) => {
    if (event.target.id === "previewButton"){
        console.log("yumyum")
    }
})

const buildStateList = (stateCode) => {
    const parkElement = document.querySelector(".parkDisplay");
    getParks(stateCode)
    .then(allAPIParks => {
        console.log('api', allAPIParks.data);

        parkElement.innerHTML = Park(allAPIParks.data)
    })
}

const buildEateryDD = () => {


    const eateryElement = document.querySelector(".eateryDisplay");
    getEateries()
    .then(allAPIEat => {
        console.log('api', allAPIEat);

        eateryElement.innerHTML = showEatery(allAPIEat)
    })
    const attElement = document.querySelector(".attDisplay");
    getAttractions()
    .then(allAPIAtt => {
        console.log('api', allAPIAtt);

        attElement.innerHTML = showAttraction(allAPIAtt)
    })
}

const startTrip = () => {

    const stateElement = document.querySelector(".stateDisplay")
    console.log('stateDisplay', stateElement)

    if (getStateArray().length !== 0) {
    console.log(getStateArray)
    stateElement.innerHTML = showStateList(getStateArray())
    } else {
        getStates().then(statesResults => {
            console.log("states", statesResults)
            stateElement.innerHTML = showStateList(statesResults);
        })
    }
    buildEateryDD();
}

const showSaveTrip = () => {
    const entryElement = document.querySelector(".entryForm");
    entryElement.innerHTML = SaveTrip();
}

mainElement.addEventListener("click", event => {
    if (event.target.id === "saveTrip__cancel") {
        //clear the input fields
    }
  })
  
  mainElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "saveTrip__submit") {
        const state = document.querySelector("#stateSelection").value
        console.log("state", state)
        const park = document.querySelector("#parkSelection").value
        const eatery = document.querySelector("#eaterySelection").value
        const attraction = document.querySelector("#attSelection").value

        const postObject = {
            state: state,
            park: park,
            eatery: parseInt(eatery),
            attraction: parseInt(attraction)
        }
        saveTrip(postObject).then(response => {
            showTrip();
        })

    }
})

showSaveTrip();
showTrip();
startTrip();
