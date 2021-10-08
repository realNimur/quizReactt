import React from 'react';
import './AnswerItem.scss'

const AnswerItem = ({answer,onClickAnswerHandler,state}) => {
    let cls = state ? state : '';
    return (

        <li className={`quiz__answer ${cls}`} onClick={()=>onClickAnswerHandler(answer.id)}>{answer.text}</li>
    );
};

export default AnswerItem;