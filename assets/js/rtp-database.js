
const slotData = [
  {name:"Sweet Bonanza", provider:"Pragmatic Play", rtp:96.51, volatility:"High", maxWin:"21,100x"},
  {name:"Gates of Olympus", provider:"Pragmatic Play", rtp:96.50, volatility:"High", maxWin:"5,000x"},
  {name:"Wolf Gold", provider:"Pragmatic Play", rtp:96.01, volatility:"Medium", maxWin:"5,000x"},
  {name:"Book of Dead", provider:"Play'n GO", rtp:96.21, volatility:"High", maxWin:"5,000x"},
  {name:"Starburst", provider:"NetEnt", rtp:96.09, volatility:"Low", maxWin:"500x"},
  {name:"Gonzo's Quest", provider:"NetEnt", rtp:95.97, volatility:"Medium", maxWin:"2,500x"},
  {name:"Big Bass Bonanza", provider:"Pragmatic Play", rtp:96.71, volatility:"Medium", maxWin:"2,100x"},
  {name:"Money Train 2", provider:"Relax Gaming", rtp:96.40, volatility:"High", maxWin:"50,000x"},
];

function renderTable(data){
  const tbody = document.getElementById('rtp-tbody');
  tbody.innerHTML = data.map(s => `<tr>
    <td>${s.name}</td><td>${s.provider}</td><td>${s.rtp}%</td><td>${s.volatility}</td><td>${s.maxWin}</td>
  </tr>`).join('');
}

function applyFilters(){
  const provider = document.getElementById('f-provider').value;
  const volatility = document.getElementById('f-volatility').value;
  const minRtp = parseFloat(document.getElementById('f-minrtp').value) || 0;
  let filtered = slotData.filter(s =>
    (provider === 'all' || s.provider === provider) &&
    (volatility === 'all' || s.volatility === volatility) &&
    (s.rtp >= minRtp)
  );
  renderTable(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
  renderTable(slotData);
  document.getElementById('f-provider').addEventListener('change', applyFilters);
  document.getElementById('f-volatility').addEventListener('change', applyFilters);
  document.getElementById('f-minrtp').addEventListener('input', applyFilters);
});
