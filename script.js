const body = document.querySelector('body');
body.insertAdjacentHTML(
  'afterbegin',
  '<div class="container"> <textarea class="textarea" autofocus cols="30" rows="10"></textarea> <div class="keyboard"> <div class="row"> <div class="key">`</div><div class="key">1</div><div class="key">2</div><div class="key">3</div><div class="key">4</div><div class="key">5</div><div class="key">6</div><div class="key">7</div><div class="key">8</div><div class="key">9</div><div class="key">0</div><div class="key">-</div><div class="key">=</div><div class="key key--backspace">Backspace</div></div><div class="row"> <div class="key key--tab">Tab</div><div class="key">q</div><div class="key">w</div><div class="key">e</div><div class="key">r</div><div class="key">t</div><div class="key">y</div><div class="key">u</div><div class="key">i</div><div class="key">o</div><div class="key">p</div><div class="key">[</div><div class="key">]</div><div class="key">\\</div><div class="key key--del">Del</div></div><div class="row"> <div class="key key--caps-lock">Caps Lock</div><div class="key">a</div><div class="key">s</div><div class="key">d</div><div class="key">f</div><div class="key">g</div><div class="key">h</div><div class="key">j</div><div class="key">k</div><div class="key">l</div><div class="key">;</div><div class="key">\'</div><div class="key key--enter">Enter</div></div><div class="row"> <div class="key key--shift key--shift-left">Shift</div><div class="key">z</div><div class="key">x</div><div class="key">c</div><div class="key">v</div><div class="key">b</div><div class="key">n</div><div class="key">m</div><div class="key">,</div><div class="key">.</div><div class="key">/</div><div class="key key--up">▲</div><div class="key key--shift key--shift-right">Shift</div></div><div class="row"> <div class="key key--ctrl-left">Ctrl</div><div class="key key--win">Win</div><div class="key key--alt-left">Alt</div><div class="key key--space"></div><div class="key key--alt-right">Alt</div><div class="key key--left">◄</div><div class="key key--down">▼</div><div class="key key--right">►</div><div class="key key--ctrl-right">Ctrl</div></div></div><div class="description"> <h2>Keyboard created in Windows OS</h2> <h2>Combination for language switch : left Ctrl +  Alt</h2> </div></div>',
);

const keys = document.querySelectorAll('.key');
const textArea = document.querySelector('.textarea');
const spaceKey = document.querySelector('.key--space');
const tabKey = document.querySelector('.key--tab');
const delKey = document.querySelector('.key--del');
const leftShiftKey = document.querySelector('.key--shift-left');
const rightShiftKey = document.querySelector('.key--shift-right');
const leftAltKey = document.querySelector('.key--alt-left');
const rightAltKey = document.querySelector('.key--alt-right');
const leftCtrlKey = document.querySelector('.key--ctrl-left');
const rightCtrlKey = document.querySelector('.key--ctrl-right');
const capsLockKey = document.querySelector('.key--caps-lock');
const keyLeft = document.querySelector('.key--left');
const keyRight = document.querySelector('.key--right');
const keyUp = document.querySelector('.key--up');
const keyDown = document.querySelector('.key--down');
const keyWin = document.querySelector('.key--win');

for (let i = 0; i < keys.length; i += 1) {
  keys[i].setAttribute('keyname', keys[i].innerHTML);
  keys[i].setAttribute('upperCaseName', keys[i].innerHTML.toUpperCase());
}

document.addEventListener('keydown', (e) => {
  textArea.focus();
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('upperCaseName')) {
      keys[i].classList.add('active');
    }
  }
  if (e.code === 'Space') {
    spaceKey.classList.add('active');
  }
  if (e.code === 'Delete') {
    delKey.classList.add('active');
  }
  if (e.code === 'ShiftLeft') {
    rightShiftKey.classList.remove('active');
  }
  if (e.code === 'ShiftRight') {
    leftShiftKey.classList.remove('active');
  }
  if (e.code === 'AltLeft') {
    e.preventDefault();
    rightAltKey.classList.remove('active');
    setTimeout(() => {
      leftAltKey.classList.remove('active');
    }, 500);
  }
  if (e.code === 'AltRight') {
    e.preventDefault();
    leftAltKey.classList.remove('active');
    setTimeout(() => {
      rightAltKey.classList.remove('active');
    }, 500);
  }
  if (e.code === 'CapsLock') {
    capsLockKey.classList.toggle('active');
  }
  if (e.code === 'ControlLeft') {
    leftCtrlKey.classList.add('active');
  }
  if (e.code === 'ControlRight') {
    rightCtrlKey.classList.add('active');
  }
  if (e.code === 'Tab') {
    e.preventDefault();
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    textArea.value = `${textArea.value.substring(0, start)}\t${textArea.value.substring(end)}`;
    textArea.selectionEnd = start + 1;
    textArea.selectionStart = textArea.selectionEnd;
    tabKey.classList.add('active');
  }
  if (e.code === 'ArrowUp') {
    e.preventDefault();
    keyUp.classList.add('active');
    textArea.value += '▲';
  }
  if (e.code === 'ArrowDown') {
    e.preventDefault();
    keyDown.classList.add('active');
    textArea.value += '▼';
  }
  if (e.code === 'ArrowLeft') {
    e.preventDefault();
    keyLeft.classList.add('active');
    textArea.value += '◄';
  }
  if (e.code === 'ArrowRight') {
    e.preventDefault();
    keyRight.classList.add('active');
    textArea.value += '►';
  }
  if (e.code === 'MetaLeft') {
    keyWin.classList.add('active');
    setTimeout(() => {
      keyWin.classList.remove('active');
    }, 500);
  }
});
window.addEventListener('keyup', (e) => {
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname') || e.key === keys[i].getAttribute('upperCaseName')) {
      keys[i].classList.remove('active');
    }
    if (e.code === 'Space') {
      spaceKey.classList.remove('active');
    }
    if (e.code === 'Delete') {
      delKey.classList.remove('active');
    }
    if (e.code === 'ArrowUp') {
      keyUp.classList.remove('active');
    }
    if (e.code === 'ArrowDown') {
      keyDown.classList.remove('active');
    }
    if (e.code === 'ArrowLeft') {
      keyLeft.classList.remove('active');
    }
    if (e.code === 'ArrowRight') {
      keyRight.classList.remove('active');
    }
    if (e.code === 'ControlLeft') {
      leftCtrlKey.classList.remove('active');
    }
    if (e.code === 'ControlRight') {
      rightCtrlKey.classList.remove('active');
    }
  }
});
