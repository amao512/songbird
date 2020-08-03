import React, { useState, useEffect } from 'react'
import s from './answer.module.scss'
import { connect } from 'react-redux'
import SoundIndication from '../SoundIndication/SoundIndication'
import win from '../../assets/music/win.mp3'
import lose from '../../assets/music/lost.mp3'
import { selectBird } from '../../redux/actions/questionsAction'

const AnswerOptions = ({ birds, onReply, randomQuestion, selectBird }) => {
    const [wrong, setWrong] = useState({})
    const [right, setRight] = useState(null)
    const [indication, setIndication] = useState(null)

    const onHandleClick = (answer, i) => {
        if(answer.id !== randomQuestion.id){
            if(right === null){
                setWrong({...wrong, [i]: answer.id})
                setIndication(lose)
                setTimeout(() => setIndication(null), 500)
            }
        } else {
            setRight(randomQuestion.id)
            setIndication(win)
        }
        onReply(answer)
        selectBird(answer)
    }

    useEffect(() => {
        setWrong({})
        setRight(null)
        setIndication(null)
    }, [randomQuestion])

    return (
        <ul className={s.answerOptions}>
            {birds.map((bird, index) => {
                return <li 
                            key={bird.id} 
                            className={wrong[index] === bird.id ? s.wrongAnswer : right === bird.id ? s.rightAnswer : '' } 
                            onClick={() => (!right && (wrong[index] !== bird.id)) && onHandleClick(bird, index)}
                        >{bird.name}</li>
            })}

            <SoundIndication sound={indication} />
        </ul>
    )
}

const mstp = state => ({
    birds: state.questions.birdsQuestions,
    randomQuestion: state.questions.randomQuestion,
})

export default connect(mstp, { selectBird })(AnswerOptions)
