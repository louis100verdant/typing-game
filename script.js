const input = document.getElementById('typing-input');
const character = document.getElementById('character-sprite');
const feedback = document.getElementById('feedback-message');
const targetText = "apple"; // Example lesson word

input.addEventListener('input', () => {
    const val = input.value;
    
    // Check for Error
    if (val && !targetText.startsWith(val)) {
        character.innerText = "😵"; // Error state
        character.classList.add('shake');
        feedback.innerText = "Oops! Try that key again!";
    } else {
        character.innerText = "🤖";
        character.classList.remove('shake');
    }

    // Check for Success
    if (val === targetText) {
        character.innerText = "🌟"; // Completion state
        feedback.innerText = "Amazing Job! Level Up!";
        // Trigger confetti or next lesson logic here
    }
});