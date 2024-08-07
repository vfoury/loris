const puzzles = [
    {
        question: "What is the day of our first meeting bubble ? :) (ex: 14 february 2024)",
        answer: "18 July 2024"
    },
    {
        question: "Hoy do you say 'I love you' in french bubble :) ?",
        answer: "Je t'aime"
    },
    {
        question: "Where will I take you for our next vacations :) ?",
        answer: "Jeju"
    }
];

let currentPuzzleIndex = 0;

function checkAnswer() {
    const response = document.getElementById('response').value.trim().toLowerCase();
    const messageElement = document.getElementById('message');
    const loveMessageElement = document.getElementById('love-message');

    if (response === puzzles[currentPuzzleIndex].answer.toLowerCase()) {
        messageElement.textContent = "Correct Bubble !! :D sooo clever hehe !";
        currentPuzzleIndex++;
        if (currentPuzzleIndex < puzzles.length) {
            document.getElementById('puzzle-text').textContent = puzzles[currentPuzzleIndex].question;
            document.getElementById('response').value = '';
        } else {
            messageElement.textContent = "Congratulations! You made everythind wow so proud of you :D Now You can come and kiss me!!";
            document.getElementById('puzzle-container').innerHTML = '<p>You completed all the puzzles!</p>';
            loveMessageElement.classList.remove('hidden');
        }
    } else {
        messageElement.textContent = "Try again bubble :)";
    }
}
