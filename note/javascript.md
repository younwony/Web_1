# JavaScript

## 

* Program, Promgraming, Promgramer
1. Html은 Web을 표현하는 언어이다. Promgram 언어가 아니다.

* [Data Types](https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures)


### 1. \<Button> 과 \<input type='button'> 차이

1. \<Button>
 - 텍스트 뿐 아니라 이미지 or gif 요소를 자식으로 포함 가능
 - 디자인의 폭이 넓다
 - submit의 기능이 default.
    - submit을 하고 싶지 않을경우 type = 'button' 을 속성값으로 명시
 - type 속성 값
    - type = 'submit' 전송
    - type = 'reset' 내용 초기화
    - type = 'button' 기능 구현, javascript 이벤트 실행

2. \<input type='button'>
 - 디자인 컨트롤 제약(css로는 가능)


> * 디자인 적인 제약이 가장 큰차이


* 출처 : https://velog.io/@lilyoh/input-type-button-%EA%B3%BC-button-%EC%9D%98-%EC%B0%A8%EC%9D%B4



### 2. Argument(인자), Parameter(매개변수)
```js
function foo(i , j){ // i, j 는 Parameter(매개변수)
   console.log(i+j);
}

foo(1,2) //1 , 2 는 Argument(인자)
```

### 3. 로직이 말하고자 하는 의도를 명확히 파악하기 힘들경우 함수를 통해 로직에 이름을 명시하는 것이 하나의 전략이 될 수 있다.


### 4. 객체

#### 4-1. for in ( 객체 )
```js
for(var key in object){
   console.log(key); // 객체내의 key 값을 가져온다
}
```


## Library vs Framework

1. Library 
 - 만들고자하는 프로그램에 필요한 부품이 되는 소프트웨어를 잘 정리 정돈 해놓은, 재사용하기 쉽도록 되어있는 소프트웨어
 - 내가 만들고 있는 프로그렘에 사용할 부품을 가져오는 느낌

2. Framwork
 - 만들고자 하는 프로그램에 대한 공통적인 부분의 큰 틀(뼈 대) ,거의 반 제품
 - 프레임 워크 안에 들어가서 사용 하는 느낌


 # 프로젝트 만들어본 이 후 공부할 사항
 1. 웹페이지 - >Document, DOM 객체를 주의 깊게 보기
 2. 웹브라우저 -> window 객체를 주의 깊게 보기  
 3. 비동기 웹페이지 -> ajax
 4. 인터넷이 없는 웹 -> offline web application
 5. 화상통신 -> webRTC
 6. 음성, 인식, 정보 전달 -> speech로 시작하는 api
 7. 3차원 그래픽 -> webGL
 8.  가상 -> webVR
 