import img from './favicon.ico';
import './style.scss';
import * as textAreaElements from './textArea';
import Panel from './panel';
import makeKbd from './keyboard';

let lang = 'RU';
let capsStatus = 'OFF';
let shiftLeftStatus = 'OFF';
let shiftRightStatus = 'OFF';
const favicon = document.createElement('link');
const container = document.createElement('div');
const statusBar = new Panel(lang, capsStatus);

favicon.setAttribute('rel', 'icon');
favicon.setAttribute('href', `${img}`);
container.className = 'container';
document.head.append(favicon);
document.body.append(container);
container.append(textAreaElements.default);
container.append(statusBar.makePanel());
container.append(makeKbd(lang, shiftLeftStatus, shiftRightStatus, capsStatus));

const textAreaElement = document.querySelector('.textarea-container__textarea');

textAreaElement.onblur = function areaFocus() {
  textAreaElement.focus();
};

const writeToTextArea = (event) => {
  const areaValue = textAreaElement.value;
  const currentPosition = textAreaElement.selectionEnd;
  const before = areaValue.slice(0, currentPosition);
  const past = areaValue.slice(currentPosition, areaValue.length);
  if (event.target.textContent === 'Tab' || event.code === 'Tab') {
    const tab = '\t';
    textAreaElement.value = before + tab + past;
  } else {
    textAreaElement.value = before + event.target.textContent + past;
  }
  textAreaElement.setSelectionRange(currentPosition + 1, currentPosition + 1);
};

const changeDOM = () => {
  const panelContainer = document.querySelector('.panel-container');
  const kbdContainer = document.querySelector('.keyboard-container');
  panelContainer.replaceWith(new Panel(lang, capsStatus).makePanel());
  kbdContainer.replaceWith(makeKbd(lang, shiftLeftStatus, shiftRightStatus, capsStatus));
  const shiftLeft = document.querySelector('.ShiftLeft');
  const shiftRight = document.querySelector('.ShiftRight');
  const capsLock = document.querySelector('.CapsLock');
  if (shiftLeftStatus === 'ON') {
    shiftLeft.classList.add('active');
  } else {
    shiftLeft.classList.remove('active');
  }
  if (shiftRightStatus === 'ON') {
    shiftRight.classList.add('active');
  } else {
    shiftRight.classList.remove('active');
  }
  if (capsStatus === 'ON') {
    capsLock.classList.add('active');
  } else {
    capsLock.classList.remove('active');
  }
};

