import './style.scss';
import * as textAreaElements from './textArea';
import Panel from './panel';
import keyboard from './keyboard';

// Main variables
const container = document.createElement('div');
let lang = 'RU';
const statusBar = new Panel(lang);

container.className = 'container';

document.body.append(container);
container.append(textAreaElements.default);
container.append(statusBar.makePanel());
container.append(keyboard);

// Selectors after render
const symbolKey = document.querySelectorAll('.symbol-key');
const specialKey = document.querySelectorAll('.special-key');
const textAreaElement = document.querySelector('.textarea-container__textarea');

const writeToTextArea = (event) => {
  event.target.classList.remove('active');
  if (event.shiftKey) {
    textAreaElements.textArea.value += `${event.target.textContent.toUpperCase()}`;
  } else if (event.target.textContent === 'Tab') {
    textAreaElements.textArea.value += '\t';
    textAreaElements.textArea.focus();
  } else {
    textAreaElements.textArea.value += `${event.target.textContent.toLowerCase()}`;
  }
};

const changeLanguage = () => {
  const panelContainer = document.querySelector('.panel-container');
  if (lang === 'RU') {
    lang = 'EN';
    panelContainer.replaceWith(new Panel(lang).makePanel());
  } else {
    lang = 'RU';
    panelContainer.replaceWith(new Panel(lang).makePanel());
  }
};

const changeTextArea = (event) => {
  event.target.classList.remove('active');
  if (event.target.textContent === 'Backspace') {
    const backSpace = new KeyboardEvent('keydown', {
      bubbles: true, cancelable: true, key: 'Backspace',
    });
    textAreaElement.focus();
    textAreaElement.dispatchEvent(backSpace);
  }
};

const combinationHandler = () => {
  const pressedKey = new Set();
  window.addEventListener('keydown', (event) => {
    pressedKey.add(event.code);

    if (pressedKey.has('ShiftLeft') && pressedKey.has('ControlLeft')) {
      changeLanguage();
      pressedKey.clear();
    }
  });
  window.addEventListener('keyup', (event) => {
    pressedKey.delete(event.code);
  });
};
combinationHandler();

symbolKey.forEach((e) => {
  e.addEventListener('mouseup', writeToTextArea);
});
symbolKey.forEach((e) => {
  e.addEventListener('mousedown', (event) => {
    event.target.classList.add('active');
  });
});
specialKey.forEach((e) => {
  e.addEventListener('mouseup', changeTextArea);
});
specialKey.forEach((e) => {
  e.addEventListener('mousedown', (event) => {
    event.target.classList.add('active');
  });
});

document.addEventListener('keydown', (event) => {
  document.querySelectorAll(`.${event.code}`).forEach((e) => {
    e.classList.add('active');
    switch (event.code) {
      case 'ArrowUp': textAreaElements.textArea.value += '^';
        break;
      case 'ArrowRight': textAreaElements.textArea.value += '>';
        break;
      case 'ArrowDown': textAreaElements.textArea.value += '^';
        break;
      case 'ArrowLeft': textAreaElements.textArea.value += '<';
        break;
      default:
        break;
    }
  });
});
document.addEventListener('keyup', (event) => {
  if (!(event.code === 'CapsLock')) {
    document.querySelectorAll(`.${event.code}`).forEach((e) => {
      e.classList.remove('active');
    });
  }
});
