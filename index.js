const items = document.querySelectorAll('.item');

items.forEach((item) => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

const containers = document.querySelectorAll('.container');

containers.forEach((container) => {
  container.addEventListener('dragenter', dragEnter);
  container.addEventListener('dragover', dragOver);
  container.addEventListener('dragleave', dragLeave);
  container.addEventListener('drop', drop);
});

let draggedItem = null;

function dragStart(event) {
  draggedItem = this;
}

function dragEnd(event) {}

function dragEnter(event) {
  event.preventDefault();
}

function dragOver(event) {
  event.preventDefault();
}

function dragLeave(event) {}

function drop(event) {
  event.preventDefault();
  this.classList.remove('dragover');

  if (draggedItem && draggedItem.parentNode !== this) {
    this.querySelector('ul').appendChild(draggedItem);
    draggedItem = null;
    showMessage('Moved successfully');
  }
}

function showMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.classList.add('message');
  document.body.appendChild(messageElement);
  setTimeout(() => {
    messageElement.remove();
  }, 2000);
}

function resetPage() {
  location.reload();
}
