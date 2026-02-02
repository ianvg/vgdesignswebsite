document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const icon = button.querySelector('.plus-icon');
    const isHidden = content.classList.contains('hidden');

    document.querySelectorAll('.portfolio-content').forEach(section => section.classList.add('hidden'));
    document.querySelectorAll('.plus-icon').forEach(i => i.textContent = '+');

    if (isHidden) {
      content.classList.remove('hidden');
      icon.textContent = '−';
    }
  });
});

const counterValue = document.getElementById('counter-value');
if (counterValue) {
  let count = Number(counterValue.textContent) || 0;
  const update = () => {
    counterValue.textContent = String(count);
  };

  document.querySelectorAll('.counter-btn').forEach(button => {
    button.addEventListener('click', () => {
      const delta = Number(button.dataset.delta) || 0;
      count += delta;
      update();
    });
  });
}
