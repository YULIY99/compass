function calcWagering(){
  const bonus = Math.max(0, parseFloat(document.getElementById('bonus-amount').value) || 0);
  const deposit = Math.max(0, parseFloat(document.getElementById('deposit-amount').value) || 0);
  const multiplier = Math.max(0, parseFloat(document.getElementById('multiplier').value) || 0);
  const weighting = Math.min(Math.max(parseFloat(document.getElementById('weighting').value) || 100, 1), 100);

  const base = document.getElementById('basis').value === 'bonus' ? bonus : (bonus + deposit);
  const totalWagering = base * multiplier;
  const effectiveWagering = totalWagering / (weighting / 100);

  document.getElementById('result-total').textContent = totalWagering.toLocaleString(undefined, {maximumFractionDigits:2});
  document.getElementById('result-effective').textContent = effectiveWagering.toLocaleString(undefined, {maximumFractionDigits:2});
  document.getElementById('calc-result').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('calc-btn').addEventListener('click', calcWagering);
});
