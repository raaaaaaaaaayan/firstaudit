(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');
  const desktopLanguageSwitcher = document.querySelector('.nav-actions .language-switcher');

  if (menu && desktopLanguageSwitcher && !menu.querySelector('.mobile-language-item')) {
    const item = document.createElement('li');
    item.className = 'mobile-language-item';
    item.append(desktopLanguageSwitcher.cloneNode(true));
    menu.append(item);
  }

  if (toggle && menu) {
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('open');
      document.body.classList.remove('menu-open');
    };

    toggle.addEventListener('click', () => {
      const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(willOpen));
      menu.classList.toggle('open', willOpen);
      document.body.classList.toggle('menu-open', willOpen);
    });

    menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  const filterButtons = document.querySelectorAll('[data-filter]');
  const filterItems = document.querySelectorAll('[data-category]');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle('active', item === button));
      filterItems.forEach((item) => {
        const visible = filter === 'all' || item.dataset.category.split(' ').includes(filter);
        item.hidden = !visible;
      });
    });
  });

  document.querySelectorAll('[data-formspree]').forEach((form) => {
    const status = form.querySelector('[data-form-status]');
    const submit = form.querySelector('[type="submit"]');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const initialLabel = submit.textContent;
      submit.disabled = true;
      submit.textContent = 'Envoi en cours…';
      status.textContent = '';
      status.className = 'form-status';
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (!response.ok) throw new Error('formspree');
        form.reset();
        status.textContent = 'Merci. Votre demande a bien été envoyée au cabinet.';
        status.classList.add('success');
      } catch {
        status.textContent = 'L’envoi n’a pas abouti. Vous pouvez nous écrire à contact@firstaudit.ma.';
        status.classList.add('error');
      } finally {
        submit.disabled = false;
        submit.textContent = initialLabel;
      }
    });
  });
})();
