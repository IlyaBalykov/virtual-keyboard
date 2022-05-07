function makeRow(row, rowNumber) {
  const keyArr = [];
  const newRow = document.createElement('div');
  const reg = /^[\da-zа-яЁё+\-=]$|Tab| /i;
  row.forEach((e, i) => {
    const key = document.createElement('div');
    const keyValue = e[0];
    const keyId = e[1];
    newRow.className = `keyboard__${rowNumber}`;
    key.innerText = keyValue;
    if (reg.test(keyValue)) {
      key.className = 'symbol-key';
      key.classList.add(`${keyId}`);
    } else {
      key.className = 'special-key';
      key.classList.add(`${keyId}`);
    }
    key.dataset.keyPosition = `${rowNumber}-${i}`;
    keyArr.push(key);
  });
  newRow.append(...keyArr);
  return newRow;
}

function makeKbd() {
  const keyboardContainer = document.createElement('section');
  const firstRow = [['ё', 'Backquote'], [1, 'Digit1'], [2, 'Digit2'], [3, 'Digit3'], [4, 'Digit4'], [5, 'Digit5'], [6, 'Digit6'], [7, 'Digit7'], [8, 'Digit8'], [9, 'Digit9'], [0, 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], ['Backspace', 'Backspace']];
  const secondRow = [['Tab', 'Tab'], ['Й', 'KeyQ'], ['Ц', 'KeyW'], ['У', 'KeyE'], ['К', 'KeyR'], ['Е', 'KeyT'], ['Н', 'KeyY'], ['Г', 'KeyU'], ['Ш', 'KeyI'], ['Щ', 'KeyO'], ['З', 'KeyP'], ['Х', 'BracketLeft'], ['Ъ', 'BracketRight'], ['\\', 'Backslash'], ['DEL', 'Delete']];
  const thirdRow = [['Caps Lock', 'CapsLock'], ['Ф', 'KeyA'], ['Ы', 'KeyS'], ['В', 'KeyD'], ['А', 'KeyF'], ['П', 'KeyG'], ['Р', 'KeyH'], ['О', 'KeyJ'], ['Л', 'KeyK'], ['Д', 'KeyL'], ['Ж', 'Semicolon'], ['Э', 'Quote'], ['Enter', 'Enter']];
  const fourthRow = [['Shift', 'ShiftLeft'], ['\\', 'Backslash'], ['Я', 'KeyZ'], ['Ч', 'KeyX'], ['С', 'KeyC'], ['М', 'KeyV'], ['И', 'KeyB'], ['Т', 'KeyN'], ['Ь', 'KeyM'], ['Б', 'Comma'], ['Ю', 'Period'], ['/', 'Slash'], ['^', 'ArrowUp'], ['Shift', 'ShiftRight']];
  const fifthRow = [['Ctl', 'ControlLeft'], ['Win', 'Super'], ['Alt', 'AltLeft'], [' ', 'Space'], ['Alt', 'AltRight'], ['Ctrl', 'ControlRight'], ['<', 'ArrowLeft'], ['^', 'ArrowDown'], ['>', 'ArrowRight']];

  const keyboardRows = [makeRow(firstRow, 'first-row'),
    makeRow(secondRow, 'second-row'),
    makeRow(thirdRow, 'third-row'),
    makeRow(fourthRow, 'fourth-row'),
    makeRow(fifthRow, 'fifth-row')];

  keyboardContainer.className = 'keyboard-container';
  keyboardContainer.append(...keyboardRows);
  return keyboardContainer;
}

export default makeKbd();
