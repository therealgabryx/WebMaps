import React, { useEffect } from 'react'
import './index.css'

export default function Index() {
    var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoidGhlcmVhbGdhYnJ5eCIsImEiOiJja2hmZXdjYmcwN3BmMnlxcTI3M3FlczIzIn0.JHdtdPNZbQmPNRxIO1T0Yw';

    useEffect(() => {        
        navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

    }, []) 

    function successLocation(position) {
        setupMap([ position.coords.longitude, position.coords.latitude ])
    } 

    function errorLocation() {
        const ref = document.querySelector('.Map')
        ref.innerHTML = 'error'
    } 

    function setupMap(center) {
        
        let map = new mapboxgl.Map({
          container: 'Map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: center,
          zoom: 16
        });
    } 

    return (
        <div className='Map' id='Map'>
            loading
        </div>
    )
}
