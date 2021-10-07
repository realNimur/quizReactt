import React from 'react';
import './AnswerItem.scss'

const AnswerItem = ({answer,onClickAnswerHandler}) => {
    return (
        <li className="quiz__answer" onClick={()=>onClickAnswerHandler(answer.id)}>{answer.text}</li>
    );
};

export default AnswerItem;