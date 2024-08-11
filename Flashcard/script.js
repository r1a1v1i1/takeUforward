document.addEventListener('DOMContentLoaded', () => {
    let currentCardIndex = 0;
    const flashcards = [
        { question: "What is the capital of France?", answer: "Paris" },
        { question: "What is 2 + 2?", answer: "4" },
        { question: "Who wrote 'To Kill a Mockingbird'?", answer: "Harper Lee" }
    ];

    const flashcard = document.getElementById('flashcard');
    const textElement = document.getElementById('text');

    function loadFlashcard(index) {
        textElement.textContent = flashcards[index].question;
        flashcard.classList.remove('flipped');
    }

    flashcard.addEventListener('click', () => {
        if (flashcard.classList.contains('flipped')) {
            textElement.textContent = flashcards[currentCardIndex].question;
        } else {
            textElement.textContent = flashcards[currentCardIndex].answer;
        }
        flashcard.classList.toggle('flipped');
    });

    document.getElementById('next').addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % flashcards.length;
        loadFlashcard(currentCardIndex);
    });

    document.getElementById('prev').addEventListener('click', () => {
        currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length;
        loadFlashcard(currentCardIndex);
    });

    loadFlashcard(currentCardIndex);
});
