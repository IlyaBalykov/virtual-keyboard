import './style.scss';
import * as textAreaElements from './textArea';
import keyboard from './keyboard';

const container = document.createElement('div');
let lang = 'ru';

container.className = 'container';

document.body.append(container);
container.append(textAreaElements.default);
container.append(keyboard);

const symbolKey = document.querySelectorAll('.symbol-key');
const specialKey = document.querySelectorAll('.special-key');
const textAreaElement = document.querySelector('.textarea-container__textarea');

function writeToTextArea(event) {
  event.target.classList.remove('active');
  if (event.shiftKey) {
    textAreaElements.textArea.value += `${event.target.textContent.toUpperCase()}`;
  } else if (event.target.textContent === 'Tab') {
    textAreaElements.textArea.value += '\t';
    textAreaElements.textArea.focus();
  } else {
    textAreaElements.textArea.value += `${event.target.textContent.toLowerCase()}`;
  }
}

const changeLanguage = () => {
  if (lang === 'ru') {
    lang = 'en';
  } else {
    lang = 'ru';
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
  });
});
document.addEventListener('keyup', (event) => {
  if (!(event.code === 'CapsLock')) {
    document.querySelectorAll(`.${event.code}`).forEach((e) => {
      e.classList.remove('active');
    });
  }
});
