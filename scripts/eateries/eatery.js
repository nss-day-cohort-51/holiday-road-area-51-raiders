export const eatery = (eatobj) => {
    ` <section class="eatery" id="${eatobj.id}"></section>
        <h3 class="eatery">${eatobj.name}</h3>
    <p>${eatobj.city}, ${eatobj.state}</p>
    <p>${eatobj.description}</p>
    
    `
}