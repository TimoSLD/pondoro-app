// Create the timerel element and set its id
const timerel = document.createElement("div");
timerel.setAttribute("id", "timer-el");

// Create the timer element
const timer = document.createElement("div");
timer.setAttribute("id", "timer");

// Append the timer element to the timerel element
timerel.appendChild(timer);

// Append the timerel element to the body
document.body.appendChild(timerel);

// Get the timer element
const timerElement = document.querySelector('#timer');

// Create the timer display element
const timerDisplay = document.createElement('span');
timerDisplay.id = 'timer-display';
timerDisplay.textContent = '25:00'; // Initial time

// Add styles to the timer display
timerDisplay.style.fontSize = '24px';
timerDisplay.style.color = 'white';
timerDisplay.style.display = 'flex';
timerDisplay.style.alignItems = 'center';
timerDisplay.style.justifyContent = 'center';
timerDisplay.style.height = '100%';

// Append the timer display to the timer element
timerElement.appendChild(timerDisplay);

// Countdown logic
let remainingTime = 25 * 60; // Initial time in seconds (25 minutes)

function updateTimerDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerDisplay.textContent = formattedTime;
}

updateTimerDisplay(); // Display initial time

// Start the countdown
const countdownInterval = setInterval(() => {
    if (remainingTime > 0) {
        remainingTime--;
        updateTimerDisplay();
    } else {
        clearInterval(countdownInterval);
        // Timer has reached 0, you can trigger an action here
    }
}, 1000); // Update every second

