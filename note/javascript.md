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