function iniciaMapa(){

    var propiedades = {
        center: { 
             lat: 21.152639, lng:  -101.711598
        },
        zoom: 12
        
    };

    var mapa = document.getElementById("map");

    var map = new google.maps.Map(mapa, propiedades);

    var icono = {
        url: "https://upload.wikimedia.org/wikipedia/commons/8/89/Map_symbol_location_02.png", 
        scaledSize: new google.maps.Size(25, 25),  
        origin: new google.maps.Point(0,0),  
        anchor: new google.maps.Point(0,0) 
    };

    var marker = new google.maps.Marker({
        position: { lat: 0, lng: 0 },
        icon: icono,
        map: map
    });

    var watchId = null;

    const boton = document.getElementById('boton');

    var positionOptions = {
        enableHighAccuracy: true,
        timeout: 10 * 1000,  //10 segundos
        maximumAge: 30 * 1000  //30 segundos
    };


    if(navigator.geolocation){
        boton.addEventListener('click', function(){
            watchId = navigator.geolocation.watchPosition( function(position){
                var lat = position.coords.latitude;
                var lng = position.coords.longitude;
                var coordenadas = lat + ',' + lng;
                var exactitud = position.coords.accuracy ? position.coords.accuracy : 'no disponible';
                var altitud = position.coords.altitude ? position.coords.altitude : 'no disponible';
                var velocidad = position.coords.speed ? position.coords.speed : 'no disponible';
                var fechayhora = (new Date(position.timestamp)).toString();
                const html = `
                    <p>Coordenadas: ${ coordenadas }</p>
                    <p>Exactitud: ${ exactitud }</p>
                    <p>Altitud: ${ altitud }</p>
                    <p>Velocidad: ${ velocidad }</p>
                    <p>Fecha y hora: ${ fechayhora }</p>
                `;
                const datos = document.getElementById('datos');
                datos.innerHTML = html;
                marker.setPosition( new google.maps.LatLng(lat,lng));
                map.panTo( new google.maps.LatLng(lat,lng));
            }, error, positionOptions);
        });
        const botondetener = document.getElementById('botondetener');
        botondetener.addEventListener('click', function(){
            if(watchId !== null){
                navigator.geolocation.clearWatch(watchId);
                const html = `
                    <p>Se detuvo el monitoreo</p>
                `;
                const datos = document.getElementById('datos');
                datos.innerHTML = html;
            }
        });
    }
    function error(positioError){
        console.log(positioError.messsage);
    }
}