import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";                                                 // 7. 페이지 구성
import { deleteTodo, toggleTodo } from "../redux/modules/todos";

const List = () =>{                                                                     // 11. css 및 상세 구성
    const todos = useSelector((state) => state.todos)                                   // 18. useSelector 선언 
    const dispatch = useDispatch()

    const onDeleteHandler = (id) =>{                                                    // 20. onDeleteHandler선언 및 삭제하기 버튼에 onClick 이벤트로 달아주기
        dispatch(deleteTodo(id))                                                        // 23. onDeleteHandler에 dispatch 추가 및 todo.id 전달
    }
    const onToggleHandler = (id) =>{                                                    // 24. List.js : onToggleHandler 선언 및 취소/완료 버튼에 onClick 이벤트 달아주기
        dispatch(toggleTodo(id))                                                        // 27. onToggleHandler에 dispatch 추가 및 todo.id 전달
    }
    return( 
        <StContainer>
            <h2>Working...🔥</h2>
            <StListWrapper>
                {todos.map((todo) => {                                                  // 19. map으로 todos의 todo를 돌려서 todo박스 만들기, Link로 디테일 페이지 이동 버튼 생성
                    if(todo.isDone === false){
                        return (
                            <StTodoContainer key={todo.id}>
                                <StLink to={`/${todo.id}`} >                               
                                    <div>상세보기</div>
                                </StLink>
                                <div>
                                    <h2>{todo.title}</h2>
                                    <div>{todo.body}</div>
                                </div>
                                <StButtons>
                                    <StButton borderColor="red" onClick={() => onDeleteHandler(todo.id)}>
                                        삭제하기
                                    </StButton>
                                    <StButton borderColor="green" onClick={() => onToggleHandler(todo.id)}>
                                        완료!
                                    </StButton>
                                </StButtons>
                            </StTodoContainer>
                        )
                    } else return null;
                })}
            </StListWrapper>
            <h2>Done...!🎉</h2>
            <StListWrapper>
                {todos.map((todo) => {
                        if(todo.isDone === true){
                            return (
                                <StTodoContainer key={todo.id}>
                                    <StLink to={`/${todo.id}`} >
                                        <div>상세보기</div>
                                    </StLink>
                                    <div>
                                        <h2>{todo.title}</h2>
                                        <div>{todo.body}</div>
                                    </div>
                                    <StButtons>
                                        <StButton borderColor="red" onClick={() => onDeleteHandler(todo.id)}>
                                            삭제하기
                                        </StButton>
                                        <StButton borderColor="green"onClick={() => onToggleHandler(todo.id)}>
                                            취소!
                                        </StButton>
                                    </StButtons>
                                </StTodoContainer>
                            )
                        } else return null;
                    })}
            </StListWrapper>
        </StContainer>

    )
}

export default List;

const StContainer = styled.div`
        padding: 0 24px; 
`
const StListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`
const StLink = styled(Link)`
    text-decoration: none;
`
const StTodoContainer = styled.div`
    width: 270px;
    border: 4px solid teal;
    min-height: 150px;
    border-radius: 12px;
    padding: 12px 24px 24px 24px;
`
const StButtons = styled.div`
    display: flex;
    justify-content: end;
    padding: 12px;
    gap: 12px;
`
const StButton = styled.button`
    border: 1px solid ${({borderColor}) => borderColor};
    height: 40px;
    width: 120px;
    background-color: #fff;
    border-radius: 12px;
    cursor: pointer;
`

