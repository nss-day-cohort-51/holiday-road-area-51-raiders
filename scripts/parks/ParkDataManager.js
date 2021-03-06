let allStates = [];

export const getStates = () => {
    return fetch("http://localhost:8088/states")
    .then(response => response.json())
    .then(apiStates => {
        allStates = apiStates;
        return apiStates;
    })
}

export const getStateArray = () => {
    return allStates;
}

let allParks = [];

export const getParks = (stateCode) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=GtZH6PKdkUud9AMZrhhII6Ztg3sHJjAp3RTX3Ehh`)
    .then(response => response.json())
    .then(parsedResponse => {
        allParks = parsedResponse
        return parsedResponse
    })
}


export const getParkArray = () => {
    return allParks;
}

export const getSinglePark = (parkCode) => {
    return fetch(`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=GtZH6PKdkUud9AMZrhhII6Ztg3sHJjAp3RTX3Ehh`)
    .then(response => response.json())
    .then(apiStates => {
        return apiStates.data;
    })
}