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

const menuPageLoad = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    contentDiv.innerHTML = `
        <div class="menupage-container">
            <div>Menu</div>
            <h1>Starters</h1>
            <ul>
                <li> Garlic & Herb Flatbread - Wood-fired and served with whipped feta and olive tapenade. </li>
                <li> Crispy Calamari - Lightly fried and served with chili-lime aioli. </li>
                <li> Heirloom Tomato Salad - With buffalo mozzarella, basil oil, and aged balsamic glaze. </li>
                <li> Pumpkin Soup - Creamy roasted pumpkin with coconut cream and toasted seeds. </li>
            </ul>
            <h1>Mains</h1>
            <ul>
                <li> Grilled Angus Sirloin - 250g premium cut with rosemary jus, garlic mash, and seasonal greens. </li>
                <li> Pan-Seared Barramundi - On a bed of lemon risotto, finished with caper butter sauce. </li>
                <li> Spiced Chickpea & Sweet Potato Curry - egan, served with jasmine rice and coconut yoghurt. </li>
                <li> Truffle Mushroom Linguine - Tossed with garlic, thyme, parmesan, and a hint of cream. </li>
            </ul>
            <h1>Desserts</h1>
            <ul>
                <li> Sticky Date Pudding - Warm, with butterscotch sauce and vanilla bean ice cream. </li>
                <li> Lemon Tart - Served with raspberry coulis and a dollop of crème fraîche. </li>
                <li> Chocolate Mousse - Rich dark chocolate with hazelnut crunch and chantilly cream. </li>
                <li> Cheese Board - A selection of local cheeses, crackers, and house chutney. </li>
            </ul>
        </div>
    `;
};

const aboutPageLoad = () => {
    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";
    contentDiv.innerHTML = `
        <div class="aboutpage-container">
            <div>About Us</div>
            <div>
                At [Restaurant Name], we believe great food brings people together. Since opening our doors in [Year], we have been dedicated to creating memorable dining experiences through fresh ingredients, honest flavors, and genuine hospitality. Our team of passionate chefs crafts every dish with care, blending local produce with global inspiration to deliver bold, satisfying meals.
                Located in the heart of [City or Neighborhood], [Restaurant Name] is more than just a place to eat — it is a space to relax, connect, and enjoy the simple pleasures. Whether you are here for a casual lunch, a special celebration, or anything in between, we aim to make every visit feel like coming home.
                We are proud to support local farmers, partners, and artisans, and we are committed to sustainability in everything we do — from seasonal menus to eco-friendly practices.
                Thank you for choosing [Restaurant Name]. We are honored to share our table with you.
            </div>
        </div>
    `;
};

export { homePageLoad, menuPageLoad, aboutPageLoad };