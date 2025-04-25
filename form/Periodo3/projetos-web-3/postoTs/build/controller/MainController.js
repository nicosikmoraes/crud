"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const combustivel_1 = __importDefault(require("../model/combustivel"));
const operations_1 = __importDefault(require("../model/operations"));
const posto_1 = __importDefault(require("../model/posto"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
class MainController {
    constructor() {
        this.operations = new operations_1.default(this);
        new MainScreen_1.default(this);
    }
    getNewCombustivel() {
        return new combustivel_1.default();
    }
    getNewPosto() {
        return new posto_1.default();
    }
}
exports.default = MainController;
