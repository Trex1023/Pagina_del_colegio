let currentBaner = 0;
const totalBaner = 3;

function goToBaner(n) {
  currentBaner = (n + totalBaner) % totalBaner;
  trackBaner.style.transform = `translateX(-${currentBaner * 100}%)`;
  updateBdots(currentBaner)
}

function banerMove(dir) { goToBaner(currentBaner + dir); }

const Bdots = document.querySelectorAll('.Bdot');

function updateBdots(currentIndex) {
  Bdots.forEach(d => d.classList.remove('active'));
  Bdots[currentIndex].classList.add('active');
}

Bdots.forEach((dot, i) => {
  dot.onclick = () => goToBaner(i);
});