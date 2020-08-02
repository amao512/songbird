import React, { useState, useEffect } from 'react'
import s from './answer.module.scss'

const AnswerOptions = ({ birds, onAnswer, randomAnswer }) => {
    const [wrong, setWrong] = useState({})
    const [right, setRight] = useState(null)

    const onHandleClick = (answer, i) => {
        if(answer.id !== randomAnswer.id){
            if(right === null){
                setWrong({...wrong, [i]: answer.id})
            }
        } else {
            setRight(randomAnswer.id)
        }
        onAnswer(answer)
    }

    useEffect(() => {
        setWrong({})
        setRight(null)
    }, [randomAnswer])

    return (
        <ul className={s.answerOptions}>
            {birds.map((bird, index) => {
                return <li 
                            key={bird.id} 
                            className={wrong[index] === bird.id ? s.wrongAnswer : right === bird.id ? s.rightAnswer : '' } 
                            onClick={() => !right && onHandleClick(bird, index)}
                        >{bird.name}</li>
            })}
        </ul>
    )
}

export default AnswerOptions
