import { getTrips } from "./DataManager.js"
import { TripList } from "./tripList.js"
import { getSinglePark } from "../parks/ParkDataManager.js"

export const Trip = (park, att, eat) => {
    return `<h3 id="${park.parkCode}">${park.fullName}</h3>
    <p>${att.name}</p>
    <p>${eat.businessName}</p>`
}

export const showTrip = () => {
    getTrips().then(response => {
        TripList(response)
    })
}