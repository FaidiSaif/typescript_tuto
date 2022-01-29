"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
class CsvFileReader {
    constructor(filename) {
        this.filename = filename;
        this.data = [];
    }
    // read the csv file and store the values in data
    read() {
        this.data = fs_1.default.readFileSync(this.filename, {
            encoding: 'utf-8' // tells the function to return a text (by default it returns a buffer data)
        }).split('\n')
            .map((row) => {
            return this.mapRow(row.split(','));
        });
    }
}
exports.CsvFileReader = CsvFileReader;
