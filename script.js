const enigmes = [
    {
        question: "Quelle est notre date anniversaire ?",
        reponse: "17 Juillet"
    },
    {
        question: "Quel est le nom de notre restaurant préféré ?",
        reponse: "Le Gourmet"
    },
    {
        question: "Où avons-nous passé notre première vacance ensemble ?",
        reponse: "Paris"
    }
];

let currentEnigmeIndex = 0;

function verifierReponse() {
    const response = document.getElementById('response').value.trim().toLowerCase();
    const messageElement = document.getElementById('message');

    if (response === enigmes[currentEnigmeIndex].reponse.toLowerCase()) {
        messageElement.textContent = "Correct ! Passons à l'énigme suivante.";
        currentEnigmeIndex++;
        if (currentEnigmeIndex < enigmes.length) {
            document.getElementById('enigme-text').textContent = enigmes[currentEnigmeIndex].question;
            document.getElementById('response').value = '';
        } else {
            messageElement.textContent = "Félicitations ! Vous avez résolu toutes les énigmes.";
            document.getElementById('enigme-container').innerHTML = '<p>Vous avez terminé toutes les énigmes !</p>';
        }
    } else {
        messageElement.textContent = "Essayez encore !";
    }
}
