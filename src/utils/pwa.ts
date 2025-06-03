import { Workbox } from 'workbox-window';

export const registerSW = () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');

    wb.addEventListener('installed', (event) => {
      if (event.isUpdate) {
        if (confirm('Nova versão disponível! Recarregar para atualizar?')) {
          window.location.reload();
        }
      }
    });

    wb.register();
  }
};