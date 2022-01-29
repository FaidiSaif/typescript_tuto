import fs from 'fs'; 





export abstract class CsvFileReader <T> {
  public data : T [] = [] ;
  
  constructor (public filename : string) {}

  // read the csv file and store the values in data
  read (): void {
    this.data = fs.readFileSync(this.filename , {
      encoding : 'utf-8' // tells the function to return a text (by default it returns a buffer data)
    }).split('\n')
      .map((row : string ) : T => {
      return this.mapRow(row.split(','))
    }); 
  }

  abstract mapRow(row:  string[]) : T ; 





}