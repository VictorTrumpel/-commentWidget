import React from 'react';
import ItemOfCommentList from "../ItemOfCommentList/ItemOfCommentList";
import './ListOfComment.css';

const shortid = require('shortid');

const ListOfComment = function (props) {
    const {commentsList, deleteComment} = props;

    return (
        <div className={"showComment"}>
            <ul className={'listOfComments'}>
                {commentsList.map((comment) => {
                    return (
                        <ItemOfCommentList
                            comment={comment}
                            key={shortid.generate()}
                            id={comment.id}
                            deleteComment={deleteComment}
                        />
                    )
                })}
            </ul>
        </div>
    );
};

export default ListOfComment;
