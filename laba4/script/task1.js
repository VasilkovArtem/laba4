function getText() {
  let newLine = document.createElement('div');
  let text = document.getElementById('typedText').value;
  let textcolor = document.getElementById('colorText').value;
  let selectionPosition = document.getElementsByName('positionInList');

  newLine.innerHTML = text;
  newLine.onclick = remRow;

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

  function remRow() {
    list.removeChild(this);
  };

  newLine.setAttributes({
    'styles': {
      'backgroundColor': textcolor,
    },
  });

  for (let i = 0; i < selectionPosition.length; i++) {
    if (selectionPosition[i].type == "radio" && selectionPosition[i].checked) {
      list.appendChild(newLine);
    } else {
      list.insertBefore(newLine, list.firstChild);
    }
  }
}

function alertText() {
  let getAlert = document.getElementById('list');
  let object = getAlert.children;
  let stackSlements = new Array();
  object = Array.prototype.slice.call(object);
  for (let i = 0; i < object.length; i++) {
    stackSlements[i] = object[i].textContent;
  }
  alert(stackSlements.join(' '));
}  