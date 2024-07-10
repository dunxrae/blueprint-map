map.on('load', function () {
    console.log("Map loaded");

    // URL of your external GeoJSON file
    const geojsonUrlcnbasicoutline = 'polylines/CN-basicoutline.geojson';
    const geojsonUrlcqbasicoutline = 'polylines/CQ-basicoutline.geojson';

    map.addSource('cn-basicoutline', {
        'type': 'geojson',
        'data': geojsonUrlcnbasicoutline
    });
    map.addSource('cq-basicoutline', {
        'type': 'geojson',
        'data': geojsonUrlcqbasicoutline
    });

    // CENTRAL NEPEAN
    map.addLayer({
        'id': 'cnbasicoutline-fill',
        'type': 'fill',
        'source': 'cn-basicoutline',
        'layout': {},
        'paint': {
            'fill-antialias': true,
            'fill-color': '#ffffff',
            'fill-opacity': 0.1,
        }
    });
    map.addLayer({
        'id': 'cnbasicoutline-line',
        'type': 'line',
        'source': 'cn-basicoutline',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round',
        },
        'paint': {
            'line-color': '#fff',
            'line-width': 1.5,
            'line-opacity': 1,
            'line-dasharray': [2.5, 7.5]

        }
    });
    map.addLayer({
        'id': 'cnbasicoutline-text',
        'type': 'symbol',
        'source': 'cn-basicoutline',
        'layout': {
            'symbol-placement': 'line',
            'symbol-spacing': 100,
            'text-font': ["Inter Regular"],
            'text-field': 'Central Nepean',
            'text-size': 15,
        },
        'paint': {
            'text-color': '#fff',
        }
    });

    // COLLEGE QUARTER
    map.addLayer({
        'id': 'cqbasicoutline-fill',
        'type': 'fill',
        'source': 'cq-basicoutline',
        'layout': {},
        'paint': {
            'fill-antialias': true,
            'fill-color': '#ffffff',
            'fill-opacity': 0.1,
        }
    });
    map.addLayer({
        'id': 'cqbasicoutline-line',
        'type': 'line',
        'source': 'cq-basicoutline',
        'layout': {
            'line-join': 'round',
            'line-cap': 'round',
        },
        'paint': {
            'line-color': '#fff',
            'line-width': 1.5,
            'line-opacity': 1,
            'line-dasharray': [2.5, 7.5]

        }
    });
    map.addLayer({
        'id': 'cqbasicoutline-text',
        'type': 'symbol',
        'source': 'cq-basicoutline',
        'layout': {
            'symbol-placement': 'line',
            'symbol-spacing': 100,
            'text-font': ["Inter Regular"],
            'text-field': 'College Quarter',
            'text-size': 15,
        },
        'paint': {
            'text-color': '#fff',
        }
    });


    console.log("Polylines added to map");
});