document.addEventListener('DOMContentLoaded', () => {
    const enterChatButton = document.getElementById('enter-chat');
    const rulesButton = document.getElementById('rules-button');

    function startLoadingAnimation(button) {
        button.classList.add('loading');
    }

    function stopLoadingAnimation(button) {
        button.classList.remove('loading');
    }

    enterChatButton.addEventListener('click', (event) => {
        startLoadingAnimation(event.target);
        setTimeout(() => stopLoadingAnimation(event.target), 1000); // 1-second delay
    });

    rulesButton.addEventListener('click', (event) => {
        startLoadingAnimation(event.target);
        setTimeout(() => stopLoadingAnimation(event.target), 1000); // 1-second delay
    });
});