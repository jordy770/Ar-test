// AFRAME.registerComponent("rotation-reader", {
//     tick: function () {
//         // `this.el` is the element.
//         // `object3D` is the three.js object.

//         // `rotation` is a three.js Euler using radians. `quaternion` also available.
//         console.log(this.el.object3D.rotation);

//         // `` is a three.js Vector3.
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
    scale: "0.05 0.05 0.05",
    gps: "latitude: 52.00042627304996; longitude: 4.51375661417842;"
}

const createEntity = (model) => {
    let entity = document.createElement('a-entity');
    entity.setAttribute("look-at", "[gps-camera]");
    entity.setAttribute("gltf-model", model.url);
    entity.setAttribute("scale", model.scale);
    entity.setAttribute("gps-entity-place", model.gps);

    console.log(entity)
    return entity;
}

function removeEntity() {
    const entity = document.querySelector('a-entity[gltf-model]');
    if (entity)
        entity.parentNode.removeChild(entity);
        console.log("Remove entity")
}
function addEntity() {
    if (!document.querySelector('a-entity[gltf-model]')) {
        const entity = createEntity(entityModel);
        const scene = document.querySelector('a-scene');
        scene.appendChild(entity);
        console.log("add entity")
    }
}

function changeEntity() {
    const entity = document.querySelector('a-entity[gltf-model]');
    entity.setAttribute('gps-entity-place', 'latitude: 52.00042627304996; longitude: 4.51375661417842;');
}

// function ARjs(){
//     const scene = document.querySelector('a-scene');
//     console.log(scene)
//     // scene.setAttribute('arjs-webcam-texture', '');

//     document.querySelectorAll('a-entity').forEach(e => {
//         e.parentNode.removeChild(e);
//         console.log("destroy entity")
//         e.destroy();
//     });

//     scene.appendChild(createEntity(entityModel));
//     console.log(createEntity(entityModel));
//     console.log("append entity to scene")
// }

// TODO get json data on windows onload, load data before initializing. So location can be updated.
// keep track by count in save session storage while keeping track of likes and dislikes.