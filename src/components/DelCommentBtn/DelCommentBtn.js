import React from 'react';
import './DelCommentBtn.css';

const DelCommentBtn = function (props) {
    return(
        <button className={"delCommentBtn button"}
            onClick={() => props.deleteComment(props.id)}
        >&#10006;</button>
    );
};

export default DelCommentBtn;