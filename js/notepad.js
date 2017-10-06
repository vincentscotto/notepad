// min / max & (todo) close
const min = document.querySelector('.min');
const max = document.querySelector('.max');
const notepad = document.querySelector('.container');

min.addEventListener('click', toggle);
max.addEventListener('click', toggle);

function toggle(){
  notepad.classList.toggle('minimized');
}


// file, edit, format & help
const items = document.querySelectorAll('.items');
const menuItems = Array.from(items[0].children);
console.log(menuItems);

menuItems.forEach(item => item.addEventListener('click', () => {
  console.log(item);
}));


// drag
let selected = null,
 // stores x & y coords of the mouse pointer
    posX = 0,
    posY = 0,
// stores top, left values (edge) of the notepad    
    elemX = 0,
    elemY = 0;

// called when user starts dragging an element
function drag(elem) {
  // store the object of the element that needs to be moved
  selected = elem;
  elemX = posX - selected.offsetLeft;
  elemY = posY - selected.offsetTop;
}

// called when user is dragging the window
function move(e) {
  posX = document.all ? window.event.clientX : e.pageX;
  posY = document.all ? window.event.clientY : e.pageY;


  if (selected !== null) {
    selected.style.left = (posX - elemX) + 'px';
    selected.style.top = (posY - elemY) + 'px';
  }
}

// destroy the window when we're done. poof!
function destroy() {
  selected = null;
}

// 
document.getElementById('notepad').onmousedown = function () {
  drag(this);
  return false;
};

document.onmousemove = move;
document.onmouseup = destroy;
