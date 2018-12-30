function addRectangle() {
  let newRectangle = document.createElement('div');
  newRectangle.innerHTML;
  let task2 = document.getElementById('task2');
  task2.appendChild(newRectangle);

  let r = Math.floor(Math.random() * (223));
  let g = Math.floor(Math.random() * (256));
  let b = Math.floor(Math.random() * (256));
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  let leftNumber = randomNumberous(0, 600);
  let leftPX = leftNumber.toString(10) + 'px';
  let topNumber = randomNumberous(0, 300);
  let topPX = topNumber.toString(10) + 'px';

  let coordWigth = randomNumberous(40, 150);
  let pixWidth = coordWigth.toString(10) + 'px';
  let coordHight = randomNumberous(40, 150);
  let pixHeight = coordHight.toString(10) + 'px';

  Element.prototype.setAttributes = function(attrs) {
    for (var idx in attrs) {
      if ((idx === 'styles' || idx === 'style') && typeof attrs[idx] === 'object') {
        for (var prop in attrs[idx]) {
          this.style[prop] = attrs[idx][prop];
        }
      } else {
        this.setAttribute(idx, attrs[idx]);
      }
    }
  };

  newRectangle.setAttributes({
    'styles': {
      'height': pixHeight,
      'width': pixWidth,
      'backgroundColor': color,
      'left': leftPX,
      'top': topPX,
    },
  });

  newRectangle.setAttribute('class', 'myLabel');

  task2.onclick = function(event) {
    let target = event.target;
    if (target.className != 'myLabel') return;
    light(target);
    target.style.zIndex = 1000;
  };
}

function moveRect(e) {
  let Rect = document.getElementById("myLabels");

  let cs = window.getComputedStyle(Rect);

  let left = parseInt(cs.left);
  let top = parseInt(cs.top);

  switch (e.keyCode) {
    case 65:
      if (Rect.offsetLeft > 0)
        Rect.style.left = left - 5 + "px";
      break;
    case 87:
      if (top > 0)
        Rect.style.top = top - 5 + "px";
      break;
    case 68:
      if (left < document.documentElement.clientWidth - 100)
        Rect.style.left = left + 5 + "px";
      break;
    case 83:
      if (top < document.documentElement.clientHeight - 100)
        Rect.style.top = top + 5 + "px";
      break;
  }

  if (Rect.offsetTop < 0) {
    Rect.style.top = 0;
  }
  if (Rect.offsetLeft < 0) {
    Rect.style.left = 0;
  }

  let rightPosition = Rect.offsetLeft;
  let blockPosition = Rect.offsetWidth;
  let sizeBlock = rightPosition + blockPosition;
  if (sizeBlock > 800) {
    Rect.style.left = (800 - Rect.offsetWidth) + 'px';
  }

  let bottomPosition = Rect.offsetTop;
  let heightBlock = Rect.offsetHeight;
  let sizeTopHeight = bottomPosition + heightBlock;
  if (sizeTopHeight > 400) {
    Rect.style.top = (400 - Rect.offsetHeight) + 'px';
  }
}

addEventListener("keydown", moveRect);

function randomNumberous(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
let selectedDiv;
function light(node) {
  if (selectedDiv) {
    selectedDiv.removeAttribute('id');
  }
  selectedDiv = node;
  selectedDiv.setAttribute('id', 'myLabels');
}
