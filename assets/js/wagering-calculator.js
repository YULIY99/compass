function calcWagering(){
  const bonus = Math.max(0, parseFloat(document.getElementById('bonus-amount').value) || 0);
  const deposit = Math.max(0, parseFloat(document.getElementById('deposit-amount').value) || 0);
  const multiplier = Math.max(0, parseFloat(document.getElementById('multiplier').value) || 0);
  let weighting = parseFloat(document.getElementById('weighting').value);
  if (isNaN(weighting)) weighting = 100;
  weighting = Math.min(Math.max(weighting, 1), 100);

  const base = document.getElementById('basis').value === 'bonus' ? bonus : (bonus + deposit);
  const totalWagering = base * multiplier;
  const effectiveWagering = totalWagering / (weighting / 100);

  document.getElementById('result-total').textContent = totalWagering.toLocaleString(undefined, {maximumFractionDigits:2});
  document.getElementById('result-effective').textContent = effectiveWagering.toLocaleString(undefined, {maximumFractionDigits:2});
  document.getElementById('calc-result').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('calc-btn').addEventListener('click', calcWagering);
  // Enter key in any input triggers the calculation
  document.querySelectorAll('.calc-form input, .calc-form select').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') { e.preventDefault(); calcWagering(); }
    });
  });
});
