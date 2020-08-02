import React, { useState, useEffect } from 'react'
import s from './answer.module.scss'
import { connect } from 'react-redux'

const AnswerOptions = ({ birds, onReply, randomQuestion }) => {
    const [wrong, setWrong] = useState({})
    const [right, setRight] = useState(null)

    const onHandleClick = (answer, i) => {
        if(answer.id !== randomQuestion.id){
            if(right === null){
                setWrong({...wrong, [i]: answer.id})
            }
        } else {
            setRight(randomQuestion.id)
        }
        onReply(answer)
    }

    useEffect(() => {
        setWrong({})
        setRight(null)
    }, [randomQuestion])

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

const mstp = state => ({
    birds: state.questions.birdsQuestions,
    randomQuestion: state.questions.randomQuestion,
})

export default connect(mstp)(AnswerOptions)
