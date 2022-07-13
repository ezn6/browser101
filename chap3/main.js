const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.div');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  tag.innerHTML = `${x}px, ${y}px`;
  // left, top 등의 style을 수정해주는것은 성능에 좋지 않다.
  // translate을 이용하는것은 composition단계에서 수정이 가능하다.
  // 성능개선 후 ↓
  tag.style.transform = `translate(${x}px,${y}px)`;
  vertical.style.transform = `translateX(${x}px)`;
  horizontal.style.transform = `translateY(${y}px)`;
  target.style.transform = `translate(${x}px,${y}px)`;

  // 이전 코드 ↓
  // tag.style.left = `${x}px`;
  // tag.style.top = `${y}px`;
  // vertical.style.left = `${x}px`;
  // horizontal.style.top = `${y}px`;
  // target.style.left = `${x}px`;
  // target.style.top = `${y}px`;
});
