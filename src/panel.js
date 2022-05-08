export default class Panel {
  constructor(lang) {
    this.lang = lang;
  }

  makePanel() {
    const panelContainer = document.createElement('section');
    const block = document.createElement('div');
    const currentLang = document.createElement('span');
    const hotKey = document.createElement('kbd');

    panelContainer.className = 'panel-container';
    block.className = 'panel__lang-block';
    currentLang.className = 'panel__current-lang';
    hotKey.className = 'panel_hotkey-lang';

    currentLang.innerText = `${this.lang}`;
    hotKey.innerText = '[Shift+Ctrl]';

    block.append(currentLang);
    block.append(hotKey);
    panelContainer.append(block);

    return panelContainer;
  }
}
