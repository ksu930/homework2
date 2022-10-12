const ADD_TODO = "ADD_TODO"                                                           //15. ADD_TODO action value 선언 및 action creator 선언
const DELETE_TODO = "DELETE_TODO"                                                     //21. DELETE_TODO action value 선언 및 action creator 선언
const TOGGLE_TODO = "TOGGLE_TODO"                                                     //25. TOGGLE_TODO action value 선언 및 action creator 선언
const UPDATE_TODO = "UPDATE_TODO"

export const addTodo = (payload) => {
    return{
        type: ADD_TODO,
        payload,
    }
}

export const deleteTodo = (payload) => {
    return{
        type : DELETE_TODO,
        payload,
    }
}

export const toggleTodo = (payload) => {
    return{
        type : TOGGLE_TODO,
        payload,
    }
}

export const updateTodo = (payload) => {
    return{
        type : UPDATE_TODO,
        payload,
    }
}

const initialState = [                                                                //14. initialstate 및 reducer case ADD_TODO선언
    {
        id: 1,
        title: "리액트",
        body: "리액트를 배워봅시다.",
        isDone: false,
    },
    {
        id: 2,
        title: "리덕스",
        body : "리덕스를 배워봅시다.",
        isDone : true,
    }
];

const todos = (state=initialState, action) => {                 
    switch(action.type){
        case ADD_TODO:
            return [...state, action.payload];

        case DELETE_TODO:                                                              // 22. reducer에 DELETE_TODO case 추가
            const delete_todos = state.filter(todo => todo.id !== action.payload)
            // const delete_todos = state.map(todo => {
            //     if(todo.id !== action.payload){
            //         return todo
            //     } else return null;
            // })
            console.log(delete_todos)
            return delete_todos

        case TOGGLE_TODO:                                                              // 26. reducer에 TOGGLE_TODO case 추가
            const toggle_todos = state.map(todo => {
                if(todo.id === action.payload){
                    return {...todo, isDone: !todo.isDone}
                } else {
                    return {...todo}
                }
        }) 
            return toggle_todos

        case UPDATE_TODO:
            const update_todos = state.map(todo => {
                if(todo.id === action.payload.id){
                    return {...todo, title: action.payload.title, body: action.payload.body}
                } else {
                    return {...todo}
                }
            })
            console.log(update_todos)
            return update_todos

        default:
            return state;
    }
}
export default todos;