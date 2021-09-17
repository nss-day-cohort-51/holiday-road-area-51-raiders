import { getWeather } from "./WeatherDataManager.js"
import { getParkArray, getStateArray, getStates } from "../parks/ParkDataManager.js"
import { WeatherList } from "./weatherList.js"


const tempF = (tempK) => {
    const kelvin = tempK
    const celsius = kelvin - 273
    const farenheit = (celsius * 9/5) + 32
    return farenheit
}

const rainChance = (rain) => {
    return rain * 100
}

export const weatherPreview = (response) => {
    return `<section class="weather">
    <h4>date: ${response.dt_txt}</h4>
    <p>temp: ${Math.round(tempF(response.main.temp))} F\xB0</p>
    <p>${response.weather[0].description}</p>
    <p>chance of precipitation: ${rainChance(response.pop)}%</p>
    <p>wind speed: ${response.wind.speed}/mph</p>`
}

export const getWeatherapi = (parkid) => {

    const weatherElement = document.querySelector("#previewWeather")

    const filteredResult = getParkArray().data.filter(singlePark => {
        if (singlePark.parkCode === parkid) {
            return singlePark
        }
    })

    let zip = filteredResult[0].addresses[0].postalCode

    getWeather(zip).then(response => {
        weatherElement.innerHTML = WeatherList(response.list)
        console.log(response)
    })
}