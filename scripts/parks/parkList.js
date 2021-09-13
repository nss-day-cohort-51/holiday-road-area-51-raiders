import { park } from "./park.js";

export const ParkList = (allPark) => {

    let parkHTML = "";

    for(const onePark of allPark) {

        parkHTML += park(onePark)
    }

    return parkHTML;
}