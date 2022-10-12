라우터와 리덕스를 위한 폴더를 따로 구성
컴포넌트는 Layout 아래에 Form, List 컴포넌트를 구성

1. index.css : css 초기화 코드 입력
2. index.js : index.css import
3. configueStore.js : store 및 rootReducer 생성
4. index.js : Provider로 App 감싸준 뒤 store import 
5. App.js : 자식 컴포넌트로 Router 설정 및 Router import
6. Home.js, Detail.js : 페이지 구성
7. Form.jsx, Layout.jsx, List.jsx : 페이지구성
8. Router.js : 페이지 구성
9. Layout.js : css 구성
10. Form.js : css 및 상세 구성
11. List.js : css 및 상세 구성
12. Form.js : useState 선언
13. Form.js : onChangeHandler 선언
14. todos.js : initialstate 선언, reducer case ADD-TODO 선언
15. todos.js : ADD_TODO action value 및 action creater 선언
16. Form.js : dispatch 선언
17. Form.js : onSubmit Handler 선언
18. List.js : useSelector 선언
19. List.js : map으로 todos의 todo를 돌려서 todo박스 만들기, Link로 디테일 페이지 이동 버튼 생성
20. List.js : onDeleteHandler선언 및 삭제하기 버튼에 onClick 이벤트로 달아주기
21. todos.js : DELETE_TODO action value 선언 및 action creator 선언
22. todos.js : reducer에 DELETE_TODO case 추가
23. List.js : onDeleteHandler에 dispatch 추가 및 todo.id 전달
24. List.js : onToggleHandler 선언 및 취소/완료 버튼에 onClick 이벤트 달아주기
25. todos.js : TOGGLE_TODO action value 선언 및 action creator 선언
26. todo.js : reducer에 TOGGLE_TODO case 추가
27. List.js : onToggleHandler에 dispatch 추가 및 todo.id 전달(onClick 이벤트는 함수 호출 시 화살표함수 필수)
28. Detail.js : 상세 페이지 구성
29. Detail.js : useParmas를 이용하여 path에 있는 id 값 확인
30. Detail.js : useSelector를 이용하여 state 값 호출
31. Detail.js : state 값의 todos를 filter를 이용하여 path의 id와 같은 id의 todo 추출, todo가 배열로 감싸져있기때문에 todo[0].id 로 호출
32. Detail.js : navigate 선언 및 버튼에 onClick 이벤트로 호출
