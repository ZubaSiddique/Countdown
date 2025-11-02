let countdown;

function startCountdown() {
  const targetInput = document.getElementById("target").value;

  if (!targetInput) {
    document.getElementById("result").textContent = "Please select a future date!";
    return;
  }

  const targetDate = new Date(targetInput).getTime();

  clearInterval(countdown); // clear old timer if any

  countdown = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate - now;

    if (diff <= 0) {
      clearInterval(countdown);
      document.getElementById("result").textContent = "🎉 Time’s up!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("result").textContent =
      `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
  }, 1000);
}