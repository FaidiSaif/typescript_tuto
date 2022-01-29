"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matchReader_1 = require("./matchReader");
const matchResult_1 = require("./matchResult");
let reader = new matchReader_1.MatchReader('football.csv');
reader.read();
let manUnitedWind = 0;
for (let match of reader.data) {
    if (match[1] === 'Man United' && match[5] === matchResult_1.MatchResult.HomeWin) {
        manUnitedWind++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult_1.MatchResult.AwayWin) {
        manUnitedWind++;
    }
}
console.log(`Man United won ${manUnitedWind} games`);
