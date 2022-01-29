
/*****************  create an enum in typescript  ******/ 
enum MatchResul_t {
  HomeWin = 'H', 
  AwayWin = 'A',
  Draw = 'D'
}; 

//i have the value as a string and i want to transform it to an enum value 
//1- possibility 1  : if/else 
function getWinP1(label : string) : MatchResul_t {
  if (label === "H") return MatchResul_t.HomeWin ;
  else if (label === 'A') return MatchResul_t.AwayWin; 
  else return MatchResul_t.Draw; 
}

// possibility 2 : use type assertion for conversion : 
function getWinP2(label : string) : MatchResul_t {
  return label as MatchResul_t ; 
}

/******* generics are available in typescript ******** */

class HoldAnything < TypeOfData > {
  data :  TypeOfData | null = null ; 
}

const holdNumber = new  HoldAnything<number>(); 
const holdString =  new HoldAnything<string>() ;  