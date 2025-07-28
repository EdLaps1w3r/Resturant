/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n\n\nconsole.log(\"working\");\n\nconst restaurantPageHandler = (() => {\n    const buttonContainer = document.querySelector(\"#button-container\");\n    buttonContainer.addEventListener(\"click\", (e) => {\n        switch (e.target.id) {\n            case \"home\":\n                (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();\n                break;\n            case \"menu\":\n                (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.menuPageLoad)();\n                break;\n            case \"about\":\n                (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.aboutPageLoad)();\n                break;\n            default:\n                break;\n        }\n    });\n    \n    (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.homePageLoad)();\n})();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUU7O0FBRXpFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsMERBQVk7QUFDNUI7QUFDQTtBQUNBLGdCQUFnQiwwREFBWTtBQUM1QjtBQUNBO0FBQ0EsZ0JBQWdCLDJEQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSSwwREFBWTtBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9tZVBhZ2VMb2FkLCBtZW51UGFnZUxvYWQsIGFib3V0UGFnZUxvYWQgfSBmcm9tIFwiLi9wYWdlTG9hZC5qc1wiXG5cbmNvbnNvbGUubG9nKFwid29ya2luZ1wiKTtcblxuY29uc3QgcmVzdGF1cmFudFBhZ2VIYW5kbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J1dHRvbi1jb250YWluZXJcIik7XG4gICAgYnV0dG9uQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGUudGFyZ2V0LmlkKSB7XG4gICAgICAgICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICAgICAgICAgIGhvbWVQYWdlTG9hZCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1lbnVcIjpcbiAgICAgICAgICAgICAgICBtZW51UGFnZUxvYWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJhYm91dFwiOlxuICAgICAgICAgICAgICAgIGFib3V0UGFnZUxvYWQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICBob21lUGFnZUxvYWQoKTtcbn0pKCk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPageLoad: () => (/* binding */ aboutPageLoad),\n/* harmony export */   homePageLoad: () => (/* binding */ homePageLoad),\n/* harmony export */   menuPageLoad: () => (/* binding */ menuPageLoad)\n/* harmony export */ });\nconst homePageLoad = () => {\n    const contentDiv = document.querySelector(\"#content\");\n    contentDiv.innerHTML = \"\";\n    contentDiv.innerHTML = `\n        <div class=\"homepage-container\">\n            <div  class=\"title\">Example Resturant</div>\n            <div>\n                Welcome to Example Resturant, where every meal is a celebration of flavor and community. Nestled in the heart of [City/Neighborhood], \n                we craft unforgettable dining experiences with fresh, locally sourced ingredients and a passion for culinary excellence. Whether you are joining us for a romantic dinner, \n                a family gathering, or a quick lunch, our warm hospitality and inviting atmosphere await you. Come taste the difference and let us make your visit truly special.\n            </div>\n        </div>\n    `;\n};\n\nconst menuPageLoad = () => {\n    const contentDiv = document.querySelector(\"#content\");\n    contentDiv.innerHTML = \"\";\n    contentDiv.innerHTML = `\n        <div class=\"menupage-container\">\n            <div class=\"title\">Menu</div>\n            <div id=\"starters\">\n            <h1>Starters</h1>\n                <ul>\n                    <li> Garlic & Herb Flatbread - Wood-fired and served with whipped feta and olive tapenade. </li>\n                    <li> Crispy Calamari - Lightly fried and served with chili-lime aioli. </li>\n                    <li> Heirloom Tomato Salad - With buffalo mozzarella, basil oil, and aged balsamic glaze. </li>\n                    <li> Pumpkin Soup - Creamy roasted pumpkin with coconut cream and toasted seeds. </li>\n                </ul>\n            </div>\n            <div id=\"mains\">\n                <h1>Mains</h1>\n                <ul>\n                    <li> Grilled Angus Sirloin - 250g premium cut with rosemary jus, garlic mash, and seasonal greens. </li>\n                    <li> Pan-Seared Barramundi - On a bed of lemon risotto, finished with caper butter sauce. </li>\n                    <li> Spiced Chickpea & Sweet Potato Curry - egan, served with jasmine rice and coconut yoghurt. </li>\n                    <li> Truffle Mushroom Linguine - Tossed with garlic, thyme, parmesan, and a hint of cream. </li>\n                </ul>\n            </div>\n            <div id=\"desserts\">\n                <h1>Desserts</h1>\n                <ul>\n                    <li> Sticky Date Pudding - Warm, with butterscotch sauce and vanilla bean ice cream. </li>\n                    <li> Lemon Tart - Served with raspberry coulis and a dollop of crème fraîche. </li>\n                    <li> Chocolate Mousse - Rich dark chocolate with hazelnut crunch and chantilly cream. </li>\n                    <li> Cheese Board - A selection of local cheeses, crackers, and house chutney. </li>\n                </ul>\n            </div>\n        </div>\n    `;\n};\n\nconst aboutPageLoad = () => {\n    const contentDiv = document.querySelector(\"#content\");\n    contentDiv.innerHTML = \"\";\n    contentDiv.innerHTML = `\n        <div class=\"aboutpage-container\">\n            <div  class=\"title\">About Us</div>\n            <div>\n                At [Restaurant Name], we believe great food brings people together. Since opening our doors in [Year], we have been dedicated to creating memorable dining experiences through fresh ingredients, honest flavors, and genuine hospitality. Our team of passionate chefs crafts every dish with care, blending local produce with global inspiration to deliver bold, satisfying meals.\n                Located in the heart of [City or Neighborhood], [Restaurant Name] is more than just a place to eat — it is a space to relax, connect, and enjoy the simple pleasures. Whether you are here for a casual lunch, a special celebration, or anything in between, we aim to make every visit feel like coming home.\n                We are proud to support local farmers, partners, and artisans, and we are committed to sustainability in everything we do — from seasonal menus to eco-friendly practices.\n                Thank you for choosing [Restaurant Name]. We are honored to share our table with you.\n            </div>\n        </div>\n    `;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdHVyYW50Ly4vc3JjL3BhZ2VMb2FkLmpzPzc5NDYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaG9tZVBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG9tZXBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2ICBjbGFzcz1cInRpdGxlXCI+RXhhbXBsZSBSZXN0dXJhbnQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgV2VsY29tZSB0byBFeGFtcGxlIFJlc3R1cmFudCwgd2hlcmUgZXZlcnkgbWVhbCBpcyBhIGNlbGVicmF0aW9uIG9mIGZsYXZvciBhbmQgY29tbXVuaXR5LiBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiBbQ2l0eS9OZWlnaGJvcmhvb2RdLCBcbiAgICAgICAgICAgICAgICB3ZSBjcmFmdCB1bmZvcmdldHRhYmxlIGRpbmluZyBleHBlcmllbmNlcyB3aXRoIGZyZXNoLCBsb2NhbGx5IHNvdXJjZWQgaW5ncmVkaWVudHMgYW5kIGEgcGFzc2lvbiBmb3IgY3VsaW5hcnkgZXhjZWxsZW5jZS4gV2hldGhlciB5b3UgYXJlIGpvaW5pbmcgdXMgZm9yIGEgcm9tYW50aWMgZGlubmVyLCBcbiAgICAgICAgICAgICAgICBhIGZhbWlseSBnYXRoZXJpbmcsIG9yIGEgcXVpY2sgbHVuY2gsIG91ciB3YXJtIGhvc3BpdGFsaXR5IGFuZCBpbnZpdGluZyBhdG1vc3BoZXJlIGF3YWl0IHlvdS4gQ29tZSB0YXN0ZSB0aGUgZGlmZmVyZW5jZSBhbmQgbGV0IHVzIG1ha2UgeW91ciB2aXNpdCB0cnVseSBzcGVjaWFsLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG59O1xuXG5jb25zdCBtZW51UGFnZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZW51cGFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPk1lbnU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJzdGFydGVyc1wiPlxuICAgICAgICAgICAgPGgxPlN0YXJ0ZXJzPC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4gR2FybGljICYgSGVyYiBGbGF0YnJlYWQgLSBXb29kLWZpcmVkIGFuZCBzZXJ2ZWQgd2l0aCB3aGlwcGVkIGZldGEgYW5kIG9saXZlIHRhcGVuYWRlLiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+IENyaXNweSBDYWxhbWFyaSAtIExpZ2h0bHkgZnJpZWQgYW5kIHNlcnZlZCB3aXRoIGNoaWxpLWxpbWUgYWlvbGkuIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4gSGVpcmxvb20gVG9tYXRvIFNhbGFkIC0gV2l0aCBidWZmYWxvIG1venphcmVsbGEsIGJhc2lsIG9pbCwgYW5kIGFnZWQgYmFsc2FtaWMgZ2xhemUuIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4gUHVtcGtpbiBTb3VwIC0gQ3JlYW15IHJvYXN0ZWQgcHVtcGtpbiB3aXRoIGNvY29udXQgY3JlYW0gYW5kIHRvYXN0ZWQgc2VlZHMuIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm1haW5zXCI+XG4gICAgICAgICAgICAgICAgPGgxPk1haW5zPC9oMT5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4gR3JpbGxlZCBBbmd1cyBTaXJsb2luIC0gMjUwZyBwcmVtaXVtIGN1dCB3aXRoIHJvc2VtYXJ5IGp1cywgZ2FybGljIG1hc2gsIGFuZCBzZWFzb25hbCBncmVlbnMuIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4gUGFuLVNlYXJlZCBCYXJyYW11bmRpIC0gT24gYSBiZWQgb2YgbGVtb24gcmlzb3R0bywgZmluaXNoZWQgd2l0aCBjYXBlciBidXR0ZXIgc2F1Y2UuIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4gU3BpY2VkIENoaWNrcGVhICYgU3dlZXQgUG90YXRvIEN1cnJ5IC0gZWdhbiwgc2VydmVkIHdpdGggamFzbWluZSByaWNlIGFuZCBjb2NvbnV0IHlvZ2h1cnQuIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4gVHJ1ZmZsZSBNdXNocm9vbSBMaW5ndWluZSAtIFRvc3NlZCB3aXRoIGdhcmxpYywgdGh5bWUsIHBhcm1lc2FuLCBhbmQgYSBoaW50IG9mIGNyZWFtLiA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkZXNzZXJ0c1wiPlxuICAgICAgICAgICAgICAgIDxoMT5EZXNzZXJ0czwvaDE+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+IFN0aWNreSBEYXRlIFB1ZGRpbmcgLSBXYXJtLCB3aXRoIGJ1dHRlcnNjb3RjaCBzYXVjZSBhbmQgdmFuaWxsYSBiZWFuIGljZSBjcmVhbS4gPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiBMZW1vbiBUYXJ0IC0gU2VydmVkIHdpdGggcmFzcGJlcnJ5IGNvdWxpcyBhbmQgYSBkb2xsb3Agb2YgY3LDqG1lIGZyYcOuY2hlLiA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+IENob2NvbGF0ZSBNb3Vzc2UgLSBSaWNoIGRhcmsgY2hvY29sYXRlIHdpdGggaGF6ZWxudXQgY3J1bmNoIGFuZCBjaGFudGlsbHkgY3JlYW0uIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4gQ2hlZXNlIEJvYXJkIC0gQSBzZWxlY3Rpb24gb2YgbG9jYWwgY2hlZXNlcywgY3JhY2tlcnMsIGFuZCBob3VzZSBjaHV0bmV5LiA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbn07XG5cbmNvbnN0IGFib3V0UGFnZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb250ZW50RGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgY29udGVudERpdi5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dHBhZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2ICBjbGFzcz1cInRpdGxlXCI+QWJvdXQgVXM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgQXQgW1Jlc3RhdXJhbnQgTmFtZV0sIHdlIGJlbGlldmUgZ3JlYXQgZm9vZCBicmluZ3MgcGVvcGxlIHRvZ2V0aGVyLiBTaW5jZSBvcGVuaW5nIG91ciBkb29ycyBpbiBbWWVhcl0sIHdlIGhhdmUgYmVlbiBkZWRpY2F0ZWQgdG8gY3JlYXRpbmcgbWVtb3JhYmxlIGRpbmluZyBleHBlcmllbmNlcyB0aHJvdWdoIGZyZXNoIGluZ3JlZGllbnRzLCBob25lc3QgZmxhdm9ycywgYW5kIGdlbnVpbmUgaG9zcGl0YWxpdHkuIE91ciB0ZWFtIG9mIHBhc3Npb25hdGUgY2hlZnMgY3JhZnRzIGV2ZXJ5IGRpc2ggd2l0aCBjYXJlLCBibGVuZGluZyBsb2NhbCBwcm9kdWNlIHdpdGggZ2xvYmFsIGluc3BpcmF0aW9uIHRvIGRlbGl2ZXIgYm9sZCwgc2F0aXNmeWluZyBtZWFscy5cbiAgICAgICAgICAgICAgICBMb2NhdGVkIGluIHRoZSBoZWFydCBvZiBbQ2l0eSBvciBOZWlnaGJvcmhvb2RdLCBbUmVzdGF1cmFudCBOYW1lXSBpcyBtb3JlIHRoYW4ganVzdCBhIHBsYWNlIHRvIGVhdCDigJQgaXQgaXMgYSBzcGFjZSB0byByZWxheCwgY29ubmVjdCwgYW5kIGVuam95IHRoZSBzaW1wbGUgcGxlYXN1cmVzLiBXaGV0aGVyIHlvdSBhcmUgaGVyZSBmb3IgYSBjYXN1YWwgbHVuY2gsIGEgc3BlY2lhbCBjZWxlYnJhdGlvbiwgb3IgYW55dGhpbmcgaW4gYmV0d2Vlbiwgd2UgYWltIHRvIG1ha2UgZXZlcnkgdmlzaXQgZmVlbCBsaWtlIGNvbWluZyBob21lLlxuICAgICAgICAgICAgICAgIFdlIGFyZSBwcm91ZCB0byBzdXBwb3J0IGxvY2FsIGZhcm1lcnMsIHBhcnRuZXJzLCBhbmQgYXJ0aXNhbnMsIGFuZCB3ZSBhcmUgY29tbWl0dGVkIHRvIHN1c3RhaW5hYmlsaXR5IGluIGV2ZXJ5dGhpbmcgd2UgZG8g4oCUIGZyb20gc2Vhc29uYWwgbWVudXMgdG8gZWNvLWZyaWVuZGx5IHByYWN0aWNlcy5cbiAgICAgICAgICAgICAgICBUaGFuayB5b3UgZm9yIGNob29zaW5nIFtSZXN0YXVyYW50IE5hbWVdLiBXZSBhcmUgaG9ub3JlZCB0byBzaGFyZSBvdXIgdGFibGUgd2l0aCB5b3UuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbn07XG5cbmV4cG9ydCB7IGhvbWVQYWdlTG9hZCwgbWVudVBhZ2VMb2FkLCBhYm91dFBhZ2VMb2FkIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pageLoad.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;