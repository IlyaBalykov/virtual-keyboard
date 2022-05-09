function makeRow(row, rowNumber, lang, shiftLeftStatus, shiftRightStatus, capsStatus) {
  const keyArr = [];
  const newRow = document.createElement('div');
  const reg = /^[\d\sa-zа-яё+=\-\\[\]`'"|/;.,]$|Tab/i;
  const regChar = /^[a-zа-яё]$/i;
  row.forEach((e, i) => {
    const key = document.createElement('div');
    let keyValueRu = e[0];
    const keyValueUpRu = e[1];
    let keyValueEn = e[2];
    const keyValueUpEn = e[3];
    const keySymbolId = e[4];
    const keySpecialId = e[4];
    newRow.className = `keyboard__${rowNumber}`;
    if (lang === 'RU') {
      if (shiftLeftStatus === 'OFF' && shiftRightStatus === 'OFF') {
        if (capsStatus === 'ON') {
          if (regChar.test(keyValueRu)) {
            keyValueRu = keyValueRu.toUpperCase();
            key.innerText = keyValueRu;
          } else {
            key.innerText = keyValueRu;
          }
        } else {
          key.innerText = keyValueRu;
        }
      } else {
        key.innerText = keyValueUpRu;
      }

      if (reg.test(keyValueRu)) {
        key.className = 'symbol-key';
        key.classList.add(`${keySymbolId}`);
      } else {
        key.className = 'special-key';
        key.classList.add(`${keySpecialId}`);
      }
    } else {
      if (shiftLeftStatus === 'OFF' || shiftRightStatus === 'OFF') {
        if (capsStatus === 'ON') {
          if (regChar.test(keyValueEn)) {
            keyValueEn = keyValueEn.toUpperCase();
            key.innerText = keyValueEn;
          } else {
            key.innerText = keyValueEn;
          }
        } else {
          key.innerText = keyValueEn;
        }
      } else {
        key.innerText = keyValueUpEn;
      }

      if (reg.test(keyValueEn)) {
        key.className = 'symbol-key';
        key.classList.add(`${keySymbolId}`);
      } else {
        key.className = 'special-key';
        key.classList.add(`${keySpecialId}`);
      }
    }
    key.dataset.keyPosition = `${rowNumber}-${i}`;
    keyArr.push(key);
  });
  newRow.append(...keyArr);
  return newRow;
}

export default function makeKbd(lang, shiftLeftStatus, shiftRightStatus, capsStatus) {
  const keyboardContainer = document.createElement('section');

  const firstRow = [['ё', 'Ё', '`', '~', 'Backquote'], [1, '!', 1, '!', 'Digit1'], [2, '"', 2, '@', 'Digit2'], [3, '№', 3, '#', 'Digit3'], [4, ';', 4, '$', 'Digit4'], [5, '%', 5, '%', 'Digit5'], [6, ':', 6, '^', 'Digit6'], [7, '?', 7, '&', 'Digit7'], [8, '*', 8, '*', 'Digit8'], [9, '(', 9, '(', 'Digit9'], [0, ')', 0, ')', 'Digit0'], ['-', '_', '-', '_', 'Minus'], ['=', '+', '=', '+', 'Equal'], ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']];
  const secondRow = [['Tab', 'Tab', 'Tab', 'Tab', 'Tab'], ['й', 'Й', 'q', 'Q', 'KeyQ'], ['ц', 'Ц', 'w', 'W', 'KeyW'], ['у', 'У', 'e', 'E', 'KeyE'], ['к', 'К', 'r', 'R', 'KeyR'], ['е', 'Е', 't', 'T', 'KeyT'], ['н', 'Н', 'y', 'Y', 'KeyY'], ['г', 'Г', 'u', 'U', 'KeyU'], ['ш', 'Ш', 'i', 'I', 'KeyI'], ['щ', 'Щ', 'o', 'O', 'KeyO'], ['з', 'З', 'p', 'P', 'KeyP'], ['х', 'Х', '[', '{', 'BracketLeft'], ['ъ', 'Ъ', ']', '}', 'BracketRight'], ['\\', '/', '\\', '|', 'Backslash'], ['Del', 'Del', 'Del', 'Del', 'Delete']];
  const thirdRow = [['Caps Lock', 'Caps Lock', 'Caps Lock', 'Caps Lock', 'CapsLock'], ['ф', 'Ф', 'a', 'A', 'KeyA'], ['ы', 'Ы', 's', 'S', 'KeyS'], ['в', 'В', 'd', 'D', 'KeyD'], ['а', 'А', 'f', 'F', 'KeyF'], ['п', 'П', 'g', 'G', 'KeyG'], ['р', 'Р', 'h', 'H', 'KeyH'], ['о', 'О', 'j', 'J', 'KeyJ'], ['л', 'Л', 'k', 'K', 'KeyK'], ['д', 'Д', 'l', 'L', 'KeyL'], ['ж', 'Ж', ';', ':', 'Semicolon'], ['э', 'Э', '\'', '"', 'Quote'], ['Enter', 'Enter', 'Enter', 'Enter', 'Enter']];
  const fourthRow = [['Shift', 'Shift', 'Shift', 'Shift', 'ShiftLeft'], ['я', 'Я', 'z', 'Z', 'KeyZ'], ['ч', 'Ч', 'x', 'X', 'KeyX'], ['с', 'С', 'c', 'C', 'KeyC'], ['м', 'М', 'v', 'V', 'KeyV'], ['и', 'И', 'b', 'B', 'KeyB'], ['т', 'Т', 'n', 'N', 'KeyN'], ['ь', 'Ь', 'm', 'M', 'KeyM'], ['б', 'Б', ',', '<', 'Comma'], ['ю', 'Ю', '.', '>', 'Period'], ['.', ',', '/', '?', 'Slash'], ['↑', '↑', '↑', '↑', 'ArrowUp'], ['Shift', 'Shift', 'Shift', 'Shift', 'ShiftRight']];
  const fifthRow = [['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ControlLeft'], ['Win', 'Win', 'Win', 'Win', 'Super'], ['Alt', 'Alt', 'Alt', 'Alt', 'AltLeft'], [' ', ' ', ' ', ' ', 'Space'], ['Alt', 'Alt', 'Alt', 'Alt', 'AltRight'], ['Ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'ControlRight'], ['←', '←', '←', '←', 'ArrowLeft'], ['↓', '↓', '↓', '↓', 'ArrowDown'], ['→', '→', '→', '→', 'ArrowRight']];

  const keyboardRows = [makeRow(firstRow, 'first-row', lang, shiftLeftStatus, shiftRightStatus, capsStatus),
    makeRow(secondRow, 'second-row', lang, shiftLeftStatus, shiftRightStatus, capsStatus),
    makeRow(thirdRow, 'third-row', lang, shiftLeftStatus, shiftRightStatus, capsStatus),
    makeRow(fourthRow, 'fourth-row', lang, shiftLeftStatus, shiftRightStatus, capsStatus),
    makeRow(fifthRow, 'fifth-row', lang)];

  keyboardContainer.className = 'keyboard-container';
  keyboardContainer.append(...keyboardRows);
  return keyboardContainer;
}
