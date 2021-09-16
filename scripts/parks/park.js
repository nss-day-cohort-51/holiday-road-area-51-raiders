// export const park = (parkobj) => {
//     return `
//         <section class="park" id="${parkobj.id}"></section>
//             <h3>${parkobj.fullName}</h3>
//             <p>${parkobj.states} </p>
//             <p>${parkobj.description}</p>`
// }

import { getParkArray } from "./ParkDataManager.js"

export const Park = parkArray => {
    const parkDropDown = parkArray.map(park => `<option value="${park.parkCode}">${park.fullName}</option>`)
    return `<select id="parkSelection">Choose a Park
        <option value="none" selected disabled>Choose a Park</option>
        ${parkDropDown.join("")}
        </select>`
}

export const parkDetailsButton = () => {
    return `<button id="parkPreview">Details</button>`
}

export const showParkDetails = (parkid) => {
    //reference to preview area on DOM
    const contentElement = document.querySelector("#preview")

    const filteredResult = getParkArray().data.filter(singlePark => {
        if (singlePark.parkCode === parkid) {
            return singlePark
        }
    })
    console.log(filteredResult[0])
//DOM object HTML
    contentElement.innerHTML = `<section class="park" id="${filteredResult[0].parkCode}">
            <h3>${filteredResult[0].fullName}</h3>
            <p>${filteredResult[0].states}</p>
            <p>${filteredResult[0].description}</p>
            </section>`
}