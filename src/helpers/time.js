export function secondsToTime(seconds) {
  if (seconds < 0) {
    return "Invalid input"; // Handle negative input if needed
  }

  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const remainingMinutes = remainingSeconds % 60;
  const formattedTime = `${padZero(minutes)}:${padZero(remainingMinutes)}`;
  return formattedTime;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
