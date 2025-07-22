const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 6;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("scene-container").appendChild(renderer.domElement);

// Création du vinyle
const geometry = new THREE.CylinderGeometry(2, 2, 0.1, 64);
const material = new THREE.MeshStandardMaterial({ color: 0x111111 });
const vinyle = new THREE.Mesh(geometry, material);
vinyle.rotation.x = Math.PI / 2;
scene.add(vinyle);

// Lumières
const light = new THREE.DirectionalLight(0xffffff, 1.5);
light.position.set(3, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x444444));

// Animation
function animate() {
  requestAnimationFrame(animate);
  vinyle.rotation.z += 0.01;
  renderer.render(scene, camera);
}
animate();

// Responsive
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
