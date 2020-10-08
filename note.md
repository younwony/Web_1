# CSS

## Grid

1. \<div> : dipaly block level  을 기본값으로 가지는 non Style 태그
2. \<span> : dipaly inline level 을 기본값으로 가지는 non Style 태그
3. \<margin> : 태그 바깥
    - {margin: 1px (전체)}
    - {margin: 1px 2px (위 & 아래, 왼쪽 & 오른쪽)}
    - {margin: 1px 2px 3px (위, 오른쪽 & 왼쪽 , 아래)}    
    - {margin: 1px 2px 3px 4px (위, 오른쪽, 아래, 왼쪽 - 시계방향)}
```css
    display: grid; //grid display 선언
    grid-template-columns: 1fr 1fr; // columns 비를 1:1
```