(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  if (!button) return;

  const systemDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : { matches: false };
  let saved;
  try { saved = localStorage.getItem('spinora-theme'); } catch (error) {}
  root.dataset.theme = saved === 'light' || saved === 'dark'
    ? saved : (systemDark.matches ? 'dark' : 'light');

  const syncButton = () => {
    button.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
  };
  syncButton();

  button.addEventListener('click', () => {
    root.classList.add('theme-anim');
    void root.offsetWidth;
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('spinora-theme', root.dataset.theme); } catch (error) {}
    syncButton();
    setTimeout(() => root.classList.remove('theme-anim'), 420);
  });

  systemDark.addEventListener?.('change', event => {
    try { saved = localStorage.getItem('spinora-theme'); } catch (error) {}
    if (saved === 'light' || saved === 'dark') return;
    root.dataset.theme = event.matches ? 'dark' : 'light';
    syncButton();
  });
})();

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
