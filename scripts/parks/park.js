export const park = (parkobj) => {
    return `
        <section class="park" id="${parkobj.id}"></section>
            <h3>${parkobj.fullName}</h3>
            <p>${parkobj.states}</p>
            <p>${parkobj.description}</p>`
}