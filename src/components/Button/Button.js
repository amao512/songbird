import React from 'react'
import s from './button.module.scss'

const Button = ({ nextQuestion, isAnswer }) => {
    const onHandleClick = e => {
        if(isAnswer){
            nextQuestion()
        }
    }

    return <button onClick={onHandleClick} disabled={!isAnswer} className={isAnswer ? s.activeButton : s.button}>Next Level</button>
}

export default Button
