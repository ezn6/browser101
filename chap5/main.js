const form = document.querySelector('form');
const input = document.querySelector('.submit');
const screen = document.querySelector('.screen');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //입력로직
  if (input.value == '') {
    input.focus();
    return;
  }
  const newItem = document.createElement('div');
  newItem.setAttribute('class', 'item');

  const itemBox = document.createElement('div');
  itemBox.setAttribute('class', 'item-box');
  const itemName = document.createElement('span');
  itemName.setAttribute('class', 'item-name');
  itemName.textContent = input.value;
  const delBtn = document.createElement('button');
  const delIcon = document.createElement('i');
  delIcon.setAttribute('class', 'del fa-solid fa-trash-can');
  const updateBtn = document.createElement('button');
  const updateIcon = document.createElement('i');
  updateIcon.setAttribute('class', 'update fa-solid fa-pen');

  const itemUpdate = document.createElement('div');
  itemUpdate.setAttribute('class', 'item-update');
  const updateInput = document.createElement('input');
  updateInput.setAttribute('type', 'text');
  updateInput.setAttribute('value', input.value);
  const saveBtn = document.createElement('button');
  const saveIcon = document.createElement('i');
  saveIcon.setAttribute('class', 'save fa-solid fa-floppy-disk');

  delBtn.appendChild(delIcon);
  updateBtn.appendChild(updateIcon);
  itemBox.appendChild(itemName);
  itemBox.appendChild(delBtn);
  itemBox.appendChild(updateBtn);

  saveBtn.appendChild(saveIcon);
  itemUpdate.appendChild(updateInput);
  itemUpdate.appendChild(saveBtn);

  newItem.appendChild(itemBox);
  newItem.appendChild(itemUpdate);

  // 새로 추가한 항목 위로 쌓임
  screen.insertBefore(newItem, screen.firstChild);

  //삭제로직
  delBtn.addEventListener('click', () => {
    screen.removeChild(newItem);
    input.focus();
  });

  //수정로직
  updateBtn.addEventListener('click', () => {
    if (itemUpdate.style.display == 'block') {
      itemUpdate.style.display = 'none';
    } else {
      itemUpdate.style.display = 'block';
    }
  });
  saveBtn.addEventListener('click', () => {
    itemName.textContent = updateInput.value;
    itemUpdate.style.display = 'none';
  });

  input.value = '';
  input.focus();
});
