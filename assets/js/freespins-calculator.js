function calcSpins(){
  const spins = Math.max(0, parseFloat(document.getElementById('fs-count').value) || 0);
  const valuePerSpin = Math.max(0, parseFloat(document.getElementById('fs-value').value) || 0);
  const wagering = Math.max(0, parseFloat(document.getElementById('fs-wagering').value) || 0);
  const rtp = Math.min(100, Math.max(0, parseFloat(document.getElementById('fs-rtp').value) || 96));

  const totalSpinValue = spins * valuePerSpin;
  const expectedWinnings = totalSpinValue * (rtp / 100);
  const wageringRequired = expectedWinnings * wagering;
  const expectedLoss = wageringRequired * (1 - rtp / 100);
  const realValue = expectedWinnings - expectedLoss;

  const fmt = (n) => '$' + n.toLocaleString(undefined, {maximumFractionDigits:2});
  document.getElementById('fs-total-value').textContent = fmt(totalSpinValue);
  document.getElementById('fs-winnings').textContent = fmt(expectedWinnings);
  document.getElementById('fs-wager-req').textContent = fmt(wageringRequired);
  const valEl = document.getElementById('fs-real-value');
  valEl.textContent = (realValue < 0 ? '−' : '') + fmt(Math.abs(realValue));

  const note = document.getElementById('fs-note');
  let text;
  if (totalSpinValue <= 0) {
    text = 'Enter the number of spins and value per spin to see the real cash value.';
  } else if (wagering === 0) {
    text = 'No wagering on winnings — these spins are as good as cash. Rare and genuinely valuable.';
  } else if (realValue >= expectedWinnings * 0.5) {
    text = 'A fair offer: you keep most of the expected winnings after clearing wagering.';
  } else if (realValue > 0) {
    text = 'Worth a spin, but the wagering eats a big chunk of the winnings. Check the max win cap in the terms.';
  } else {
    text = 'The wagering on winnings costs more than the spins are expected to pay. Mathematically a losing offer — treat it as entertainment only.';
  }
  note.innerHTML = text;

  document.getElementById('fs-result').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fs-btn').addEventListener('click', calcSpins);
});
