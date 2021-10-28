/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Drawable.ts":
/*!*************************!*\
  !*** ./src/Drawable.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar Drawable = /** @class */ (function () {\n    function Drawable(canvas, image, positionX, positionY, imageWidth, imageHeight) {\n        this.context = canvas.getContext(\"2d\");\n        this.image = image;\n        this.imageWidth = imageWidth;\n        this.imageHeight = imageHeight;\n        this.positionX = positionX;\n        this.positionY = positionY;\n        this.screenWidth = canvas.width;\n        this.screenHeight = canvas.height;\n    }\n    Drawable.prototype.draw = function () {\n        this.context.drawImage(this.image, this.positionX, this.positionY, this.imageWidth, this.imageHeight);\n    };\n    return Drawable;\n}());\nexports.default = Drawable;\n\n\n//# sourceURL=webpack://fruit-game/./src/Drawable.ts?");

/***/ }),

/***/ "./src/FallingObject.ts":
/*!******************************!*\
  !*** ./src/FallingObject.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Drawable_1 = __webpack_require__(/*! ./Drawable */ \"./src/Drawable.ts\");\nvar FallingObject = /** @class */ (function (_super) {\n    __extends(FallingObject, _super);\n    function FallingObject(canvas, imagePath, sizeX, sizeY) {\n        var _this = _super.call(this, canvas, imagePath, Math.random() * canvas.width, -70, sizeX, sizeY) || this;\n        _this.speedY = 4;\n        return _this;\n    }\n    FallingObject.prototype.move = function () {\n        this.positionY += this.speedY;\n    };\n    FallingObject.prototype.isOutOfScreen = function () {\n        return this.positionY > this.screenHeight;\n    };\n    FallingObject.prototype.attPoints = function (points) {\n        return points + this.points;\n    };\n    return FallingObject;\n}(Drawable_1[\"default\"]));\nexports.default = FallingObject;\n\n\n//# sourceURL=webpack://fruit-game/./src/FallingObject.ts?");

/***/ }),

/***/ "./src/Fruit.ts":
/*!**********************!*\
  !*** ./src/Fruit.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar FallingObject_1 = __webpack_require__(/*! ./FallingObject */ \"./src/FallingObject.ts\");\nvar Fruit = /** @class */ (function (_super) {\n    __extends(Fruit, _super);\n    function Fruit(canvas, imagePath, sizeX, sizeY) {\n        return _super.call(this, canvas, imagePath, sizeX, sizeY) || this;\n    }\n    return Fruit;\n}(FallingObject_1[\"default\"]));\nexports.default = Fruit;\n\n\n//# sourceURL=webpack://fruit-game/./src/Fruit.ts?");

/***/ }),

/***/ "./src/Fruits/Apple.ts":
/*!*****************************!*\
  !*** ./src/Fruits/Apple.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Fruit_1 = __webpack_require__(/*! ../Fruit */ \"./src/Fruit.ts\");\nvar apple = document.querySelector(\"#apple\");\nvar Apple = /** @class */ (function (_super) {\n    __extends(Apple, _super);\n    function Apple(canvas) {\n        return _super.call(this, canvas, apple, 61, 67) || this;\n    }\n    Apple.prototype.increaseScore = function (points) {\n        this.points = 10;\n    };\n    return Apple;\n}(Fruit_1[\"default\"]));\nexports.default = Apple;\n\n\n//# sourceURL=webpack://fruit-game/./src/Fruits/Apple.ts?");

/***/ }),

/***/ "./src/Fruits/Banana.ts":
/*!******************************!*\
  !*** ./src/Fruits/Banana.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Fruit_1 = __webpack_require__(/*! ../Fruit */ \"./src/Fruit.ts\");\nvar banana = document.querySelector(\"#banana\");\nvar Banana = /** @class */ (function (_super) {\n    __extends(Banana, _super);\n    function Banana(canvas) {\n        return _super.call(this, canvas, banana, 61, 67) || this;\n    }\n    Banana.prototype.increaseScore = function (points) {\n        return points * 2;\n    };\n    return Banana;\n}(Fruit_1[\"default\"]));\nexports.default = Banana;\n\n\n//# sourceURL=webpack://fruit-game/./src/Fruits/Banana.ts?");

/***/ }),

/***/ "./src/Fruits/FruitsList.ts":
/*!**********************************!*\
  !*** ./src/Fruits/FruitsList.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar Orange_1 = __webpack_require__(/*! ./Orange */ \"./src/Fruits/Orange.ts\");\nvar Strawberry_1 = __webpack_require__(/*! ./Strawberry */ \"./src/Fruits/Strawberry.ts\");\nvar Apple_1 = __webpack_require__(/*! ./Apple */ \"./src/Fruits/Apple.ts\");\nvar Watermelon_1 = __webpack_require__(/*! ./Watermelon */ \"./src/Fruits/Watermelon.ts\");\nvar Banana_1 = __webpack_require__(/*! ./Banana */ \"./src/Fruits/Banana.ts\");\nexports.default = { Banana: Banana_1[\"default\"], Orange: Orange_1[\"default\"], Apple: Apple_1[\"default\"], Strawberry: Strawberry_1[\"default\"], Watermelon: Watermelon_1[\"default\"] };\n\n\n//# sourceURL=webpack://fruit-game/./src/Fruits/FruitsList.ts?");

