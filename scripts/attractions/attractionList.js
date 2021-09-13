import { attraction } from "./attraction.js";
export const AttractionList = (allattractions) => {
    let attHTML="";
    for (const oneatt of allattractions) {
        attHTML += attraction(oneatt)
    }
    return attHTML;
}