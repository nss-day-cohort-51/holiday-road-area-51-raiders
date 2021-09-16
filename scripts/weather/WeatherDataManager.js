export const getWeather = (zip) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zip}&appid=2f9757f3bd4813e8e0c4d8f63854c8f7`)
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse
    })
}

//  Bookmark Sept 14th: Configuring Weather Data Manager 