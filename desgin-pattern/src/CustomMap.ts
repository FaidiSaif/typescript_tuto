

export interface Mappable {
  location : {
    lng:number,
    lat:number
  };
  
  getContent(): string; 
}

export class CustomMap {

  private googleMap : google.maps.Map ; 

  constructor(divID : string) {
    this.googleMap = new google.maps.Map( document.getElementById(divID) as Element, {
      zoom: 1,
      center: {
        lng:0,
        lat:0
      }
    });
  }


  /** Create a Marker for the specified Mappable object */
  addMarker( mappable : Mappable): void {
    /* Create a marker */
    const marker  = new google.maps.Marker(
      {
        map : this.googleMap,
        position : {
          lat : mappable.location.lat, 
          lng : mappable.location.lng
        }
      });

      /* create a a popup window when the marker clicked with the specified content */
      marker.addListener('click' , () => {
        const infoWindow  = new google.maps.InfoWindow({
          content : mappable.getContent(); 
        });

      /* open the Window once created */
        infoWindow.open(this.googleMap , marker); 
      }); 
  }
} /** Class END */