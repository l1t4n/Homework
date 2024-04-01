let timer;
const modal = document.getElementById('modal');
const stayBtn = document.getElementById('stayBtn');
const logoutBtn = document.getElementById('logoutBtn');
const timerDisplay = document.getElementById('timer');

function showModal() {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}

function startTimer(duration) {
  let timeLeft = duration;
  timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showModal();
      startModalTimer(10); // Start modal timer
    }
    timerDisplay.textContent = `Modal will close in 10 seconds`;
  }, 1000);
}

function startModalTimer(duration) {
  let timeLeft = duration;
  timerDisplay.textContent = `Modal will close in ${timeLeft} seconds`;
  const modalTimer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      hideModal();
      clearInterval(modalTimer);
      resetTimers();
    }
    timerDisplay.textContent = `Modal will close in ${timeLeft} seconds`;
  }, 1000);
}

function resetTimers() {
  clearInterval(timer);
  startTimer(5);
}

stayBtn.addEventListener('click', () => {
  hideModal();
  resetTimers();
});

logoutBtn.addEventListener('click', () => {
  hideModal();
  clearInterval(timer);
  // Perform logout actions here
});

// Start the initial session timer
startTimer(5);
