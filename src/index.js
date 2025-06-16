import { homePageLoad, menuPageLoad, aboutPageLoad } from "./pageLoad.js"

console.log("working");

const restaurantPageHandler = (() => {
    const buttonContainer = document.querySelector("#button-container");
    buttonContainer.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "home":
                homePageLoad();
                break;
            case "menu":
                menuPageLoad();
                break;
            case "about":
                aboutPageLoad();
                break;
            default:
                break;
        }
    });
    
    homePageLoad();
})();
