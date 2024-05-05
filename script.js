function checkAnswer() {
    var name = document.getElementById('answerInput').value.trim();
    if (name !== '') {
        document.getElementById('nameSpan').textContent = name;
    }
    if (name.toUpperCase() === 'LHANSHI') {
        // Show enhanced birthday wish animation
        document.getElementById('birthdayWish').classList.remove('hidden');
        document.getElementById('teddyBearContainer').classList.remove('hidden');
        createFireworks(); // Trigger fireworks
        setTimeout(function() {
            // Hide the birthday wish and teddy bears after 10 seconds
            document.getElementById('birthdayWish').classList.add('hidden');
            document.getElementById('teddyBearContainer').classList.add('hidden');
        }, 10000); // 10 seconds
    } else {
        // Show pop-up message
        document.getElementById('popup').style.display = 'block';
        // Hide birthday wish and teddy bears if they were previously shown
        document.getElementById('birthdayWish').classList.add('hidden');
        document.getElementById('teddyBearContainer').classList.add('hidden');
    }
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('website').classList.remove('hidden');
});

function createFireworks() {
    const fireworksContainer = document.getElementById('fireworksContainer');
    const numberOfFireworks = 100; // Adjust this number as needed

    for (let i = 0; i < numberOfFireworks; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`; // Random horizontal position
        firework.style.top = `${Math.random() * 100}%`; // Random vertical position
        firework.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random duration
        firework.style.animationDelay = `${Math.random() * 1}s`; // Random delay
        fireworksContainer.appendChild(firework);
    }

    // Show the fireworks container
    fireworksContainer.classList.remove('hidden');

    // Hide the fireworks after a certain time
    setTimeout(function() {
        fireworksContainer.classList.add('hidden');
    }, 9000); // 5 seconds
}