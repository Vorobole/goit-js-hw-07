const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
  const inputValue = inputName.value;
  outputName.textContent = inputValue || 'Anonymous';
});
