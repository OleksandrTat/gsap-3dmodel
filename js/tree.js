// Створюємо сцену, камеру та рендерер
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  alpha: true
});

// Отримуємо блок анімації та додаємо canvas
const animationBlock = document.getElementById('animation-block');
renderer.setSize(animationBlock.clientWidth, animationBlock.clientHeight);
animationBlock.appendChild(renderer.domElement);

// Додаємо освітлення до сцени
scene.add(new THREE.AmbientLight(0xffffff, 1));

let model; // Змінна для моделі літака
const startX = -1500; // Початкова позиція по X
const endX = 600; // Кінцева позиція по X
const flightHeight = 400; // Висота польоту

// Завантажуємо 3D-модель літака
const loader = new THREE.GLTFLoader();
loader.load(
  'model.glb',
  (gltf) => {
    model = gltf.scene;
    model.position.set(startX, flightHeight, 0);
    model.rotation.y = Math.PI * 1.5; // Повертаємо літак у потрібному напрямку

    // Оновлюємо матеріали всіх частин моделі
    model.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({ 
          color: child.material.color,
          map: child.material.map
        });
      }
    });
    
    scene.add(model); // Додаємо модель у сцену
  },
  undefined,
  (error) => {
    console.error("Помилка завантаження моделі:", error); // Виводимо помилку в консоль
  }
);

// Встановлюємо початкове положення камери
camera.position.set(0, 800, 500);
camera.lookAt(0, flightHeight, 0);

// Функція оновлення анімації залежно від скролу
function updateAnimation() {
  if (!model) return; // Переконуємось, що модель завантажена
  const rect = animationBlock.getBoundingClientRect(); // Отримуємо розміри блоку
  
  // Обчислюємо прогрес анімації (від 0 до 1)
  const progress = Math.min(1, Math.max(0, (window.innerHeight - rect.top) / window.innerHeight / 2));
  
  // Оновлюємо позицію літака по X та нахил по Z
  model.position.x = startX + (endX - startX) * progress;
  model.rotation.z = -progress * 0.6;

  // Оновлюємо позицію камери між двома заданими точками
  const startCam = new THREE.Vector3(0, 950, 500);
  const endCam = new THREE.Vector3(0, 450, 200);
  camera.position.lerpVectors(startCam, endCam, progress);
  camera.lookAt(new THREE.Vector3(0, flightHeight, 0)); // Спрямовуємо камеру на літак
}

// Запускаємо оновлення анімації під час скролу
window.addEventListener('scroll', updateAnimation);

// Функція безперервного рендерингу сцени
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate(); // Запускаємо анімацію

// Оновлюємо розмір рендерера при зміні розміру вікна
function onResize() {
  renderer.setSize(animationBlock.clientWidth, animationBlock.clientHeight);
  camera.aspect = animationBlock.clientWidth / animationBlock.clientHeight;
  camera.updateProjectionMatrix();
  updateAnimation(); // Оновлюємо анімацію після зміни розміру
}
window.addEventListener('resize', onResize);
