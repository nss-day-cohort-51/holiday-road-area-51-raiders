export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse
    })
}

export const getSingleAttraction = (id) => {
    return fetch(`http://holidayroad.nss.team/bizarreries/${id}`)
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse
    })
}