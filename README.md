# browser101

### chap3 좌표실습 리팩토링

- JS에서 `.style.left` 를 조정하지 않고 `.style.transform`으로 위치 조정한다.
  left, top 등의 style을 수정해주는것은 성능에 좋지 않다.
  translate을 이용하는것은 composition단계에서 수정이 가능하다.
- `position: absolute;` 이므로 css에서 기존 태그들의 top, left등 초기 위치를 지워준다. (안지우면 초기위치를 기준으로 transform이 이루어졌다.)
- target이미지를 transform으로 위치 조정하고 있기 때문에 이미지를 마우스 중앙으로 놓는 `transform: translate(-50%, -50%);` 의 css설정이 먹히지 않았다.
  - 방법1-> target이미지를 감싸는 div태그를 하나 만들고, 부모div태그의 `position: relative;` 로 만든뒤, js에서 위치 조정은 이미지가 아니라 부모div태그로 하고, 이미지를 중앙으로 오게 하는 css(translate(-50%, -50%);)는 그대로 target이미지에 둔다.
  - 방법2-> `translateY(${y}px) translateX(${x}px) translate(-50%,-50%);` 를 이용한다.
  - 방법3-> `getBoundingClientRect`를 이용하여 이미지의 가로,세로길이의 절반씩 빼준다. 대신 html에서 defer옵션을 사용했으므로 JS에서 `window.addEventListener('load',()=>{})` 안에 마우스 이벤트 처리를 해주는것이 좋다.(타겟 이미지가 생성되기 전에 이벤트가 일어나면 에러가 뜬다)
