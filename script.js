const keys = document.querySelectorAll('.key');

keys.forEach(key => {
  key.addEventListener('click', () => {
    const userInput = document.getElementById('userinput');
    userInput.value += key.textContent;
  });
});
