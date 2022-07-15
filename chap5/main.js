// https://colorhunt.co/palette/d9f8c4f9f9c5fad9a1f37878

const form = document.querySelector('form');
const input = document.querySelector('input');
const screen = document.querySelector('.screen');

input.focus();
console.log(screen.firstChild);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  //입력로직
  if (!input.value) {
    input.focus();
    return;
  }
  const newItem = document.createElement('div');
  newItem.setAttribute('class', 'item');
  const itemName = document.createElement('span');
  itemName.setAttribute('class', 'item-name');
  itemName.textContent = input.value;
  const delBtn = document.createElement('button');
  const delIcon = document.createElement('i');
  delIcon.setAttribute('class', 'del fa-solid fa-trash-can');
  delBtn.appendChild(delIcon);
  newItem.appendChild(itemName);
  newItem.appendChild(delBtn);
  screen.appendChild(newItem);

  //삭제로직
  delIcon.addEventListener('click', () => {
    screen.removeChild(newItem);
    input.focus();
  });

  input.value = '';
  input.focus();
});
