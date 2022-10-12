import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";                                                                // 7. 페이지 구성
import { addTodo } from "../redux/modules/todos";

let number = 3;
const Form = () =>{
    const initialState = {
        id:0,
        title:"",
        body:"",
        isDone: false,
    };
    
    const [todo, setTodo] = useState(initialState);                                                    // 12. useState 선언
    const [buttonColor, setButtonColor] = useState("red")                                  
    const dispatch = useDispatch();                                                                    // 16. dispatch 선언

    const onChangeHandler = (e) => {                                                                   // 13.onChangeHandler 선언
        const {name, value} = e.target;
        setTodo({...todo, [name]:value});
    }
    const onSubmitHandler = (e) => {                                                                   // 17.onSubmitHandler 선언
        e.preventDefault()
        if(todo.title.length === 0 || todo.body.length === 0) return;
        dispatch(addTodo ({...todo, id : number}))
        setTodo(initialState);
        number++;
    }

    useEffect(() => {
        if(todo.title.length > 0 && todo.body.length > 0){
            return setButtonColor("green")
        }
        if(todo.title.length === 0 || todo.body.length === 0){
            return setButtonColor("red")
        } 
    }, [todo])


    return(                                                                                            // 10. CSS 및 페이지 상세 구성
        <>
            <StContainer>
                <div>My Todo List</div>
                <div>React</div>
            </StContainer>
            <StAddForm onSubmit={onSubmitHandler}>
                <StInputGroup>
                    <StFormLabel htmlfor="title">제목</StFormLabel>
                    <StAddInput
                    id="title"
                    onChange={onChangeHandler}
                    value={todo.title}
                    name="title"
                    >
                    </StAddInput>
                    <StFormLabel htmlfor="body">내용</StFormLabel>
                    <StAddInput
                    id="body"
                    onChange={onChangeHandler}
                    value={todo.body}
                    name="body"
                    >
                    </StAddInput>
                </StInputGroup>
                <StAddButton buttonColor={buttonColor}>추가하기</StAddButton>
            </StAddForm>
        </>
    )
}

export default Form;

const StContainer = styled.div`
    border: 1px solid #ddd;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    margin-bottom: 24px;
`
const StAddForm = styled.form`
    background-color: #eee;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
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
    background-color: ${({buttonColor}) => buttonColor};
    width: 140px;
    color: #fff;
    font-weight: 700;
`