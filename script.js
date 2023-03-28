//your JS code here. If required.
//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
let currentActive = 1;

nextBtn.addEventListener('click', () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  updateProgressBar();
});

prevBtn.addEventListener('click', () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  updateProgressBar();
});

function updateProgressBar() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  if (currentActive === 1) {
    prevBtn.disabled = true;
  } else if (currentActive === circles.length) {
    nextBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
  }
}
