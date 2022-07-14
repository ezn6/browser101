// https://colorhunt.co/palette/d9f8c4f9f9c5fad9a1f37878

const form = document.querySelector('form');
const input = document.querySelector('input');
const screen = document.querySelector('.screen');

//TODO
//1.수정기능
//2.여러개 추가시 스크롤바 나오게
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(input.value);

  //입력로직
  if (!input.value) return;
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
  input.value = '';
  // newItem.innerHTML = `
  // <span class="item-name">${input.value}</span>
  // <button><i class="del fa-solid fa-trash-can"></i></button>
  // `;

  //삭제로직😥
});
