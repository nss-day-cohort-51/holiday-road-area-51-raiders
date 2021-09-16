import { Trip } from "./trip.js"
import { getParks, getSinglePark } from "../parks/ParkDataManager.js";
import { getSingleAttraction } from "../attractions/AttractionDataManager.js";
import { getSingleEatery } from "../eateries/EateryDataManager.js";

export const TripList = (allTrips) => {
    const tripElement = document.querySelector("#previewTrip")
		for (const tripObj of allTrips) {
            getSinglePark(tripObj.park).then(response => {
                let park = response[0]
                getSingleAttraction(tripObj.attraction).then(response => {
                    let att = response
                    getSingleEatery(tripObj.eatery).then(response => {
                        let eat = response

                        tripElement.innerHTML += Trip(park, att, eat)
                    })
                })
            })
			
		}
	
}

