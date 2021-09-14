// weather: api.openweathermap.org/data/2.5/forecast?q=SpringHill,Tennessee&appid=2f9757f3bd4813e8e0c4d8f63854c8f7
// list of parks: https://developer.nps.gov/api/v1/parks?api_key=GtZH6PKdkUud9AMZrhhII6Ztg3sHJjAp3RTX3Ehh
// park activities: https://developer.nps.gov/api/v1/activities?api_key=GtZH6PKdkUud9AMZrhhII6Ztg3sHJjAp3RTX3Ehh

// import { ParkList } from "./parks/parkList.js";
import { Park } from "./parks/park.js";
import { getParks, getStateArray, getStates } from "./parks/ParkDataManager.js";
// import { EateryList } from "./eateries/eateryList.js";
import { getEateries } from "./eateries/EateryDataManager.js"
import { showEatery } from "./eateries/eatery.js";
// import { AttractionList } from "./attractions/attractionList.js"
// import { getAttractions } from "./attractions/AttractionDataManager.js"
import { showStateList } from "./stateDropDown.js";

const mainElement = document.querySelector("main");
mainElement.addEventListener("change", (event) => {
    if (event.target.id === "stateSelection"){
        console.log('target', event.target.value);
        buildStateList(event.target.value);
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

startTrip();
