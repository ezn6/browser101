const box = document.querySelector('.box');
const pageX = document.getElementById('x');
const pageY = document.getElementById('y');
const line = document.querySelector('.line1');
const line2 = document.querySelector('.line2');

document.addEventListener('mousemove', function (e) {
  const coordinate = document.querySelector('.coordinate');
  pageX.innerText = e.pageX;
  pageY.innerText = e.pageY;
  coordinate.style.left = e.pageX - 50 + 'px';
  coordinate.style.top = e.pageY - 50 + 'px';
  box.style.left = e.pageX + 'px';
  box.style.top = e.pageY + 'px';
  line.style.right = window.innerWidth - e.pageX + 'px';
  line.style.bottom = window.innerHeight - e.pageY + 'px';
  line2.style.left = e.pageX + 'px';
  line2.style.top = e.pageY + 'px';
});
