document.querySelectorAll('input[name="color"]').forEach(radio => {
  radio.addEventListener('change', () => {
      console.log('Selected color: ' + radio.value);
  });
});

document.querySelectorAll('.size-btn').forEach(button => {
  button.addEventListener('click', () => {
      console.log('Selected size: ' + button.textContent);
  });
});
