const enigmes = [
    {
        question: "what is the day of our first meeting bubble :) (ex: 14 february 2024)?",
        reponse: "18 July 2024"
    },
    {
        question: "what is the next destination we both want to go for holidays ?",
        reponse: "Jeju"
    },
    {
        question: "hoy do you say 'I love you' in french ?",
        reponse: "Je t'aime"
    }
];

let currentEnigmeIndex = 0;

function verifierReponse() {
    const response = document.getElementById('response').value.trim().toLowerCase();
    const messageElement = document.getElementById('message');

    if (response === enigmes[currentEnigmeIndex].reponse.toLowerCase()) {
        messageElement.textContent = "WoW you rememberd bubble :D ";
        currentEnigmeIndex++;
        if (currentEnigmeIndex < enigmes.length) {
            document.getElementById('enigme-text').textContent = enigmes[currentEnigmeIndex].question;
            document.getElementById('response').value = '';
        } else {
            messageElement.textContent = "Wow you made it all Bubble ! I am proud of you.. I love you !!";
            document.getElementById('enigme-container').innerHTML = '<p>Vous avez terminé toutes les énigmes !</p>';
        }
    } else {
        messageElement.textContent = "Wrong answer Bubble.. Try again :) !";
    }
}
