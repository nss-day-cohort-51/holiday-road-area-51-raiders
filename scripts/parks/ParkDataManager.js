export const getParks = () => {
    return fetch("https://developer.nps.gov/api/v1/parks?api_key=GtZH6PKdkUud9AMZrhhII6Ztg3sHJjAp3RTX3Ehh")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse.data
    })
}