/***/ }),

/***/ "./src/Fruits/Orange.ts":
/*!******************************!*\
  !*** ./src/Fruits/Orange.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Fruit_1 = __webpack_require__(/*! ../Fruit */ \"./src/Fruit.ts\");\nvar orange = document.querySelector(\"#orange\");\nvar Orange = /** @class */ (function (_super) {\n    __extends(Orange, _super);\n    function Orange(canvas) {\n        return _super.call(this, canvas, orange, 61, 67) || this;\n    }\n    Orange.prototype.increaseScore = function (points) {\n        this.points = 5;\n    };\n    return Orange;\n}(Fruit_1[\"default\"]));\nexports.default = Orange;\n\n\n//# sourceURL=webpack://fruit-game/./src/Fruits/Orange.ts?");

/***/ }),

/***/ "./src/Fruits/Strawberry.ts":
/*!**********************************!*\
  !*** ./src/Fruits/Strawberry.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Fruit_1 = __webpack_require__(/*! ../Fruit */ \"./src/Fruit.ts\");\nvar strawberry = document.querySelector(\"#strawberry\");\nvar Strawberry = /** @class */ (function (_super) {\n    __extends(Strawberry, _super);\n    function Strawberry(canvas) {\n        return _super.call(this, canvas, strawberry, 61, 67) || this;\n    }\n    Strawberry.prototype.increaseScore = function (points) {\n        this.points = 10;\n    };\n    return Strawberry;\n}(Fruit_1[\"default\"]));\nexports.default = Strawberry;\n\n\n//# sourceURL=webpack://fruit-game/./src/Fruits/Strawberry.ts?");

/***/ }),

/***/ "./src/Fruits/Watermelon.ts":
/*!**********************************!*\
  !*** ./src/Fruits/Watermelon.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Fruit_1 = __webpack_require__(/*! ../Fruit */ \"./src/Fruit.ts\");\nvar watermelon = document.querySelector(\"#watermelon\");\nvar Watermelon = /** @class */ (function (_super) {\n    __extends(Watermelon, _super);\n    function Watermelon(canvas) {\n        return _super.call(this, canvas, watermelon, 61, 67) || this;\n    }\n    Watermelon.prototype.increaseScore = function (points) {\n        this.points = 10;\n    };\n    return Watermelon;\n}(Fruit_1[\"default\"]));\nexports.default = Watermelon;\n\n\n//# sourceURL=webpack://fruit-game/./src/Fruits/Watermelon.ts?");

