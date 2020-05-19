import shortid from 'shortid';
import React from 'react';
import CommentForm from "../components/CommentForm/CommentForm";
import ListOfComment from "../components/ListOfComment/ListOfComment";
import './CommentSection.css';
import {addComment, deleteComment} from "../redux/createActions";
import { connect } from 'react-redux';
import {destroy} from "redux-form";

class CommentSection extends React.Component {
    constructor() {
        super();

        this.onSubmitForm = this.onSubmitForm.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
    }

    onSubmitForm(values) {
        console.log(this.props);
        this.props.addComment(shortid.generate(), values);
        this.props.destroy('login');
    }

    deleteComment(id) {
        this.props.deleteComment(id);
    }

    render() {

        const deleteComment = this.deleteComment;
        const onSubmitForm = this.onSubmitForm;
        const {commentsList} = this.props;

        return(
            <div className={"commentSection"}>
                <ListOfComment
                    deleteComment={deleteComment}
                    commentsList={commentsList}
                />
                <CommentForm
                    onSubmit={onSubmitForm}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const commentsList = state.commentsArrayReducer.commentsList;
    return {
        commentsList: commentsList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addComment: (id, values) => dispatch(addComment(id, values)),
        deleteComment: (id) => dispatch(deleteComment(id)),
        destroy : (name) => dispatch(destroy(name))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentSection);