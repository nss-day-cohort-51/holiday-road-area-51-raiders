export const getEateries = () => {
    fetch("http://holidayroad.nss.team/eateries")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse
    })
}