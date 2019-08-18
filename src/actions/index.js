import { ADD_ARTICLE } from "./../constants/actions-types"

const addArticle = payload => {
    return { type: ADD_ARTICLE , payload }
}
export default addArticle
