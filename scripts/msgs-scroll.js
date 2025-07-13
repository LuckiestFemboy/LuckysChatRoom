// ~ AUTO SCROLL TO BOTTOM FOR MESSAGES LIKE DISOCRD ~ //

const chatContainer = document.querySelector('.chat-container');

// Optional: if you ever want to limit how many messages show
function trimOldMessages(maxMessages = 30) {
  const messages = chatContainer.querySelectorAll('.message');
  if (messages.length > maxMessages) {
    for (let i = 0; i < messages.length - maxMessages; i++) {
      messages[i].remove();
    }
  }
}

// If you're dynamically adding messages
const observer = new MutationObserver(() => {
  trimOldMessages(); // optional: keeps it from overflowing
});

observer.observe(chatContainer, { childList: true });
