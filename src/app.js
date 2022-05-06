import './style.scss';
import textArea from './textArea';
import keyboard from './keyboard';

const container = document.createElement('div');

container.className = 'container';

document.body.append(container);
container.append(textArea);
container.append(keyboard);
