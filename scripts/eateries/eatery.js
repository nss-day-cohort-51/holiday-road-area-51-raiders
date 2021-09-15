import { getEateries, getSingleEatery } from "./EateryDataManager.js"


export const showEatery = (eateryArray) => {
    const eateryDropDown = eateryArray.map(eatery => `<option value="${eatery.id}">${eatery.businessName}</option>`)
    return `<select id="eaterySelection">Choose an Eatery
    <option value="none" selected disabled>Choose an Eatery</option>
        ${eateryDropDown.join("")}
    </select>`
}

export const showEateryDetails = (eateryid) => {
    //reference to preview area on DOM
    const contentElement = document.querySelector("#previewEat")

   getSingleEatery(eateryid).then(response => {
        console.log(response)
        contentElement.innerHTML = `<section class= "eatery" id="${response.id}">
        <h3>${response.businessName}</h3>
        <p>${response.city, response.state}</p>
        <p>${response.description}</p>
        </section>`
    
    })
}

//DOM object HTML
   