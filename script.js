const puzzles = [
    {
        question: "What is our anniversary date?",
        answer: "February 14"
    },
    {
        question: "What is the name of our favorite restaurant?",
        answer: "The Gourmet"
    },
    {
        question: "Where did we spend our first vacation together?",
        answer: "Paris"
    }
];

let currentPuzzleIndex = 0;

function checkAnswer() {
    const response = document.getElementById('response').value.trim().toLowerCase();
    const messageElement = document.getElementById('message');

    if (response === puzzles[currentPuzzleIndex].answer.toLowerCase()) {
        messageElement.textContent = "Correct! Let's move to the next puzzle.";
        currentPuzzleIndex++;
        if (currentPuzzleIndex < puzzles.length) {
            document.getElementById('puzzle-text').textContent = puzzles[currentPuzzleIndex].question;
            document.getElementById('response').value = '';
        } else {
            messageElement.textContent = "Congratulations! You solved all the puzzles.";
            document.getElementById('puzzle-container').innerHTML = '<p>You completed all the puzzles!</p>';
        }
    } else {
        messageElement.textContent = "Try again!";
    }
}
