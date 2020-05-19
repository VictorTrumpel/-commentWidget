import {ADD_COMMENT, DELETE_COMMENT} from "./types";

function getCommentListFromLocalStorage() {
    if (localStorage.getItem('comments') === null) {
        localStorage.setItem('comments', JSON.stringify( []));
    }
    return JSON.parse(localStorage.getItem('comments'));
}

const initialState = {
    commentsList : getCommentListFromLocalStorage()
};

export function commentsArrayReducer(state = initialState, action) {
    let commentsList = [...state.commentsList];
    switch (action.type) {
        case ADD_COMMENT :
            commentsList.push(action.payload);
            localStorage.setItem('comments', JSON.stringify(commentsList));
            return {
                ...state,
                commentsList
            };
        case DELETE_COMMENT :
            const idOfDelComment = action.payload;
            commentsList = commentsList.filter( (comment) => comment.id !== idOfDelComment );
            localStorage.setItem('comments', JSON.stringify(commentsList));
            return {
                ...state,
                commentsList
            };
        default :
            return state;
    }
}

