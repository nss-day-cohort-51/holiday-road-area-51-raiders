import { getSingleAttraction } from "./AttractionDataManager.js"

export const showAttraction = (attractionArray) => {
    const attractionDropDown = attractionArray.map(att => `<option value="${att.id}">${att.name}</option>`)
    return `
    <select id="attSelection">
    <option value="none" selected disabled>Choose an Attraction</option>
        ${attractionDropDown.join("")}
    </select>`
}
export const showAttractionDetails = (eateryid) => {
    //reference to preview area on DOM
    const contentElement = document.querySelector("#previewAtt")

   getSingleAttraction(eateryid).then(response => {
        console.log(response)
        contentElement.innerHTML = `<section class= "eatery" id="${response.id}">
        <h3>${response.name}</h3>
        <p>${response.city, response.state}</p>
        <p>${response.description}</p>
        </section>`
    
    })
}