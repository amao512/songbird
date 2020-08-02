import React from 'react'
import s from './answer.module.scss'

const AnswerOptions = ({ birds, onAnswer }) => {
    return (
        <ul className={s.answerOptions}>
            {birds.map(bird => {
                    return <li key={bird.id} onClick={() => onAnswer(bird)}>{bird.name}</li>
            })}
        </ul>
    )
}

export default AnswerOptions
