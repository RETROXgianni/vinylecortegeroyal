window.addEventListener("DOMContentLoaded", () => {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Chargement des textures
  const loader = new THREE.TextureLoader();
  const baseTexture = loader.load('vinyl_PNG18.png');
  const centerTexture = loader.load('cortege royal sans texte 3.png');

  // Géométrie du vinyle
  const geometry = new THREE.CylinderGeometry(2, 2, 0.05, 64);

  // Matériaux :
  const materials = [
    new THREE.MeshBasicMaterial({ color: 0x000000 }), // côté
    new THREE.MeshBasicMaterial({ map: baseTexture }), // face 1
    new THREE.MeshBasicMaterial({ map: centerTexture }) // face 2
  ];

  const vinyle = new THREE.Mesh(geometry, materials);
  vinyle.rotation.x = Math.PI / 2;
  scene.add(vinyle);

  // Lumière
  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(2, 2, 5);
  scene.add(light);

  function animate() {
    requestAnimationFrame(animate);
    vinyle.rotation.z += 0.01;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
