"use strict";
/*****************  create an enum in typescript  ******/
var MatchResul_t;
(function (MatchResul_t) {
    MatchResul_t["HomeWin"] = "H";
    MatchResul_t["AwayWin"] = "A";
    MatchResul_t["Draw"] = "D";
})(MatchResul_t || (MatchResul_t = {}));
;
//i have the value as a string and i want to transform it to an enum value 
//1- possibility 1  : if/else 
function getWinP1(label) {
    if (label === "H")
        return MatchResul_t.HomeWin;
    else if (label === 'A')
        return MatchResul_t.AwayWin;
    else
        return MatchResul_t.Draw;
}
// possibility 2 : use type assertion for conversion : 
function getWinP2(label) {
    return label;
}
/******* generics are available in typescript ******** */
class HoldAnything {
    constructor() {
        this.data = null;
    }
}
const holdNumber = new HoldAnything();
const holdString = new HoldAnything();
