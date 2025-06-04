const homePageLoad = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    contentDiv.innerHTML = `
        <div class="homepage-container">
            <div>Example Resturant</div>
            <div>
                Welcome to Example Resturant, where every meal is a celebration of flavor and community. Nestled in the heart of [City/Neighborhood], 
                we craft unforgettable dining experiences with fresh, locally sourced ingredients and a passion for culinary excellence. Whether you are joining us for a romantic dinner, 
                a family gathering, or a quick lunch, our warm hospitality and inviting atmosphere await you. Come taste the difference and let us make your visit truly special.
            </div>
        </div>
    `;
};
export { homePageLoad };