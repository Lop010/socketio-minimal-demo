const socket = new WebSocket('ws://localhost:8080');

// Listen for messages

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
isopen = false


socket.onopen = function (event) {
    isopen = true
}

function myFunction() {
    const list = document.createElement("li");

    const idlist = []
    // For i in range() but in Javascript
    for (const x of Array(Number(document.getElementById('input').value)).keys()) {
        socket.send("id")

        // When it gets an message
        socket.onmessage = ({ data }) => {
            if (data != "id") {
                console.log(data)
            }
        }
    }
}

function forward() {
    socket.send("ForwardI")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent = "Failed To Send, Check If Server Is Running"
    }
    else {
        box.textContent = ("This is what you sent: " + "Forward")
    }
    inspectondata()   
}

function backward() {
    socket.send("BackwardI")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent = "Failed To Send, Check If Server Is Running"
    }
    else {
        box.textContent = ("This is what you sent: " + "Backward")
    }
    inspectondata()
}

function left() {
    socket.send("LeftI")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent = "Failed To Send, Check If Server Is Running"
    }
    else {
        box.textContent = ("This is what you sent: " + "Left")
    }
    inspectondata()
}

function right() {
    socket.send("RightI")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent("Failed To Send, Check If Server Is Running")
    }
    else {
        box.textContent = ("This is what you sent: " + "Right")
    }
    inspectondata()
}

// Extra buttons!

function Mine() {
    socket.send("dig")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent("Failed To Send, Check If Server Is Running")
    }
    else {
        box.textContent = ("This is what you sent: " + "Mine")
    }
}
function Mineup() {
    socket.send("digup")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent("Failed To Send, Check If Server Is Running")
    }
    else {
        box.textContent = ("This is what you sent: " + "Mine up")
    }
}
function Minedown() {
    socket.send("digdown")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent("Failed To Send, Check If Server Is Running")
    }
    else {
        box.textContent = ("This is what you sent: " + "Mine Down")
    }
}
function Place() {
    socket.send("place")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent("Failed To Send, Check If Server Is Running")
    }
    else {
        box.textContent = ("This is what you sent: " + "Place")
    }
}
function Suck() {
    socket.send("suck")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent("Failed To Send, Check If Server Is Running")
    }
    else {
        box.textContent = ("This is what you sent: " + "Vacumn")
    }
}

function mineforward() {
    socket.send("mineforward")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent("Failed To Send, Check If Server Is Running")
    }
    else {
        box.textContent = ("This is what you sent: " + "Mine Forward")
    }
}

function stripmine() {
    socket.send("stripmine")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent("Failed To Send, Check If Server Is Running")
    }
    else {
        box.textContent = ("This is what you sent: " + "Mine Forward")
    }
}




function inspect() {
    socket.send("inspect")
    const box = document.getElementById('text');
    if (isopen == false) {
        box.textContent("Failed To Send, Check If Server Is Running")
    }
    else {
        box.textContent = ("This is what you sent: " + "Inspect")
    }

    

    // Sockets

    socket.onmessage = ({ data }) => {
        delay(1)
        const box2 = document.getElementById('t');
        const data1 = data.replace("{", "").replace("1.0=", "Front: ").replace("2.0=", "Down: ").replace("3.0=", "Up: ").replace("}","")
        console.log(data);
        box2.textContent = data1
    }
}

    function inspectondata() {
        socket.onmessage = ({ data }) => {
            delay(1)
            const box2 = document.getElementById('t');
            const data1 = data.replace("{", "").replace("1.0=", "Front: ").replace("2.0=", "Down: ").replace("3.0=", "Up: ").replace("}","").replace("inspect","Loading . . .")
            console.log(data);
            box2.textContent = data1
        }
    }
    var scene3d = document.getElementById("threescene");
    var CANVAS_WIDTH = 400;
    var CANVAS_HEIGHT = 500;

    // SCENE

    scene = new THREE.Scene();

    // CAMERA 

    camera = new THREE.PerspectiveCamera(45, CANVAS_WIDTH / CANVAS_HEIGHT, 0.1, 100);
    camera.position.z = 5;
    camera.position.y = 3.6;
    camera.rotation.x = -0.8;
    camera.lookAt(scene.position);

    // RENDERER

    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000, 1.0);
    renderer.setSize(CANVAS_WIDTH, CANVAS_HEIGHT);

    // GEOMETRY & MATERIALS

    var material = new THREE.MeshPhongMaterial({
    color: 0x00ff00,
    });
    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var cube = new THREE.Mesh(geometry, material);
    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(0, 3, 5);
    scene.add(directionalLight);

    function addcube(x, y, z) {
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube)
        cube.position.x = x * 1.1
        cube.position.y = y * 1.1
        cube.position.z = z * 1.1
    }

    // LIGHT
    var spot1 = new THREE.SpotLight(0xffffff);
    spot1.position.set(10, 100, -50);
    scene.add(spot1);

    // FINISH SCENE SETUP

    // document.body.appendChild(scene3d.domElement);
    scene3d.appendChild(renderer.domElement);
    renderer.render(scene, camera);



document.getElementById("forward").addEventListener("click", forward);
document.getElementById("backward").addEventListener("click", backward);
document.getElementById("left").addEventListener("click", left);
document.getElementById("right").addEventListener("click", right);
document.getElementById("mine").addEventListener("click", Mine);
document.getElementById("minedown").addEventListener("click", Minedown);
document.getElementById("mineup").addEventListener("click", Mineup);
document.getElementById("place").addEventListener("click", Place);
document.getElementById("suck").addEventListener("click", Suck);
document.getElementById("inspect").addEventListener("click", inspect);
document.getElementById("mineforward").addEventListener("click", mineforward);
document.getElementById("stripmine").addEventListener("click", stripmine);
document.getElementById("addcube").addEventListener("click", addcube(0,0,0));


// Also run doinspect() when moved

document.getElementById("forward").addEventListener("click", inspect);
document.getElementById("backward").addEventListener("click", inspect);
document.getElementById("left").addEventListener("click", inspect);
document.getElementById("right").addEventListener("click", inspect);
