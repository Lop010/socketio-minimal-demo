var SW = window.innerWidth, SH = window.innerHeight;
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75, SW / SH, 0.1, 1000);// fov, aspect, near/far clip planes
var renderer = new THREE.WebGLRenderer();

renderer.setSize(SW, SH);
document.body.appendChild(renderer.domElement);

var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
directionalLight.position.set(0, 3, 5);
scene.add(directionalLight);


var material = new THREE.MeshPhongMaterial( { color : 0x00ff00, flatShading: true, }); 
var geometry = new THREE.BoxGeometry(1, 1, 1);
var cube = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Mesh( geometry, material );
var cube3 = new THREE.Mesh( geometry, material );
var cube4 = new THREE.Mesh( geometry, material );

scene.add( cube4 );
scene.add( cube3 );
scene.add( cube2 );
scene.add( cube );

camera.position.z = 5;
camera.position.y = 3.6;
camera.rotation.x = -0.8;

function render(){ 
	renderer.render(scene, camera);
  requestAnimationFrame(render);

  cube2.position.x = 1.2;
  cube3.position.z = 1.2;
  
  cube4.position.z = 1.2;
  cube4.position.x = 1.2;
}

render();