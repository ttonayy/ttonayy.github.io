function checkAnswer() {
    const answer = document.getElementById("answer").value.toLowerCase();
    const result = document.getElementById("result");

    if (answer === "bakırköy") {
        result.innerHTML = "<p>Bravo!</p>";
        result.style.animation = "flash 1s infinite";
        document.body.style.backgroundColor = "green";
    } else {
        result.innerHTML = "<p>Yanlış cevap. Tekrar deneyin!</p>";
    }
}