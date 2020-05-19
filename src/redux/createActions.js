import {ADD_COMMENT, DELETE_COMMENT} from "./types";

export function addComment(id, values) {
    const {firstName, lastName, commentText} = values;
    return {
        type: ADD_COMMENT,
        payload: {
            id : id,
            firstName : firstName,
            lastName : lastName,
            commentText : commentText,
        }
    }
}

export function deleteComment(id) {
    return {
        type: DELETE_COMMENT,
        payload: id
    }
}
