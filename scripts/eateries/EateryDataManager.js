let  allEateries = []

export const getEateries = () => {
    return fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(parsedResponse => {
        allEateries = parsedResponse;
        return parsedResponse;
    })
}
export const getSingleEatery = (id) => {
    return fetch(`http://holidayroad.nss.team/eateries/${id}`)
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse;
    })
}
    

    export const getEateryArray = () => {
        return allEateries;
    }