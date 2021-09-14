export const getWeather = () => {
    return fetch("https://openweathermap.org/api")
    .then(response => response.json())
    .then(parsedResponse => {
        return parsedResponse
    })
}

//  Bookmark Sept 14th: Configuring Weather Data Manager 