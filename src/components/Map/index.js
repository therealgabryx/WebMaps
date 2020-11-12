import React, { useEffect } from 'react'
import './index.css'

// Mapbox directions
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

export default function Index() {
    let mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
    mapboxgl.accessToken = 'pk.eyJ1IjoidGhlcmVhbGdhYnJ5eCIsImEiOiJja2hmZXdjYmcwN3BmMnlxcTI3M3FlczIzIn0.JHdtdPNZbQmPNRxIO1T0Yw';

    useEffect(() => {        
        navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true })

    }, []) 

    function successLocation(position) {
        setupMap([ position.coords.longitude, position.coords.latitude ])
    } 

    function errorLocation() {
        setupMap([ 12.5674, 41.8719 ])
    } 

    function setupMap(center) {
        
        let map = new mapboxgl.Map({
          container: 'Map',
          style: 'mapbox://styles/mapbox/dark-v10',
          center: center,
          zoom: 16
        });

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-right');

        var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving'
        });
        
        map.addControl(directions, 'top-left');
    } 

    return (
        <div className='Map' id='Map'>
            loading
        </div>
    )
}
