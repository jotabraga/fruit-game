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

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nexports.__esModule = true;\nvar Game = /** @class */ (function () {\n    function Game(canvas, player) {\n        this.lives = 4;\n        this.score = 0;\n        this.gameOverText = document.querySelector(\".gameOver\");\n        this.canvas = canvas;\n        this.player = player;\n        this.context = canvas.getContext(\"2d\");\n        this.screenHeight = canvas.height;\n        this.screenWidth = canvas.width;\n    }\n    Game.prototype.start = function () {\n        var _this = this;\n        this.gameIntervalId = window.setInterval(function () { return _this.loop(); }, 1000 / 60);\n    };\n    Game.prototype.loop = function () {\n        this.render();\n        if (this.lives <= 0)\n            this.end();\n    };\n    Game.prototype.render = function () {\n        this.clearScreen();\n        this.player.draw();\n    };\n    Game.prototype.clearScreen = function () {\n        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    };\n    // updateScore(newScore){\n    //   const divScore = document.querySelector(\".score\") as HTMLElement;\n    //   if (newScore === 2*this.score){\n    //     divScore.classList.add(\"highlight\");\n    //     setTimeout(() => divScore.classList.remove(\"highlight\"), 200);\n    //   }\n    //   this.score = newScore;\n    //   divScore.innerHTML = \"Score: \" + this.score.toFixed(1);\n    // }\n    Game.prototype.end = function () {\n        this.clearIntervals();\n        this.gameOverText.setAttribute(\"class\", \"gameOver\");\n    };\n    Game.prototype.clearIntervals = function () {\n        clearInterval(this.gameIntervalId);\n    };\n    return Game;\n}());\nexports.default = Game;\n\n\n//# sourceURL=webpack://fruit-game/./src/Game.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nexports.__esModule = true;\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/player.ts\");\nvar Game_1 = __webpack_require__(/*! ./Game */ \"./src/Game.ts\");\nvar canvas = document.querySelector(\"#canvas\");\nvar gamePlay = document.querySelector(\"#gamePlay\");\nvar screenWidth = gamePlay.clientWidth;\nvar screenHeight = gamePlay.clientHeight;\ncanvas.width = screenWidth;\ncanvas.height = screenHeight;\nvar alien = document.querySelector(\"#alien\");\nvar player = new player_1[\"default\"](canvas, alien);\nvar game = new Game_1[\"default\"](canvas, player);\nfunction hideInitialInstructions() {\n    var instructionToHide = document.querySelector(\".instructions\");\n    instructionToHide.setAttribute(\"class\", \"instructions hide\");\n}\nwindow.addEventListener(\"click\", function () {\n    hideInitialInstructions();\n    game.start();\n});\nwindow.setTimeout(function () { return player.draw(); }, 100);\nwindow.addEventListener('keydown', function (e) { return player.getCommandToMove(e); });\ncanvas.addEventListener('touchmove', function (e) { return player.getCommandToMove(e); });\n\n\n//# sourceURL=webpack://fruit-game/./src/index.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nexports.__esModule = true;\nvar Drawable_1 = __webpack_require__(/*! ./Drawable */ \"./src/Drawable.ts\");\nvar Player = /** @class */ (function (_super) {\n    __extends(Player, _super);\n    function Player(canvas, image) {\n        var _this = _super.call(this, canvas, image, canvas.width / 2, canvas.height - 97, 80, 100) || this;\n        _this.speed = 15;\n        _this.width = 80;\n        _this.height = 100;\n        return _this;\n    }\n    Player.prototype.getCommandToMove = function (command) {\n        if (command.key) {\n            var keyPressed = command.keyPressed;\n            var acceptedMoves = { ArrowLeft: true, ArrowRight: true };\n            if (acceptedMoves[keyPressed])\n                return this.moveByArrowKey(command.key);\n        }\n        if (command.touches) {\n            return this.moveByTouch(command.touches[0].clientX);\n        }\n    };\n    Player.prototype.moveByArrowKey = function (keyPressed) {\n        if (keyPressed === 'ArrowLeft' && this.positionX > 0) {\n            this.positionX -= this.speed;\n        }\n        if (keyPressed === 'ArrowRight' && this.positionX < this.screenWidth) {\n            this.positionX += this.speed;\n        }\n    };\n    Player.prototype.moveByTouch = function (position) {\n        this.positionX = position;\n    };\n    return Player;\n}(Drawable_1[\"default\"]));\nexports.default = Player;\n\n\n//# sourceURL=webpack://fruit-game/./src/player.ts?");

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