function addBlock() {
  let newRectangle = document.createElement('div');
  newRectangle.innerHTML;
  let task3 = document.getElementById('task3');
  task3.appendChild(newRectangle);

  let r = Math.floor(Math.random() * (223));
  let g = Math.floor(Math.random() * (256));
  let b = Math.floor(Math.random() * (256));
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  let widthNumber = randomNumberous(40, 100);
  let widthPX = widthNumber.toString(10) + 'px';
  let heightNumber = randomNumberous(40, 100);
  let heightPX = heightNumber.toString(10) + 'px';

  let leftNumber = randomNumberous(110, 790);
  let leftPX = leftNumber.toString(10) + 'px';
  let topNumber = randomNumberous(110, 400);
  let topPX = topNumber.toString(10) + 'px';

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
      'backgroundColor': color,
      'width': widthPX,
      'height': heightPX,
      'left': leftPX,
      'top': topPX,

    },
  });

  newRectangle.setAttribute('class', 'draggable')
}

document.onmousedown = function(e) {
  let elem = e.target;
  if (elem.className && elem.className.indexOf('draggable') >= 0) {
    elem.ondragstart = function() {
      return false
    };
    let coor = elem.getBoundingClientRect();
    let osx = e.offsetX;
    let osy = e.offsetY;
    elem.style.position = 'fixed';
    elem.style.top = coor.top + 'px';
    elem.style.left = coor.left + 'px';

    document.onmousemove = function(ev) {
      let x = ev.clientX;
      let y = ev.clientY;

      let winX = document.documentElement.clientWidth;
      let winY = document.documentElement.clientHeight;

      if (x + coor.width > winX + osx - 374) {
        x = winX - coor.width + osx - 374;
      };
      if (x - osx < 115) {
        x = osx + 115;
      };
      if (y <= osy + 110) {
        y = osy + 110;
      };
      if (y >= (winY - coor.height + osy - 127)) {
        y = winY - coor.hieght - osy - 127;
      }
      elem.style.left = x - osx + 'px';
      elem.style.top = y - osy + 'px';
      removeSelect();
    }
  }
}

document.onmouseup = function(e) {
  var elem = e.target;
  document.onmousemove = function() {
    return false;
  };
}

function removeSelect() {
  var b = document.body;
  b.style.webkitUserSelect = b.style.mozUserSelect = b.style.msUserSelect = 'none';
}