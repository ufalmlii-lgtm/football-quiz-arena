
function showMessage(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.style.display = "block";

  setTimeout(function() {
    toast.style.display = "none";
  }, 2200);
}

function startQuiz() {
  showMessage("Mode kuis akan dibuat pada Tahap 3!");
}

function openDuel() {
  showMessage("Duel teman akan dibuat pada Tahap 5!");
}

function openLeaderboard() {
  showMessage("Leaderboard akan dibuat pada Tahap 4!");
}

function openProfile() {
  showMessage("Profil pemain akan dibuat pada Tahap 2!");
}

function chooseCategory(category) {
  showMessage("Kategori dipilih: " + category);
}

function goHome() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
