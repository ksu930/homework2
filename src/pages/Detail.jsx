import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { updateTodo } from "../redux/modules/todos";

const Detail = () => {                                                                                // 6. 페이지구성
    const { id } = useParams();                                                                       // 29.  useParams를 이용하여 path에 있는 id 값 확인 및 숫자로 바꿔주기 위해 path_id 선언
    const path_id = Number(id)
    const todos= useSelector(state => state.todos)                                                    // 30. useSelector를 이용하여 state 값 호출
    const navigate = useNavigate()                                                                    // 32. navigate 선언 및 버튼에 onClick 이벤트로 호출
    const dispatch = useDispatch();      

    const todo = todos.find(element => element.id === path_id)                                        // 31. state 값의 todos를 find를 이용하여 path의 id와 같은 id의 todo 추출

    const initialState = {
      id: todo.id,
      title: "",
      body: "",
      isDone: false,
    }

    const [new_todo, new_setTodo] = useState(initialState)

    const onChangeHandler = (e) => {                                                                     
        const {name, value} = e.target;
        new_setTodo({...new_todo, [name]:value});
    }

    const onSubmitHandler = (e) => {                                                                  
        e.preventDefault()
        if(new_todo.title.length === 0 || new_todo.body.length === 0) {
          alert("제목과 내용을 모두 입력해주세요.");
          return;
        }
        dispatch(updateTodo ({...new_todo}))
        new_setTodo(initialState)
    }

    return (                                                                                          // 28. 상세 페이지 구성
    <StContainer>
        <StDialogTop>
            <StDialogHeader>
              <div>ID :{todo.id}</div>                               
              <StButton
                borderColor="#ddd"
                onClick={() => {
                  navigate("/");
                }}
              >
                이전으로
              </StButton>
            </StDialogHeader>
            <StTitle>{todo.title}</StTitle>
            <StBody>{todo.body}</StBody>
            <StAddForm1 onSubmit={onSubmitHandler}>
                <StInputGroup>
                    <StFormLabel htmlfor="title">제목</StFormLabel>
                    <StAddInput
                    id="title"
                    onChange={onChangeHandler}
                    //  value={todo.title}
                    name="title"
                    >

                    </StAddInput>
                    <StFormLabel htmlfor="body">내용</StFormLabel>
                    <StAddInput
                    id="body"
                    onChange={onChangeHandler}
                    // value={todo.body}
                    name="body"
                    >
                    </StAddInput>
                </StInputGroup>
                <StAddButton>수정하기</StAddButton>
            </StAddForm1>
          
        </StDialogTop>
    </StContainer>
    );
  };


export default Detail;

const StContainer = styled.div`
    border: 2px solid #eee;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0px
`

const StDialogTop = styled.div`
    width: 1000px;
    height: 500px;
    border: 1px solid #eee;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 24px;
`;

const StBody = styled.main`
  padding: 0 24px;
`;

const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const StAddForm1 = styled.form`
    background-color: #eee;
    margin: 100px 0 0 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 30px 5px 30px;
    gap: 20px;
    margin-bottom: 0px;
`

const StInputGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const StFormLabel = styled.label`
    font-size: 16px;
    font-weight: 700px;
`

const StAddInput = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0 12px;
`

const StAddButton = styled.button`
    border: none;
    height: 40px;
    cursor: -webkit-grab;
    border-radius: 10px;
    background-color: #ad6a2b;
    width: 140px;
    color: #fff;
    font-weight: 700;
`