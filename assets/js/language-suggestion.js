(() => {
  const banner = document.getElementById('language-suggestion');
  if (!banner || sessionStorage.getItem('spinora-language-suggestion-dismissed')) return;
  const current = document.documentElement.lang.slice(0, 2).toLowerCase();
  const preferred = (navigator.languages || [navigator.language || ''])
    .map(value => value.slice(0, 2).toLowerCase())
    .find(value => value === 'es' || value === 'pt');
  if (!preferred || preferred === current) return;
  const alternate = document.querySelector(`link[rel="alternate"][hreflang="${preferred}"]`) ||
    document.querySelector(`link[rel="alternate"][hreflang="${preferred}-BR"]`);
  if (!alternate) return;
  const link = document.getElementById('language-suggestion-link');
  link.href = alternate.href;
  link.textContent = preferred === 'pt' ? 'Disponível em português' : 'Disponible en español';
  banner.hidden = false;
  document.getElementById('language-suggestion-close').addEventListener('click', () => {
    banner.hidden = true;
    sessionStorage.setItem('spinora-language-suggestion-dismissed', '1');
  });
})();