/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar FruitsList_1 = __webpack_require__(/*! ./Fruits/FruitsList */ \"./src/Fruits/FruitsList.ts\");\nvar Game = /** @class */ (function () {\n    function Game(canvas, player) {\n        this.lives = 4;\n        this.score = 0;\n        this.gameOverText = document.querySelector(\".gameOver\");\n        this.fallingObjects = [];\n        this.canvas = canvas;\n        this.player = player;\n        this.context = canvas.getContext(\"2d\");\n        this.screenHeight = canvas.height;\n        this.screenWidth = canvas.width;\n    }\n    Game.prototype.start = function () {\n        var _this = this;\n        this.gameIntervalId = window.setInterval(function () { return _this.loop(); }, 1000 / 60);\n        this.fruitIntervalId = window.setInterval(function () { return _this.dropFruit(); }, 700);\n    };\n    Game.prototype.loop = function () {\n        this.updateState();\n        this.render();\n        if (this.lives <= 0)\n            this.end();\n    };\n    Game.prototype.updateState = function () {\n        var _this = this;\n        this.fallingObjects.forEach(function (object) { return object.move(); });\n        this.fallingObjects.forEach(function (object) {\n            if (object.isOutOfScreen()) {\n                _this.fallingObjects = _this.fallingObjects.filter(function (obj) { return obj !== object; });\n            }\n        });\n        this.checkCollisions();\n    };\n    Game.prototype.render = function () {\n        this.context.clearRect(0, 0, this.screenWidth, this.screenHeight);\n        this.player.draw();\n        this.fallingObjects.forEach(function (object) { return object.draw(); });\n    };\n    Game.prototype.dropFruit = function () {\n        var randomFruit = this.getAleatoryFruit();\n        this.fallingObjects.push(randomFruit);\n    };\n    Game.prototype.getAleatoryFruit = function () {\n        var fruit;\n        var aleatoryNumber = this.drawnNumber();\n        if (aleatoryNumber > 70)\n            fruit = new FruitsList_1[\"default\"].Orange(this.canvas);\n        if (aleatoryNumber > 40 && aleatoryNumber <= 70)\n            fruit = new FruitsList_1[\"default\"].Apple(this.canvas);\n        if (aleatoryNumber > 20 && aleatoryNumber <= 40)\n            fruit = new FruitsList_1[\"default\"].Watermelon(this.canvas);\n        if (aleatoryNumber > 5 && aleatoryNumber <= 20)\n            fruit = new FruitsList_1[\"default\"].Strawberry(this.canvas);\n        if (aleatoryNumber <= 5)\n            fruit = new FruitsList_1[\"default\"].Banana(this.canvas);\n        return fruit;\n    };\n    Game.prototype.drawnNumber = function () {\n        return Math.random() * 100;\n    };\n    Game.prototype.checkCollisions = function () {\n        var _this = this;\n        this.fallingObjects.forEach(function (object) {\n            if (_this.player.checkCollision(object)) {\n                var updatedScore = object.attPoints(_this.score);\n                _this.updateScore(updatedScore);\n                _this.fallingObjects = _this.fallingObjects.filter(function (obj) { return obj !== object; });\n            }\n        });\n    };\n    Game.prototype.updateScore = function (points) {\n        this.score = points;\n    };\n    Game.prototype.clearScreen = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    Game.prototype.end = function () {\n        this.clearIntervals();\n        this.gameOverText.setAttribute(\"class\", \"gameOver\");\n    };\n    Game.prototype.clearIntervals = function () {\n        clearInterval(this.gameIntervalId);\n        clearInterval(this.fruitIntervalId);\n    };\n    return Game;\n}());\nexports.default = Game;\n\n\n//# sourceURL=webpack://fruit-game/./src/Game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/player.ts\");\nvar Game_1 = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\nvar canvas = document.querySelector(\"#canvas\");\nvar gamePlay = document.querySelector(\"#gamePlay\");\nvar screenWidth = gamePlay.clientWidth;\nvar screenHeight = gamePlay.clientHeight;\ncanvas.width = screenWidth;\ncanvas.height = screenHeight;\nvar alien = document.querySelector(\"#alien\");\nvar player = new player_1[\"default\"](canvas, alien);\nvar game = new Game_1[\"default\"](canvas, player);\nvar instructionToHide = document.querySelector(\".instructions\");\nfunction hideInitialInstructions() {\n    instructionToHide.setAttribute(\"class\", \"instructions hide\");\n}\ninstructionToHide.addEventListener(\"click\", function () {\n    hideInitialInstructions();\n    game.start();\n});\nwindow.setTimeout(function () { return player.draw(); }, 100);\nwindow.addEventListener(\"keydown\", function (e) { return player.getCommandToMove(e); });\ncanvas.addEventListener(\"touchmove\", function (e) { return player.getCommandToMove(e); });\n\n\n//# sourceURL=webpack://fruit-game/./src/index.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Drawable_1 = __webpack_require__(/*! ./Drawable */ \"./src/Drawable.ts\");\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player(canvas, image) {\n        var _this = _super.call(this, canvas, image, canvas.width / 2, canvas.height - 97, 80, 100) || this;\n        _this.speed = 25;\n        _this.width = 80;\n        _this.height = 100;\n        return _this;\n    }\n    Player.prototype.getCommandToMove = function (command) {\n        if (command.key) {\n            var keyPressed = command.key;\n            var acceptedMoves = { ArrowLeft: true, ArrowRight: true };\n            if (acceptedMoves[keyPressed])\n                return this.moveByArrowKey(command.key);\n        }\n        if (command.touches) {\n            return this.moveByTouch(command.touches[0].clientX);\n        }\n    };\n    Player.prototype.moveByArrowKey = function (keyPressed) {\n        if (keyPressed === \"ArrowLeft\" && this.positionX > 0) {\n            this.positionX -= this.speed;\n        }\n        if (keyPressed === \"ArrowRight\" && this.positionX < this.screenWidth - 80) {\n            this.positionX += this.speed;\n        }\n    };\n    Player.prototype.moveByTouch = function (position) {\n        this.positionX = position;\n    };\n    Player.prototype.checkCollision = function (object) {\n        var distance = Math.sqrt(Math.pow((this.positionX - object.positionX), 2) +\n            Math.pow((this.positionY - object.positionY), 2));\n        return distance < this.height / 2 + object.imageHeight / 2;\n    };\n    return Player;\n}(Drawable_1[\"default\"]));\nexports.default = Player;\n\n\n//# sourceURL=webpack://fruit-game/./src/player.ts?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;