const changeTextArea = (event) => {
  const currentPosition = textAreaElement.selectionEnd;
  const areaValue = textAreaElement.value;
  event.target.classList.add('active');
  if (event.target.classList.contains('ShiftLeft')) {
    if (shiftLeftStatus === 'OFF') {
      shiftLeftStatus = 'ON';
      changeDOM();
    } else {
      shiftLeftStatus = 'OFF';
      changeDOM();
    }
  } else if (event.target.classList.contains('ShiftRight')) {
    if (shiftRightStatus === 'OFF') {
      shiftRightStatus = 'ON';
      changeDOM();
    } else {
      shiftRightStatus = 'OFF';
      changeDOM();
    }
  } else if (event.target.classList.contains('CapsLock')) {
    if (capsStatus === 'OFF') {
      capsStatus = 'ON';
      changeDOM();
    } else {
      capsStatus = 'OFF';
      changeDOM();
    }
  } else if (event.target.classList.contains('Backspace')) {
    const backSpace = textAreaElement.value;
    const backSpaceBefore = backSpace.slice(0, currentPosition - 1);
    const backSpacePast = backSpace.slice(currentPosition, backSpace.length);
    if (currentPosition !== 0) {
      textAreaElement.value = backSpaceBefore + backSpacePast;
      textAreaElement.setSelectionRange(currentPosition - 1, currentPosition - 1);
    }
  } else if (event.target.classList.contains('Delete')) {
    const deleteBefore = areaValue.slice(0, currentPosition);
    const deletePast = areaValue.slice(currentPosition + 1, areaValue.length);
    textAreaElement.value = deleteBefore + deletePast;
    textAreaElement.setSelectionRange(currentPosition, currentPosition);
  } else if (event.target.classList.contains('Enter')) {
    const before = areaValue.slice(0, currentPosition);
    const past = areaValue.slice(currentPosition, areaValue.length);
    const newStr = '\n';
    textAreaElements.textArea.value = before + newStr + past;
  } else if (event.target.classList.contains('ArrowUp')) {
    const before = areaValue.slice(0, currentPosition);
    const past = areaValue.slice(currentPosition, areaValue.length);
    const toInsert = '↑';
    textAreaElement.value = before + toInsert + past;
    textAreaElement.setSelectionRange(currentPosition + 1, currentPosition + 1);
  } else if (event.target.classList.contains('ArrowRight')) {
    const newPosition = textAreaElement.selectionEnd + 1;
    textAreaElement.setSelectionRange(newPosition, newPosition);
  } else if (event.target.classList.contains('ArrowDown')) {
    const before = areaValue.slice(0, currentPosition);
    const past = areaValue.slice(currentPosition, areaValue.length);
    const toInsert = '↓';
    textAreaElement.value = before + toInsert + past;
    textAreaElement.setSelectionRange(currentPosition + 1, currentPosition + 1);
  } else if (event.target.classList.contains('ArrowLeft')) {
    const newPosition = textAreaElement.selectionEnd - 1;
    if (newPosition > -1) textAreaElement.setSelectionRange(newPosition, newPosition);
  }
};

const combinationHandler = () => {
  const pressedKey = new Set();
  window.addEventListener('keydown', (event) => {
    pressedKey.add(event.code);

    if (pressedKey.has('ShiftLeft') && pressedKey.has('ControlLeft')) {
      lang = (lang === 'RU') ? 'EN' : 'RU';
      changeDOM();
      pressedKey.clear();
    }
  });
  window.addEventListener('keyup', (event) => {
    pressedKey.delete(event.code);
  });
};
combinationHandler();

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('language')) {
    lang = localStorage.getItem('language');
  }
  changeDOM();
});

window.onunload = function saveLang() {
  localStorage.setItem('language', lang);
};

document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('symbol-key')) {
    event.target.classList.add('active');
    writeToTextArea(event);
  } else if (event.target.classList.contains('special-key')) {
    changeTextArea(event);
  }
});

document.addEventListener('mouseup', (event) => {
  if (!event.target.classList.contains('CapsLock') && !event.target.classList.contains('ShiftLeft') && !event.target.classList.contains('ShiftRight')) {
    event.target.classList.remove('active');
  }
});

document.addEventListener('keydown', (event) => {
  document.querySelectorAll(`.${event.code}`).forEach((element) => {
    if (event.code !== 'ShiftLeft') element.classList.add('active');
    switch (event.code) {
      case 'CapsLock':
        capsStatus = event.getModifierState('CapsLock') ? 'OFF' : 'ON';
        changeDOM();
        break;
      case 'ShiftLeft':
        shiftLeftStatus = 'ON';
        changeDOM();
        break;
      case 'ShiftRight':
        shiftRightStatus = 'ON';
        changeDOM();
        break;
      case 'Tab':
        event.preventDefault();
        writeToTextArea(event);
        break;
      default:
        break;
    }
  });
});
document.addEventListener('keyup', (event) => {
  if (event.metaKey) {
    event.preventDefault();
  }
  if (!(event.code === 'CapsLock')) {
    document.querySelectorAll(`.${event.code}`).forEach((e) => {
      if (event.code === 'ShiftLeft') {
        shiftLeftStatus = 'OFF';
        changeDOM();
      } else if (event.code === 'ShiftRight') {
        shiftRightStatus = 'OFF';
        changeDOM();
      }
      e.classList.remove('active');
    });
  }
});
