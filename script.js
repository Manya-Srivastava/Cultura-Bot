let currentIndex = 0;

function moveLeft() {
    const gallery = document.querySelector('.image-gallery');
    const images = document.querySelectorAll('.image-gallery img');
    if (currentIndex > 0) {
        currentIndex--;
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}

function moveRight() {
    const gallery = document.querySelector('.image-gallery');
    const images = document.querySelectorAll('.image-gallery img');
    if (currentIndex < images.length - 1) {
        currentIndex++;
        gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-button');
    const chatInput = document.getElementById('chat-input');
    const chatContainer = document.querySelector('.chat-container');
    const chatbotWidget = document.querySelector('.chatbot-widget');
    const contentWrapper = document.querySelector('.content-wrapper');
    const shadowOverlay = document.createElement('div');
    shadowOverlay.className = 'black-shadow-overlay';
    document.body.appendChild(shadowOverlay);

    // Function to append a message to the chat
    function appendMessage(text, isBot = false) {
        const messageElement = document.createElement('div');
        messageElement.className = isBot ? 'message bot-message' : 'message user-message';
        messageElement.innerHTML = `
            <div class="sender-label">${isBot ? 'Bot' : 'User'}</div>
            <p>${text}</p>
        `;
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to bottom
    }

    // Event listener for send button
    sendButton.addEventListener('click', () => {
        const userInput = chatInput.value.trim();
        if (userInput) {
            appendMessage(userInput, false); 
            chatInput.value = ''; 

            setTimeout(() => {
                appendMessage(`You said: ${userInput}`, true); 
            }, 500);
        }
    });

    // Send message on pressing Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendButton.click();
        }
    });

    // Toggle chatbot widget on click
    chatbotWidget.addEventListener('click', () => {
        chatbotWidget.classList.toggle('active'); 
        document.body.classList.toggle('active');
        contentWrapper.classList.toggle('blur-background');
    });

    // Close chatbot when clicking outside (shadow overlay)
    shadowOverlay.addEventListener('click', () => {
        chatbotWidget.classList.remove('active');
        document.body.classList.remove('active');
        contentWrapper.classList.remove('blur-background');
    });
});

