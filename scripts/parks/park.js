// export const park = (parkobj) => {
//     return `
//         <section class="park" id="${parkobj.id}"></section>
//             <h3>${parkobj.fullName}</h3>
//             <p>${parkobj.states} </p>
//             <p>${parkobj.description}</p>`
// }

export const Park = parkArray => {
    const parkDropDown = parkArray.map(park => `<option value="${park.id}">${park.fullName}</option>`)
    return `<select>Choose a Park
        <option value="none" selected disabled>Choose a Park</option>
        ${parkDropDown.join("")}
        </select>`
}