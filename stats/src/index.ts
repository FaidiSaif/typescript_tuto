import { MatchReader } from './matchReader'; 
import { MatchResult } from './matchResult' ; 


let reader  = new MatchReader('football.csv');
reader.read(); 

let manUnitedWind =  0; 
for(let match of reader.data) {
  if ( match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
    manUnitedWind++; 
  }
  else if ( match[2] === 'Man United' && match[5] ===MatchResult.AwayWin){
    manUnitedWind++; 
  }
}

console.log(`Man United won ${manUnitedWind} games`)
