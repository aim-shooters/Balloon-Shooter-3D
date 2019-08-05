
class Map {

  constructor () {

    this.map_size = 0;
    this.map = [];

    var loader = new THREE.TextureLoader();
    var texturaMetal = loader.load ("imgs/wood.jpg");
    
    var mat = Physijs.createMaterial(new THREE.MeshPhongMaterial ({map: texturaMetal}),0,0);
    
    var start1 = new Physijs.BoxMesh (new THREE.BoxGeometry (500, 0, 500), mat, 0);
    start1.applyMatrix (new THREE.Matrix4().makeTranslation (0, -10, 0));
    start1.receiveShadow = true;
    start1.autoUpdateMatrix = false;
    this.map.push(start1);
    ++this.map_size;

    var balloons2 = new Physijs.BoxMesh (new THREE.BoxGeometry (1000, 4, 1000, 1, 1, 1), mat, 0);
    balloons2.applyMatrix (new THREE.Matrix4().makeTranslation (0, 0, -300));
    balloons2.receiveShadow = true;
    balloons2.autoUpdateMatrix = false;
    this.map.push(balloons2);
    ++this.map_size;

    var bullets3 = new Physijs.BoxMesh (new THREE.BoxGeometry (1000, 0.0, 1000, 1, 1, 1), mat, 0);
    bullets3.applyMatrix (new THREE.Matrix4().makeTranslation (0, -10, 0));
    bullets3.receiveShadow = false;
    bullets3.autoUpdateMatrix = false;
    this.map.push(bullets3);
    ++this.map_size;
    
    return this;
  }

  getMap(i) {
    return this.map[i];
  }

  getMapSize() {
    return this.map_size;
  }
}
