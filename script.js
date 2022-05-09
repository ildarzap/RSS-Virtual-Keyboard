const body = document.querySelector('body');
body.insertAdjacentHTML(
  'afterbegin',
  '<div class="container"> <textarea class="textarea" autofocus cols="30" rows="10"></textarea> <div class="keyboard"> <div class="row"> <div class="key" ruKeyName="ё">`</div><div class="key">1</div><div class="key">2</div><div class="key">3</div><div class="key">4</div><div class="key">5</div><div class="key">6</div><div class="key">7</div><div class="key">8</div><div class="key">9</div><div class="key">0</div><div class="key">-</div><div class="key">=</div><div class="key key--backspace key--service">Backspace</div></div><div class="row"> <div class="key key--tab key--service">Tab</div><div class="key" ruKeyName="й">q</div><div class="key" ruKeyName="ц">w</div><div class="key" ruKeyName="у">e</div><div class="key" ruKeyName="к">r</div><div class="key" ruKeyName="е">t</div><div class="key" ruKeyName="н">y</div><div class="key" ruKeyName="г">u</div><div class="key" ruKeyName="ш">i</div><div class="key" ruKeyName="щ">o</div><div class="key" ruKeyName="з">p</div><div class="key" ruKeyName="х">[</div><div class="key" ruKeyName="ъ">]</div><div class="key">\\</div><div class="key key--del key--service">Del</div></div><div class="row"> <div class="key key--caps-lock key--service">Caps Lock</div><div class="key" ruKeyName="ф">a</div><div class="key" ruKeyName="ы">s</div><div class="key" ruKeyName="в">d</div><div class="key" ruKeyName="а">f</div><div class="key" ruKeyName="п">g</div><div class="key" ruKeyName="р">h</div><div class="key" ruKeyName="о">j</div><div class="key" ruKeyName="л">k</div><div class="key" ruKeyName="д">l</div><div class="key" ruKeyName="ж">;</div><div class="key" ruKeyName="э">\'</div><div class="key key--enter key--service">Enter</div></div><div class="row"> <div class="key key--shift key--shift-left key--service">Shift</div><div class="key" ruKeyName="я">z</div><div class="key" ruKeyName="ч">x</div><div class="key" ruKeyName="с">c</div><div class="key" ruKeyName="м">v</div><div class="key" ruKeyName="и">b</div><div class="key" ruKeyName="т">n</div><div class="key" ruKeyName="ь">m</div><div class="key" ruKeyName="б">,</div><div class="key" ruKeyName="ю">.</div><div class="key" ruKeyName=".">/</div><div class="key key--up">▲</div><div class="key key--shift key--shift-right key--service key--service">Shift</div></div><div class="row"> <div class="key key--ctrl-left key--service">Ctrl</div><div class="key key--win key--service">Win</div><div class="key key--alt-left key--service">Alt</div><div class="key key--space"></div><div class="key key--alt-right key--service">Alt</div><div class="key key--left">◄</div><div class="key key--down">▼</div><div class="key key--right">►</div><div class="key key--ctrl-right key--service">Ctrl</div></div></div><div class="description"> <h2>Keyboard created in Windows OS</h2> <h2>Combination for language switch : left Ctrl + Alt</h2> </div></div>',
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
  if (!keys[i].classList.contains('key--service')) {
    keys[i].setAttribute('upperCaseName', keys[i].innerHTML.toUpperCase());
  }
}

document.addEventListener('keydown', (e) => {
  textArea.focus();
  for (let i = 0; i < keys.length; i += 1) {
    if (e.key === keys[i].getAttribute('keyname')) {
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
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].hasAttribute('upperCaseName')) {
        keys[i].textContent = keys[i].getAttribute('upperCaseName');
      }
    }
    if (!capsLockKey.classList.contains('active')) {
      for (let i = 0; i < keys.length; i += 1) {
        if (keys[i].hasAttribute('upperCaseName')) {
          keys[i].textContent = keys[i].getAttribute('keyName');
        }
      }
    }
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

  if (e.ctrlKey && e.altKey) {
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i].hasAttribute('ruKeyName')) {
        keys[i].textContent = keys[i].getAttribute('ruKeyName');
      }
    }
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

for (let i = 0; i < keys.length; i += 1) {
  keys[i].addEventListener('mousedown', () => {
    keys[i].classList.add('active');
    if (!keys[i].classList.contains('key--service')) {
      textArea.value += keys[i].getAttribute('keyname');
    }
    if (keys[i].getAttribute('keyname') === 'Backspace') {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      textArea.value = textArea.value.substring(0, start - 1) + textArea.value.substring(end);
      textArea.selectionStart = end;
      textArea.selectionEnd = end;
    }
    if (keys[i].getAttribute('keyname') === 'Tab') {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      textArea.value = `${textArea.value.substring(0, start)}\t${textArea.value.substring(end)}`;
      textArea.selectionEnd = start + 1;
      textArea.selectionStart = textArea.selectionEnd;
    }
    if (keys[i].getAttribute('keyname') === 'Enter') {
      textArea.value += '\n';
    }
    if (keys[i].getAttribute('keyname') === 'Del') {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      textArea.value = textArea.value.substring(0, start) + textArea.value.substring(end + 1);
      textArea.selectionStart = start;
      textArea.selectionEnd = end + 1;
    }

    if (keys[i].classList.contains('key--space')) {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      textArea.value = `${textArea.value.substring(0, start)} ${textArea.value.substring(end)}`;
      textArea.selectionEnd = start + 1;
      textArea.selectionStart = textArea.selectionEnd;
    }
    if (keys[i].getAttribute('keyname') === 'Caps Lock') {
      capsLockKey.classList.add('active');
      for (let index = 0; index < keys.length; index += 1) {
        if (keys[index].hasAttribute('upperCaseName')) {
          keys[index].textContent = keys[index].getAttribute('upperCaseName');
        }
      }
      if (!capsLockKey.classList.contains('active')) {
        for (let index = 0; index < keys.length; index += 1) {
          if (keys[index].hasAttribute('upperCaseName')) {
            keys[index].textContent = keys[index].getAttribute('keyName');
          }
        }
      }
    }
  });

  keys[i].addEventListener('mouseup', () => {
    if (keys[i].getAttribute('keyname') !== 'Caps Lock') {
      keys[i].classList.remove('active');
    }
  });
}
