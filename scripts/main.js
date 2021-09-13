// weather: api.openweathermap.org/data/2.5/forecast?q=SpringHill,Tennessee&appid=2f9757f3bd4813e8e0c4d8f63854c8f7
// list of parks: https://developer.nps.gov/api/v1/parks?api_key=GtZH6PKdkUud9AMZrhhII6Ztg3sHJjAp3RTX3Ehh
// park activities: https://developer.nps.gov/api/v1/activities?api_key=GtZH6PKdkUud9AMZrhhII6Ztg3sHJjAp3RTX3Ehh

import { ParkList } from "./parks/parkList.js";
import { getParks } from "./parks/ParkDataManager.js";
import { EateryList } from "./eateries/eateryList.js";
import { getEateries } from "./eateries/EateryDataManager.js"
import { AttractionList } from "./attractions/attractionList.js"
import { getAttractions } from "./attractions/AttractionDataManager.js"

const showParkList = () => {

    const parkElement = document.querySelector(".showParkList")
    getParks()
    .then((allPark) => {
        parkElement.innerHTML = ParkList(allPark);
    })
}

showParkList();

const showEateryList = () => {

    const eateryElement = document.querySelector(".showEateryList")
    getEateries()
    .then((allEateries) => {
        eateryElement.innerHTML = EateryList(allEateries)
    })
}

const showAttractionList = () => {

    const attElement = document.querySelector(".showAttList")
    getAttractions()
    .then((allAtt) => {
        attElement.innerHTML = AttractionList(allAtt)
    })
}