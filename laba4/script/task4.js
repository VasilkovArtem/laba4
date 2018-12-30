
function randomNumberous(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById('task4').addEventListener('click', handler);

function handler(e) {
  let newRectangle = document.createElement('div');  
  let task4 = document.getElementById('task4');
  let r = Math.floor(Math.random() * (223));
  let g = Math.floor(Math.random() * (256));
  let b = Math.floor(Math.random() * (256));
  let color = '#' + r.toString(16) + g.toString(16) + b.toString(16);

  let coordWigth = randomNumberous(40, 150);
  let pixWidth = coordWigth.toString(10) + 'px';
  let coordHight = randomNumberous(40, 150);
  let pixHeight = coordHight.toString(10) + 'px';

  let x = e.clientX - task4.offsetLeft - coordWigth/2;
  let y = e.clientY - task4.offsetTop - coordHight/2;

  let leftPX = x + 'px';
  let topPX = y + 'px';



  Element.prototype.setAttributes = function (attrs) {
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

  newRectangle.setAttribute('class', 'myLabel');

  newRectangle.setAttributes({
    'styles': {
      'height': pixHeight,
      'width': pixWidth,
      'backgroundColor': color,
      'left': leftPX,
      'top': topPX,
    },
  });

  task4.appendChild(newRectangle);

}
