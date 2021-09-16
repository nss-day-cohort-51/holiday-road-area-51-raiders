import { weatherPreview } from "./weather.js";


export const WeatherList = (allPosts) => {
	let postHTML = "";
		for (const postObject of allPosts) {
			postHTML += weatherPreview(postObject)
		}
		return postHTML;
	
}