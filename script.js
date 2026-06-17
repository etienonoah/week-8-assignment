  const adviceIdElement = document.querySelector('.advice-id');
    const adviceTextElement = document.querySelector('.advice-text');
    const diceBtn = document.querySelector('.dice-btn');
    const API_URL = 'https://api.adviceslip.com/advice';

async function getAdvice() {
  try {
    // Fetch the data from the API
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    const id = data.slip.id;
    const advice = data.slip.advice;
    adviceIdElement.textContent = `Advice #${id}`;
    adviceTextElement.textContent = `"${advice}"`;
    
  } catch (error) {
    console.error('Could not fetch advice:', error);
    adviceTextElement.textContent = "Oops! Something went wrong. Please try again.";
  }
  }

    diceBtn.addEventListener('click', getAdvice);
    getAdvice();
