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
    const chatbox = document.querySelector('.chatbox');
    const overlay = document.querySelector('.black-shadow-overlay');
    const contentWrapper = document.querySelector('.content-wrapper');

    // Close chatbot when clicking outside (shadow overlay)
    overlay.addEventListener('click', () => {
        chatbox.classList.remove('active');
        document.body.classList.remove('active');
        contentWrapper.classList.remove('blur-background');
    });

    // Add chatbox click event to toggle visibility
    chatbox.addEventListener('click', () => {
        chatbox.classList.toggle('active');
        document.body.classList.toggle('active');
        contentWrapper.classList.toggle('blur-background');
    });
});

function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    
    if (userMessage.trim() !== "") {
      // Create JSON for user message
      const userMessageJson = {
        "sender": "user",
        "text": userMessage
      };

      // Display user message
      displayMessage(userMessageJson);

      // Clear input field
      document.getElementById('userMessage').value = '';

      // Simulate bot response
      const botMessageJson = {
        "sender": "bot",
        "text": "This is an automated response to your message: " + userMessage
      };

      setTimeout(() => {
        displayMessage(botMessageJson);
      }, 1000); // Simulating delay for bot response
    }
  }

  function displayMessage(messageJson) {
    const chatboxBody = document.getElementById('chatbox-body');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', messageJson.sender);

    messageDiv.textContent = messageJson.text;

    chatboxBody.appendChild(messageDiv);
    chatboxBody.scrollTop = chatboxBody.scrollHeight; // Scroll to the bottom
  }
