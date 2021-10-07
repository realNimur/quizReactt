import React, {useState} from 'react';
import './Quiz.scss';
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";
import {createDebugLogger} from "resolve-url-loader/lib/join-function";

const Quiz = () => {
    const [quizOption, setQuizOption] = useState({
        currentQuestion: 0,
        quiz: [
            {
                question: 'Кто президент России?',
                validAnswerId: 1,
                id: 1,
                answers: [
                    {text: 'Путин В.В.', id: 1},
                    {text: 'Путин В.В.', id: 2},
                    {text: 'Путин В.В.', id: 3},
                    {text: 'Путин В.В.', id: 4},
                ]
            },
            {
                question: 'Высокая башня с сигнальными огнями на берегу моря?',
                validAnswerId: 1,
                id: 2,
                answers: [
                    {text: 'Маяк', id: 1},
                    {text: 'Тупак', id: 2},
                    {text: 'Мак', id: 3},
                    {text: 'Моряк', id: 4},
                ]
            },
        ]
    });
    const onClickAnswerHandler = (answerId) => {
        console.log(answerId)
    }
    return (
        <>
            <div className="quiz">
                <h1>Пройдите тест, пожалуйста</h1>
                <ActiveQuiz
                    answers={quizOption.quiz[0].answers}
                    question={quizOption.quiz[0].question}
                    onClickAnswerHandler={onClickAnswerHandler}
                    quizLength={quizOption.quiz.length}
                    currentQuestion={quizOption.currentQuestion + 1}
                />
            </div>
        </>
    );
};

export default Quiz;