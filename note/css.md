# CSS

## Grid

1. \<div> : dipaly block level  을 기본값으로 가지는 non Style 태그
1. \<span> : dipaly inline level 을 기본값으로 가지는 non Style 태그
1. \<margin> : 태그 바깥
    - {margin: 1px (전체)}
    - {margin: 1px 2px (위 & 아래, 왼쪽 & 오른쪽)}
    - {margin: 1px 2px 3px (위, 오른쪽 & 왼쪽 , 아래)}    
    - {margin: 1px 2px 3px 4px (위, 오른쪽, 아래, 왼쪽 - 시계방향)}
1. \<link> : 현재 파일이 어떤파일과 연결되있는지 선언하는 태그
```css
    display: grid; //grid display 선언
    grid-template-columns: 1fr 1fr; // columns 비를 1:1
```

* 페이지마다 link로 캐싱을 사용하는 이유
    - 페이지내에서 Style을 만들어 CSS를 적용할 경우 페이지 로딩할 때 마다 CSS파일보단 적은 트래픽이지만 일정량의 트래픽을 갖게되며 재사용성에 적합하지 않게 된다. <br>
하지만 캐싱할 할경우 초기 한번의 캐싱으로 CSS파일을 다운로드 후 모든 페이지에서 별도의 필요없이 사용할 수 있기 때문에 훨씬 빠른 속도의 페이지를 보여준다.

* 웹 개발시 .js나 .css 파일 은 디폴트값으로 자동 캐싱되어 사용한다.
수정된 .js, .css파일을 수정될떄마대 새로운 버전의 파일을 받아들이기위해서는 href 에 queryString을 주어 버전을 명시해 새로운 캐시를 생성하게끔 변경시킨다.