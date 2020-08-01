import React, { useState, useEffect } from 'react'
import s from './button.module.scss'

const Button = ({ nextQuestion, rightAnswer }) => {
    const [answer, setAnswer] = useState(false)

    const onHandleClick = e => {
        if(answer){
            nextQuestion()
        }
    }

    useEffect(() => {
        setAnswer(rightAnswer)
    }, [rightAnswer])

    return <button onClick={onHandleClick} disabled={!answer} className={answer ? s.activeButton : s.button}>Next Level</button>
}

export default Button
