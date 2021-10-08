import React from 'react';
import "./AnswerList.scss"
import AnswerItem from "./AnswerItem/AnswerItem";

const   AnswerList = ({answers,onClickAnswerHandler,state}) => {

    return (
        <ul className="quiz__answers">
            {answers.map((answer, index) =>
                <AnswerItem
                    answer={answer}
                    key={index}
                    onClickAnswerHandler={onClickAnswerHandler}
                    state={state ? state[answer.id]:null}
                />
            )}
        </ul>
    );
};

export default AnswerList;