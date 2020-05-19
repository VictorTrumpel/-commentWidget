import React from 'react';
import './CommentForm.css';
import {Field, reduxForm, change} from 'redux-form';

class CommentForm extends React.Component {

    render () {
        const {handleSubmit} = this.props;
        return (
            <form name={"form"} className={"commentForm"} onSubmit={handleSubmit}>
                <Field
                    className={"firstName-input input-form"}
                    name={"firstName"}
                    component={"input"}
                    type={"text"}
                    onChange={change}
                    placeholder={"Имя"}
                    required={true}
                />
                <Field
                    className={"lastName-input input-form"}
                    name={"lastName"}
                    component={"input"}
                    type={"text"}
                    placeholder={"Фамилия"}
                    required={true}
                />
                <Field
                    className={"commentText-input input-form"}
                    name={"commentText"}
                    component={"input"}
                    type={"text"}
                    placeholder={"Ваш текст ..."}
                    required={true}
                />
                <button
                    type="submit" label="submit"
                    className={"commentForm-submit button"}
                >Отправить</button>
            </form>

        );
    }
}
CommentForm = reduxForm ({
    form: 'login',
}) (CommentForm);

export default CommentForm;