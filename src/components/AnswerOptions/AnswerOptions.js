import React, { useState } from 'react'
import s from './answer.module.scss'

const AnswerOptions = ({ birds, randomAnswer, onAnswer }) => {
    const [answer, setAnswer] = useState(false)

    return (
        <ul className={s.answerOptions}>
            {birds.map(bird => {
                    return <li key={bird.id} onClick={() => onAnswer(bird)}>{bird.name}</li>
            })}
        </ul>
    )
}

export default AnswerOptions
