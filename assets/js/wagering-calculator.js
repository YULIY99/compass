
function calcWagering(){
  const bonus = parseFloat(document.getElementById('bonus-amount').value) || 0;
  const deposit = parseFloat(document.getElementById('deposit-amount').value) || 0;
  const multiplier = parseFloat(document.getElementById('multiplier').value) || 0;
  const weighting = parseFloat(document.getElementById('weighting').value) || 100;

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
