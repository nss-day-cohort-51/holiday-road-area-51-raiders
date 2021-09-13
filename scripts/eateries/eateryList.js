import { eatery } from "./eatery.js";

export const EateryList = (alleateries) => {
    let eatHTML="";
    for (const oneeat of alleateries) {
        eatHTML += eatery (oneeat)
    }
    return eatHTML;
}