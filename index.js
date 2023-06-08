// Get the list of draggable items
const items = document.querySelectorAll('.item');

// Add event listeners for drag start and drag end
items.forEach((item) => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Get both containers
const containers = document.querySelectorAll('.container');

// Add event listeners for drag enter, drag over, drag leave, and drop to both containers
containers.forEach((container) => {
  container.addEventListener('dragenter', dragEnter);
  container.addEventListener('dragover', dragOver);
  container.addEventListener('dragleave', dragLeave);
  container.addEventListener('drop', drop);
});

// Store the dragged item
let draggedItem = null;

// Drag start event handler
function dragStart(event) {
  // Set the dragged item
  draggedItem = this;
  // Add a class to the dragged item
  this.classList.add('dragging');
}

// Drag end event handler
function dragEnd(event) {
  // Remove the class from the dragged item
  this.classList.remove('dragging');
}

// Drag enter event handler
function dragEnter(event) {
  // Prevent default behavior
  event.preventDefault();
  // Add a class to the container to indicate the item can be dropped
  this.classList.add('dragover');
}

// Drag over event handler
function dragOver(event) {
  // Prevent default behavior
  event.preventDefault();
}

// Drag leave event handler
function dragLeave(event) {
  // Remove the class from the container
  this.classList.remove('dragover');
}

// Drop event handler
function drop(event) {
  // Prevent default behavior
  event.preventDefault();
  // Remove the class from the container
  this.classList.remove('dragover');

  // Check if a valid item is being dropped
  if (draggedItem && draggedItem.parentNode !== this) {
    // Move the item to the container
    this.querySelector('ul').appendChild(draggedItem);
    // Reset the dragged item
    draggedItem = null;
    // Display the success message
    showMessage('Moved successfully');
  }
}

// Function to display a message
function showMessage(message) {
  // Create a message element
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  // Add a class to the message element
  messageElement.classList.add('message');
  // Append the message element to the document body
  document.body.appendChild(messageElement);
  // Remove the message element after 2 seconds
  setTimeout(() => {
    messageElement.remove();
  }, 2000);
}

function resetPage() {
  location.reload(); // Reload the current page
}
