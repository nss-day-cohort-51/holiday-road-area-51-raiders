// weather: api.openweathermap.org/data/2.5/forecast?q=SpringHill,Tennessee&appid=2f9757f3bd4813e8e0c4d8f63854c8f7
// list of parks: https://developer.nps.gov/api/v1/parks?api_key=GtZH6PKdkUud9AMZrhhII6Ztg3sHJjAp3RTX3Ehh
// park activities: https://developer.nps.gov/api/v1/activities?api_key=GtZH6PKdkUud9AMZrhhII6Ztg3sHJjAp3RTX3Ehh

import { ParkList } from "./parks/parkList.js";
import { getParks } from "./parks/ParkDataManager.js";

const showParkList = () => {

    const parkElement = document.querySelector(".showParkList")
    getParks()
    .then((allPark) => {
        parkElement.innerHTML = ParkList(allPark);
    })
}

showParkList();