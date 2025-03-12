// ************** Перша сцена: Анімований літак (GLTF) ************** //
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  alpha: true
});

const animationBlock = document.getElementById('animation-block');
renderer.setSize(animationBlock.clientWidth, animationBlock.clientHeight);
animationBlock.appendChild(renderer.domElement);

scene.add(new THREE.AmbientLight(0xffffff, 1));

let model; 
const startX = -1500; 
const endX = 600; 
const flightHeight = 400; 

const loader = new THREE.GLTFLoader();
loader.load(
  'An-225_cutout/model.glb',
  (gltf) => {
    model = gltf.scene;
    model.position.set(startX, flightHeight, 0);
    model.rotation.y = Math.PI * 1.5; 

    model.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({ 
          color: child.material.color,
          map: child.material.map
        });
      }
    });
    scene.add(model);
  },
  undefined,
  (error) => {
    console.error("Помилка завантаження моделі:", error);
  }
);

camera.position.set(0, 800, 500);
camera.lookAt(0, flightHeight, 0);

// Функція для анімації літака (залишаємо ім'я updateAnimation, оскільки вона не конфліктує з updateColorAnimation)
function updateAnimation() {
  if (!model) return;
  const rect = animationBlock.getBoundingClientRect();
  const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / window.innerHeight / 2));
  
  model.position.x = startX + (endX - startX) * progress;
  model.rotation.z = -progress * 0.6;

  const startCam = new THREE.Vector3(0, 950, 500);
  const endCam = new THREE.Vector3(0, 450, 200);
  camera.position.lerpVectors(startCam, endCam, progress);
  camera.lookAt(new THREE.Vector3(0, flightHeight, 0));
}

window.addEventListener('scroll', updateAnimation);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

function onResize() {
  renderer.setSize(animationBlock.clientWidth, animationBlock.clientHeight);
  camera.aspect = animationBlock.clientWidth / animationBlock.clientHeight;
  camera.updateProjectionMatrix();
  updateAnimation();
}
window.addEventListener('resize', onResize);








    // ************** Друга сцена: Відображення OBJ+MTL ************** //
    const scene2 = new THREE.Scene();
    const camera2 = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer2 = new THREE.WebGLRenderer({ alpha: true });

    const viewerContainer = document.getElementById('viewer-container');
    renderer2.setSize(viewerContainer.clientWidth, viewerContainer.clientHeight);
    viewerContainer.appendChild(renderer2.domElement);

    scene2.add(new THREE.AmbientLight(0xffffff, 0.7));
    const rotatingLight = new THREE.PointLight(0xffffff, 1.4);
    scene2.add(rotatingLight);

    const controls = new THREE.OrbitControls(camera2, renderer2.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.enableRotate = true;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0;

    const mtlLoader = new THREE.MTLLoader();
    mtlLoader.load('An-225_cutout/Mriya_edited3_wing_fuselage_fix_onlyplane.mtl', (materials) => {
        materials.preload();
        const objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('An-225_cutout/Mriya_edited3_wing_fuselage_fix_onlyplane.obj', (object) => {
            object.position.set(13, 0, 30);
            scene2.add(object);
            controls.target.set(0, 0, 0);
            controls.update();
        });
    });

    camera2.position.set(13, 40, 75);

    function animate2() {
        requestAnimationFrame(animate2);
        controls.update();
        const time = Date.now() * 0.001;
        const radius = 70;
        rotatingLight.position.set(Math.cos(time) * radius, 20, Math.sin(time) * radius);
        renderer2.render(scene2, camera2);
    }
    animate2();

    window.addEventListener('resize', () => {
        renderer2.setSize(viewerContainer.clientWidth, viewerContainer.clientHeight);
        camera2.aspect = viewerContainer.clientWidth / viewerContainer.clientHeight;
        camera2.updateProjectionMatrix();
    });



    