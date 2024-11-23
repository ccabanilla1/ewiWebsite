// Select the countdown display element
const countdownElement = document.getElementById("countdown-timer");

// Function to update the countdown timer
function updateCountdown() {
  // Set the event date and time
  const eventDate = new Date("February 26, 2025 17:00:00").getTime();
  const now = new Date().getTime(); // Current time

  // Calculate the time difference
  const timeDifference = eventDate - now;

  // If the event date is in the past, display "Event has started!"
  if (timeDifference <= 0) {
    countdownElement.textContent = "The event has started!";
    clearInterval(countdownInterval); // Stop updating
    return;
  }

  // Convert time difference into days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Update the countdown element
  countdownElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to display the timer immediately
updateCountdown();
