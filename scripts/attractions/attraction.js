export const attraction = (attobj) => {
    ` <section class="attraction" id="${attobj.id}"></section>
        <h3 class="attraction">${attobj.name}</h3>
    <p>${attobj.city}, ${attobj.state}</p>
    <p>${attobj.description}</p>
    
    `
}