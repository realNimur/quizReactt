import React, {useState} from 'react';
import './Quiz.scss';
import ActiveQuiz from "../ActiveQuiz/ActiveQuiz";

const Quiz = () => {
    const [quizOption, setQuizOption] = useState({
        answerState: null,
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
        const answerValid = quizOption.quiz[quizOption.currentQuestion].validAnswerId;
        let isAnswerValid = answerId === answerValid ? true : false;
        const qiuzFinished = quizOption.currentQuestion + 1 === quizOption.quiz.length ? true : false;

        if (qiuzFinished) {
            return console.log('Finished');
        }

        if (isAnswerValid) {
            setQuizOption({
                ...quizOption,
                answerState: {[answerId]: 'success'}
            })
            const timer = setTimeout(() => {
                setQuizOption({
                    ...quizOption,
                    currentQuestion: quizOption.currentQuestion + 1,
                    answerState: null,
                });
                clearTimeout(timer);
            }, 1000)
        } else {
            setQuizOption({
                ...quizOption,
                answerState: {[answerId]: 'error'}
            })
        }

    }
    return (
        <>
            <div className="quiz">
                <h1>Пройдите тест, пожалуйста</h1>
                <ActiveQuiz
                    answers={quizOption.quiz[quizOption.currentQuestion].answers}
                    question={quizOption.quiz[quizOption.currentQuestion].question}
                    onClickAnswerHandler={onClickAnswerHandler}
                    quizLength={quizOption.quiz.length}
                    currentQuestion={quizOption.currentQuestion + 1}
                    state={quizOption.answerState}
                />
            </div>
        </>
    );
};

export default Quiz;