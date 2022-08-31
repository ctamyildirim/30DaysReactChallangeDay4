function reducer(state,action){

    console.log(state)
    console.log(action)

    switch(action.type){
        case 'SET_TODO':
        return{
            ...state,
            todo : action.payload
        }
        case 'ADD_TODO':
            return{
                ...state,
                todos : [
                    ...state.todos , action.payload
                ],
                todo: ''
            }
    }
}
export default reducer