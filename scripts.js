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
  let multiplier = 1;
  const update = () => {
    counterValue.textContent = String(count);
  };

  const multiplierButton = document.querySelector('.counter-multiplier');
  const updateMultiplierLabel = () => {
    if (multiplierButton) {
      multiplierButton.textContent = `Multiplier: x${multiplier}`;
    }
  };

  updateMultiplierLabel();

  document.querySelectorAll('.counter-btn').forEach(button => {
    button.addEventListener('click', () => {
      const delta = Number(button.dataset.delta) || 0;
      count += delta * multiplier;
      update();
    });
  });

  if (multiplierButton) {
    multiplierButton.addEventListener('click', () => {
      multiplier = multiplier === 1 ? 2 : 1;
      updateMultiplierLabel();
    });
  }
}

const calcButton = document.getElementById('eq-calc');
if (calcButton) {
  const getNumber = id => {
    const input = document.getElementById(id);
    return input ? Number(input.value) : NaN;
  };

  const output = document.getElementById('eq-p');
  const format = value => {
    if (!Number.isFinite(value)) return '—';
    return value.toFixed(6);
  };

  const calculate = () => {
    const v = getNumber('eq-v');
    const T = getNumber('eq-t');
    const a = getNumber('eq-a');
    const b = getNumber('eq-b');
    const C = getNumber('eq-c');
    const R = getNumber('eq-r');

    const denom = v - b;
    if (!Number.isFinite(v) || !Number.isFinite(T) || !Number.isFinite(R) || denom === 0) {
      output.textContent = '—';
      return;
    }

    const factor = Math.pow(1 + C / T, 1.5);
    const rhs = R * T * (1 + factor * (b / denom)) - a / v;
    const p = rhs / v;
    output.textContent = format(p);
  };

  calcButton.addEventListener('click', calculate);
}
