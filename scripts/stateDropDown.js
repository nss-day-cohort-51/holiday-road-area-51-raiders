export const showStateList = (stateArray) => {
    const stateDropDown = stateArray.map(state => `<option value="${state.code}">${state.name}</option>`)
    return `
    <select id="stateSelection">
    <option value="none" selected disabled>Choose a State</option>
        ${stateDropDown.join("")}
    </select>`
}