export default class Panel {
  constructor(lang, capsStatus) {
    this.lang = lang;
    this.capsStatus = capsStatus;
  }

  makePanel() {
    const capsLock = document.querySelector('.CapsLock');
    const panelContainer = document.createElement('section');
    const panelArr = [['[Shift+Ctrl]', this.lang], ['[CapsLock]', this.capsStatus], ['Keyboard created in Linux']];
    panelContainer.className = 'panel-container';
    panelArr.forEach((e, i) => {
      const block = document.createElement('div');
      const hotKeyLine = document.createElement('kbd');
      const currentStatusLine = document.createElement('span');
      const kbdKey = e[0];
      const kbdKeyStatus = e[1];
      block.className = 'panel__block';
      if (i < panelArr.length - 1) {
        hotKeyLine.className = 'panel__hotkey';
        currentStatusLine.className = 'panel__current-status';
        hotKeyLine.innerText = `${kbdKey}`;
        currentStatusLine.innerText = `${kbdKeyStatus}`;
        block.append(hotKeyLine);
        block.append(currentStatusLine);
        panelContainer.append(block);
      } else {
        hotKeyLine.className = 'panel__os';
        hotKeyLine.innerText = `${kbdKey}`;
        block.append(hotKeyLine);
        panelContainer.append(block);
      }
    });
    if (capsLock) {
      if (this.capsStatus === 'OFF') {
        capsLock.classList.remove('active');
      } else if (this.capsStatus === 'ON') {
        capsLock.classList.add('active');
      }
    }

    return panelContainer;
  }
}
