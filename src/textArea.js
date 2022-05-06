function makeTextArea() {
  const textAreaContainer = document.createElement('section');
  const textArea = document.createElement('textarea');

  textAreaContainer.className = 'textarea-container';
  textArea.className = 'textarea-container__textarea';

  textArea.setAttribute('rows', '5');
  textArea.setAttribute('cols', '40');
  textArea.setAttribute('autocorrect', '');
  textArea.setAttribute('wrap', 'hard');
  textArea.setAttribute('autocorrect', '');
  textArea.setAttribute('autofocus', '');

  textAreaContainer.append(textArea);

  return textAreaContainer;
}

export default makeTextArea();
