//////////// 3D MODEL INJECTION /////////////
// eslint-disable-next-line no-undef
const tb = (window.tb = new Threebox(
    map,
    map.getCanvas().getContext('webgl'),
    {
        defaultLights: true
    }
));

// MODEL: NEPEAN LINE
map.on('style.load', () => {
    map.addLayer({
        id: '3dmodel-nepeanline',
        type: 'custom',
        renderingMode: '3d',
        onAdd: function () {
            const scale = 1;
            const options = {
                obj: '3dmodels/MetroBasic-NepeanLine002a.glb',
                type: 'gltf',
                scale: { x: scale, y: scale, z: 1 },
                units: 'meters',
                rotation: { x: 90, y: -90, z: 0 }
            };

            tb.loadObj(options, (model) => {
                // USED LAT/LONG FROM POINT IN SKETCHUP
                // MODEL LOADS USING LOWER-NORTHWEST POINT OF MODEL BBOX.
                // ROTATE 270 FOR GENERAL ALIGNMENT, +0.5 FOR SPECIFIC ALIGNMENT, NOT SURE WHY.
                model.setCoords([-75.73846775892447, 45.36621513035374]);
                model.setRotation({ x: 0, y: 0, z: 270.5 });
                tb.add(model);
            });
        },

        render: function () {
            tb.update();
        }
    });

// MODEL: SKYLINE AVE
/*

    map.addLayer({
        id: '3dmodel-skylineave',
        type: 'custom',
        renderingMode: '3d',
        onAdd: function () {
            const scale = 1;
            const options = {
                obj: '3dmodels/RAEBP-SkylineAve-rev001.glb',
                type: 'gltf',
                scale: { x: scale, y: scale, z: 1 },
                units: 'meters',
                rotation: { x: 90, y: -90, z: 0 }
            };

            tb.loadObj(options, (model) => {
                // USED LAT/LONG FROM POINT IN SKETCHUP
                // MODEL LOADS USING LOWER-NORTHWEST POINT OF MODEL BBOX.
                // ROTATE 270 FOR GENERAL ALIGNMENT, +0.5 FOR SPECIFIC ALIGNMENT, NOT SURE WHY.
                model.setCoords([-75.73576395600678, 45.36516061733065]);
                model.setRotation({ x: 0, y: 0, z: 270.5 });
                tb.add(model);
            });
        },

        render: function () {
            tb.update();
        }
    });
*/


});