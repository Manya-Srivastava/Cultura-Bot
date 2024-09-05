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

    
    overlay.addEventListener('click', () => {
        chatbox.classList.remove('active');
        document.body.classList.remove('active');
        contentWrapper.classList.remove('blur-background');
    });

    
    chatbox.addEventListener('click', () => {
        chatbox.classList.toggle('active');
        document.body.classList.toggle('active');
        contentWrapper.classList.toggle('blur-background');
    });
});

async function sendMessage() {
  const userMessage = document.getElementById('userMessage').value;
  
  if (userMessage.trim() !== "") {
      
      const userMessageJson = {
          "sender": "user",
          "text": userMessage
      };
      displayMessage(userMessageJson);

      
      document.getElementById('userMessage').value = '';

      // YHA API DALEGI
      try {
          const response = await fetch('URL DAAL DE BHAI', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Authorization': '?/FILLME' 
              },
              body: JSON.stringify({ message: userMessage })
          });

          if (!response.ok) {
              throw new Error('Network response was not ok');
          }

          const data = await response.json();

         
          const botMessageJson = {
              "sender": "bot",
              "text": data.reply
          };

          
          setTimeout(() => {
              displayMessage(botMessageJson);
          }, 1000); 

      } catch (error) {
          console.error('Error:', error);
          
          const errorMessageJson = {
              "sender": "bot",
              "text": "Sorry, there was an error. Please try again."
          };
          displayMessage(errorMessageJson);
      }
  }
}



function displayMessage(messageJson) {
  const chatboxBody = document.getElementById('chatbox-body');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', messageJson.sender);

  const senderLabel = document.createElement('div');
  senderLabel.classList.add('sender-label');
  senderLabel.textContent = messageJson.sender === 'user' ? 'You' : 'Bot';
  messageDiv.appendChild(senderLabel);

  const textContent = document.createElement('div');
  textContent.classList.add(messageJson.sender + '-message');
  textContent.textContent = messageJson.text;
  messageDiv.appendChild(textContent);

  chatboxBody.appendChild(messageDiv);
  chatboxBody.scrollTop = chatboxBody.scrollHeight; 
}

