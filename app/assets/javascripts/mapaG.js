//CARGA EL MAPA CON LOS ITEMS
function createMap(items){
  var handler = Gmaps.build('Google');
  handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
    markers = handler.addMarkers(items);

    handler.bounds.extendWith(markers);
    handler.fitMapToBounds();


  });
}

//****************************************************************************************************


// CARGA EL MAPA CON LOS ITEMS Y EVENTO QUE DEVUELVE POSICION LAT LNG DE DONDE SE HAGA CLICK
// function createMap(items){
// var handler2 = Gmaps.build('Google');
// handler2.buildMap({ provider: { zoom: 1 }, internal: {id: 'map'}}, function(){
//   // I assume this is the way you retrieve the amrkers array
//   var json_data = items;
//   var markers = handler2.addMarkers(json_data);

//   _.each(json_data, function(json, index){
//       var marker  = markers[index];
//       json.marker = marker;
//       google.maps.event.addListener(handler2.getMap(), 'click', function( event ){
//         var latlong = document.getElementById("latlong");
//         latlong.innerHTML =( "Latitude: "+event.latLng.lat()+" "+", longitude: "+event.latLng.lng() );
//       });
//   });
//   handler2.bounds.extendWith(markers);
//   handler2.fitMapToBounds();
// });
// }


// handler = Gmaps.build('Google');
// handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
//   markers = handler.addMarkers(
//     [
//       {
//         "lat": -55.9006717,
//         "lng": -27.3906026,
//       }
//     ]
//   ,{ draggable: true}
//   );

//   handler.bounds.extendWith(markers);
//   handler.fitMapToBounds();

//   // Move existing marker
//   google.maps.event.addListener(markers[0].serviceObject, 'dragend', function() {
//     updateFormLocation(this.getPosition());
//   });
// });


//***********************************************************************************************************

// CARGA EL MAPA CON UN SOLO ITEM, ES POSIBLE ARRASTRAR DICHO ITEM, Y MUESTRA LNG Y LAT

// function createMap(items){
//   var handler = Gmaps.build('Google');
//   handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
//    // markers = handler.addMarkers(items);
//       markers = handler.addMarkers(
//     [
//       {
//         "lng": -55.9006717,
//         "lat": -27.3906026,
//       }
//     ]
//   ,{ draggable: true}
//   );
//     handler.bounds.extendWith(markers);
//     handler.fitMapToBounds();
// //this is new
//   google.maps.event.addListener(markers[0].serviceObject, 'dragend', function() {
//     updateFormLocation(this.getPosition());
//   });
// //end

//   });
// }


// // Update form attributes with given coordinates
// function updateFormLocation(latLng) {
// 	var latitude = document.getElementById("latitude");
// 	var longitude = document.getElementById("longitude");
// 	latitude.innerHTML=(latLng.lat());
// 	longitude.innerHTML=(latLng.lng());

// }


//**********************************************************************************