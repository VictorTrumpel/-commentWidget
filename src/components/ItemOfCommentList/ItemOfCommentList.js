import React from 'react';
import '../DelCommentBtn/DelCommentBtn';
import DelCommentBtn from "../DelCommentBtn/DelCommentBtn";
import './ItemOfComment.css';

const ItemOfCommentList = function(props) {
    const {firstName, lastName, commentText} = props.comment;
    const {deleteComment, id} = props;

    return (
        <li className={'itemOfComment'}>
            <strong className={'authorCommentName'}>
                {firstName}&nbsp;{lastName}
                <DelCommentBtn
                    id={id}
                    deleteComment={deleteComment}/>
            </strong>
            <br/>
            {commentText}
        </li>
    );
};

export default ItemOfCommentList;
