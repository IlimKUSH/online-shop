import React, {useReducer} from 'react';
import axios from "axios";

export const testiContext = React.createContext();

const INIT_STATE = {
    comments: [],
    oneComment:null,
}

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_COMMENTS":
            return {
                ...state, comments: action.payload.data,
            };
        case "GET_ONE":
            return {...state, oneComment: action.payload}
        default:
            return state;
    }
}

const COMMENTS_API = 'http://localhost:8001/comments'

const TestiContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,INIT_STATE);

    async function createComment(newComment) {
        await axios.post(`${COMMENTS_API}`,newComment)
        getComments()
    }

    async function getComments(){
        const res = await axios(`${COMMENTS_API}${window.location.search}`);
        dispatch({
            type:"GET_COMMENTS",
            payload:res,
        })
    }

    async function deleteComment(id) {
        await axios.delete(`${COMMENTS_API}/${id}`)
        getComments()
    }

    async function getOneComment(id) {
        const res =await axios(`${COMMENTS_API}/${id}`);
        dispatch({
            type:"GET_ONE",
            payload:res.data
        })
    }

    async function updateComment(id,editedComment) {
        await axios.patch(`${COMMENTS_API}/${id}`,editedComment)
        getComments()
    }

    return <testiContext.Provider value={{
        comments:state.comments,
        oneComment:state.oneComment,
        createComment,
        getComments,
        deleteComment,
        getOneComment,
        updateComment,
    }}>{children}</testiContext.Provider>
}

export default TestiContextProvider
