## 📌 순서

### 1. store만들기
   - redux설치
   - 초깃값 세팅 (initialState)
   - const store = createStore(리듀서, 초기값, enhancer) -> 따라서 리듀서를 만들어야 한다.

### 2. reducer 만들기
   - initialState 세팅
   - userReducer에서 action 정의

### 3. action 만들기 - setTimeOut으로 비동기 요청 처리하기
   - login함수를 만들 때는 setTimeOut으로 2초후에 login하도록 만들기
   - loginRequest 만들기
   - loginFailure 만들기
   - loginSuccess 만들기
   - logout만들기
   - login과 logout export하기

### 4. store.js에서 이제 비동기 처리하기
   - enhancer를 만들어서 3번째 인자에 넣어주기
   - applyMiddleware를 통해서 함수를 합쳐서 enhancer에 넣어주기
   - 각각의 middleware들을 정의해주기
      - Middleware는 3단 함수 (store, next, action)
      - action의 type이 함수인 경우에는 비동기 처리 - store.dispatch, store.getState 리턴하기
      - 아닌 경우에는 일반적으로 next(action) 리턴하기

### 5. Provider 설치하기
   - react-redux 설치
   - provider에 store넣어주기

### 6. 리덕스 사용하기
   - useDispatch 사용
   - useSelector 사용
   - isLoggingIn의 여부에 따라 로그인 중 표시하기
   - data에 따라 로그인/로그아웃 표시하기

### TIP
   - LOGIN_REQUEST와 같이 여러곳에서 사용할 변하지 않는 상수는 ```const LOGIN_REQUEST = "LOGIN_REQUEST"```로 해주는 것이 좋다.

### 블로그
   - [블로그 보러가기](https://fallacious-smash-138.notion.site/Redux-7f6fe1cebaa5416e9d0ab5b1518a98bd)
