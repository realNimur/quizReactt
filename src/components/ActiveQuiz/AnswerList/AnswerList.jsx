import React from 'react';
import "./AnswerList.scss"
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswerList = ({answers,onClickAnswerHandler}) => {

    return (
        <ul className="quiz__answers">
            {answers.map((answer, index) =>
                <AnswerItem answer={answer} key={index} onClickAnswerHandler={onClickAnswerHandler}/>
            )}
        </ul>
    );
};

export default AnswerList;