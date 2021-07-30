// AFRAME.registerComponent("rotation-reader", {
//     tick: function () {
//         // `this.el` is the element.
//         // `object3D` is the three.js object.

//         // `rotation` is a three.js Euler using radians. `quaternion` also available.
//         console.log(this.el.object3D.rotation);

//         // `position` is a three.js Vector3.
//         console.log(this.el.object3D.position);
//     },
// });

var json = `{ "id": "0", "name": "Bleiswijk", "long": "4.51375661417842", "lat": "52.00042627304996"}` 

function fillData() {
    var mydata = JSON.parse(json);
    alert(mydata.id);
    alert(mydata.name);
    alert(mydata.long);
    alert(mydata.lat);
}

// --- 


const entityModel = {
    url: "./assets/windTurbineBig.glb",
    position: "0 0 -10",
    rotation: "0 0 0",
    scale: "0.05 0.05 0.05",
    gps: "latitude: 52.00042627304996; longitude: 4.51375661417842;"
}

const createEntity = (model) => {
    let entity = document.createElement('a-entity');
    entity.setAttribute('scale', model.scale);
    entity.setAttribute('rotation', model.rotation);
    entity.setAttribute('position', model.position);
    entity.setAttribute('gltf-model', model.url);
    entity.setAttribute('look-at', "[gps-camera]");
    entity.setAttribute('gps-entity-place', model.gps);

    return entity;
}

function removeEntity() {
    const entity = document.querySelector('a-entity[gltf-model]');
    if (entity)
        entity.parentNode.removeChild(entity);
}
function addEntity() {
    if (!document.querySelector('a-entity[gltf-model]')) {
        const entity = createEntity(entityModel);
        const scene = document.querySelector('a-scene');
        scene.appendChild(entity);
    }
}

function ARjs(){
    const scene = document.querySelector('a-scene');
    console.log(scene)
    // scene.setAttribute('arjs-webcam-texture', '');

    document.querySelectorAll('a-entity').forEach(e => {
        e.parentNode.removeChild(e);
        e.destroy();
    });

    scene.appendChild(createEntity(entityModel));
}