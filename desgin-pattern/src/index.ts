import  { User }    from  './User'
import  { Company } from './Company'


/** retrive the DOM container for the map */
let mapDiv =  document.getElementById('map') as Element; // this a  casting ! 

/** Create a map Object */
new google.maps.Map(mapDiv, {
  zoom: 1,
  center: {
    lng:0,
    lat:0
  }
})

