"use strict";

function initMap() {
    let myCenter = {
        lat:49.553517,
        lng:25.594767
    };
    let markers = [
        {
            lat:48.620674,
            lng:22.295134,
            title: "W.P.E.S. - Uzhgorod",
        },

        {
            lat:48.539599,
            lng:22.999822,
            title: "W.P.E.S. - Svaliava",
        },

        {
            lat: 50.4501,
            lng: 30.5234,
            title: "W.P.E.S. - Kyiv",
        }
    ];
    let map = new google.maps.Map(document.getElementById("google-map"),{
        zoom: 7,
        scrollwheel: true,
        center: myCenter
    });
    markers.forEach(function(event){
        let marker = new google.maps.Marker({
            position: event,
            map: map,
            title: event.title,
    });
    let infoWindow = new google.maps.InfoWindow({
        content: "<span>" + event.title + "</span>"
    });
    google.maps.event.addListener(marker,"click", function() {
        infoWindow.open(map, marker);
    })
})
}