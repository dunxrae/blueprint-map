map.on('load', function () {
    console.log("Map loaded");

    // URL of your external GeoJSON file
    const geojsonUrlot67metro = 'polylines/modes-metro.json';
    const geojsonUrlot67intercity = 'polylines/modes-intercity.json';
    const geojsonUrlot67trams = 'polylines/modes-trams.json';
    const geojsonUrlot67rapidbus = 'polylines/modes-rapidbus.json';

    // Add GeoJSON source for polylines
    map.addSource('ot67-metro', {
        'type': 'geojson',
        'data': geojsonUrlot67metro
    });
    map.addSource('ot67-intercity', {
        'type': 'geojson',
        'data': geojsonUrlot67intercity
    });
    map.addSource('ot67-trams', {
        'type': 'geojson',
        'data': geojsonUrlot67trams
    });
    map.addSource('ot67-rapidbus', {
        'type': 'geojson',
        'data': geojsonUrlot67rapidbus
    });

    // OT67 LINES //
    // Add a layer to display the polylines
    map.addLayer({
        'id': 'ot67-metro',
        'type': 'line',
        'source': 'ot67-metro',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round'
        },
        'paint': {
            'line-color': '#fff',
            'line-width': 1.5,
            'line-opacity': 0.5
        }
    });
    map.addLayer({
        'id': 'ot67-intercity',
        'type': 'line',
        'source': 'ot67-intercity',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round',
            'symbol-placement': 'line',
            'text-font': ["Inter Regular"],
            'text-field': 'OT67 Intercity Lines',
        },
        'paint': {
            'line-color': '#fff',
            'line-width': 1.5,
            'line-opacity': 0.5,
            'line-dasharray': [2.5, 2.5]
        }
    });
    map.addLayer({
        'id': 'ot67-trams',
        'type': 'line',
        'source': 'ot67-trams',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round',
            'symbol-placement': 'line',
            'text-font': ["Inter Regular"],
            'text-field': 'OT67 Tram Lines',
        },
        'paint': {
            'line-color': '#fff',
            'line-width': 1,
            'line-opacity': 0.5
        }
    });
    map.addLayer({
        'id': 'ot67-rapidbus',
        'type': 'line',
        'source': 'ot67-rapidbus',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round',
            'symbol-placement': 'line',
            'text-font': ["Inter Regular"],
            'text-field': 'OT67 Rapidbus Lines',
        },
        'paint': {
            'line-color': '#fff',
            'line-width': 0.5,
            'line-opacity': 0.5,
            'line-dasharray': [2.5, 2.5]
        }
    });
    // ^^ OT67 LINES //

    // OT67 LINE TEXT //
    map.addLayer({
        'id': 'ot67-metro-text',
        'type': 'symbol',
        'source': 'ot67-metro',
        'layout': {
            'symbol-placement': 'line',
            'text-font': ["Inter Regular"],
            'text-field': 'OT67 Metro Lines',
            'text-size': 10,
        },
        'paint': {
            'text-color': '#fff',
        }
    });
    map.addLayer({
        'id': 'ot67-intercity-text',
        'type': 'symbol',
        'source': 'ot67-intercity',
        'layout': {
            'symbol-placement': 'line',
            'text-font': ["Inter Regular"],
            'text-field': 'OT67 Intercity Lines',
            'text-size': 10,
        },
        'paint': {
            'text-color': '#fff',
        }
    });
    map.addLayer({
        'id': 'ot67-trams-text',
        'type': 'symbol',
        'source': 'ot67-trams',
        'layout': {
            'symbol-placement': 'line',
            'text-font': ["Inter Regular"],
            'text-field': 'OT67 Tram Lines',
            'text-size': 10,
        },
        'paint': {
            'text-color': '#fff'
        }
    });
    map.addLayer({
        'id': 'ot67-rapidbus-text',
        'type': 'symbol',
        'source': 'ot67-rapidbus',
        'layout': {
            'symbol-placement': 'line',
            'text-font': ["Inter Regular"],
            'text-field': 'OT67 Rapidbus Lines',
            'text-size': 10,
        },
        'paint': {
            'text-color': '#fff'
        }
    });
    // ^^ OT67 LINE TEXT //


    console.log("Polylines added to map");
});