// export const park = (parkobj) => {
//     return `
//         <section class="park" id="${parkobj.id}"></section>
//             <h3>${parkobj.fullName}</h3>
//             <p>${parkobj.states} </p>
//             <p>${parkobj.description}</p>`
// }

import { getParkArray } from "./ParkDataManager.js"

export const Park = parkArray => {
//portion of dropdown we'd like to loop
    const parkDropDown = parkArray.map(park => `<option value="${park.id}">${park.fullName}</option>`)
//portion of dropdown that won't be looped. this will hold the looped portion using .join to string together all of the array objects
    return `<select id="parkSelection">Choose a Park
        <option value="none" selected disabled>Choose a Park</option>
        ${parkDropDown.join("")}
        </select>`
}

export const showParkDetails = (parkid) => {
//reference to preview area on DOM
    const contentElement = document.querySelector("#preview")
//filters through all parks for the ones with the selected id
    const filteredResult = getParkArray().data.filter(singlePark => {
        if (singlePark.id === parkid) {
            return singlePark
        }
    })
    console.log(filteredResult[0])
//DOM object HTML
    contentElement.innerHTML = `<section class="park" id="${filteredResult[0].id}">
            <h3>${filteredResult[0].fullName}</h3>
            <p>${filteredResult[0].states}</p>
            <p>${filteredResult[0].description}</p>
            </section>`
}