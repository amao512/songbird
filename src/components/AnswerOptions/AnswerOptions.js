import React, { useState, useEffect } from 'react'
import s from './answer.module.scss'
import { connect } from 'react-redux'
import SoundIndication from '../SoundIndication/SoundIndication'
import win from '../../assets/music/win.mp3'
import lose from '../../assets/music/lost.mp3'
import { selectBird, setIsAnswer } from '../../redux/actions/questionsAction'
import { setAllScore, subtractScore } from '../../redux/actions/scoreAction'

const AnswerOptions = ({ birds, randomQuestion, selectBird, setAllScore, setIsAnswer, subtractScore }) => {
    const [wrong, setWrong] = useState({})
    const [right, setRight] = useState(null)
    const [indication, setIndication] = useState(null)

    const onHandleClick = (answer, i) => {
        selectBird(answer)
        
        if(answer.id !== randomQuestion.id){
            if(right === null && wrong[i] !== answer.id){
                subtractScore()
                setWrong({...wrong, [i]: answer.id})
                setIndication(lose)
                setTimeout(() => setIndication(null), 500)
            }
        } else {
            if(!right){
                setRight(randomQuestion.id)
                setIndication(win)
                setAllScore()
                setIsAnswer()
            }
        }
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
                            onClick={() => onHandleClick(bird, index)}
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

export default connect(mstp, { selectBird, setAllScore, setIsAnswer, subtractScore })(AnswerOptions)
