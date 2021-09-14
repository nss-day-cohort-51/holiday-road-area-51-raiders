export const showEatery = (eateryArray) => {
    const eateryDropDown = eateryArray.map(eatery => `<option value="${eatery.id}">${eatery.businessName}</option>`)
    return `
    <select id="eaterySelection">
    <option value="none" selected disabled>Choose an Eatery</option>
        ${eateryDropDown.join("")}
    </select>`
}