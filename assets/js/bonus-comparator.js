
const bonusData = [
  {casino:"BC.Game", geo:"Nigeria", type:"Deposit Match", pct:"180%", max:"$20,000", wagering:"35x", minDep:"$10"},
  {casino:"Cloudbet", geo:"Mexico", type:"Deposit Match", pct:"100%", max:"5 BTC", wagering:"30x", minDep:"$20"},
  {casino:"BitStarz", geo:"Colombia", type:"Deposit Match", pct:"100%", max:"$500 + 180 FS", wagering:"40x", minDep:"$20"},
  {casino:"BC.Game", geo:"Brazil", type:"Deposit Match", pct:"150%", max:"R$1,000", wagering:"35x", minDep:"R$50"},
  {casino:"Cloudbet", geo:"Brazil", type:"Deposit Match", pct:"100%", max:"5 BTC", wagering:"30x", minDep:"$20"},
  {casino:"BC.Game", geo:"Kenya", type:"Deposit Match", pct:"180%", max:"$20,000", wagering:"35x", minDep:"$10"},
  {casino:"Cloudbet", geo:"Kenya", type:"Deposit Match", pct:"100%", max:"5 BTC", wagering:"30x", minDep:"$20"},
];

function renderBonusTable(geo){
  const tbody = document.getElementById('bonus-tbody');
  const filtered = geo === 'all' ? bonusData : bonusData.filter(b => b.geo === geo);
  tbody.innerHTML = filtered.map(b => `<tr>
    <td>${b.casino}</td><td>${b.geo}</td><td>${b.type}</td><td>${b.pct}</td><td>${b.max}</td><td>${b.wagering}</td><td>${b.minDep}</td>
  </tr>`).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderBonusTable('all');
  document.getElementById('f-geo').addEventListener('change', (e) => renderBonusTable(e.target.value));
});
