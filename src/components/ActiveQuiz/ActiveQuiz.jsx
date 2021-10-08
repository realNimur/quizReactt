import React from 'react';
import './ActiveQuiz.scss'
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = ({answers,question,onClickAnswerHandler,quizLength,currentQuestion,state}) => {

    return (
        <div className={"quiz-question"}>
            <div className="quiz-question__header">
                <p><strong>{currentQuestion}. </strong>{question}</p>
                <p>{currentQuestion} / {quizLength}</p>
            </div>
            <AnswerList
                state={state}
                answers={answers}
                onClickAnswerHandler={
                    onClickAnswerHandler
                }
            />

        </div>
    );
};

export default ActiveQuiz;