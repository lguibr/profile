import { ADD_ARTICLE } from "./../constants/actions-types"

const initialState = {
    articles:[]
}

const rootReducer = (state = initialState, action)=>{
    if(action.type === ADD_ARTICLE){
        state.articles.push(action.payload)
    }
    return state
}

export default rootReducer
