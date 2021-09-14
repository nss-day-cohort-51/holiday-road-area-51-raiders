export const showAttraction = (attractionArray) => {
    const attractionDropDown = attractionArray.map(att => `<option value="${att.id}">${att.name}</option>`)
    return `
    <select id="attractionSelection">
    <option value="none" selected disabled>Choose an Attraction</option>
        ${attractionDropDown.join("")}
    </select>`
}