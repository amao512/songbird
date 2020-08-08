import React, { useState, useEffect, FC } from 'react'
import s from './answer.module.scss'
import { connect } from 'react-redux'
import SoundIndication from '../SoundIndication/SoundIndication'
import { questionsActions } from '../../redux/actions/questionsAction'
import { scoreActions } from '../../redux/actions/scoreAction'
import { BirdDataType } from '../../redux/reducers/questionsReducer'
import { RootState } from '../../redux/store'

const lost = 'https://birds-quiz.netlify.app/static/media/error.165166d5.mp3'
const win = 'https://birds-quiz.netlify.app/static/media/win.a1e9e8b6.mp3'

const { selectBird, setIsAnswer } = questionsActions
const { setAllScore, subtractScore } = scoreActions

type MapStatePropsType = {
    birds: Array<BirdDataType>
    randomQuestion: BirdDataType
}

type MapDispatchPropsType = {
    selectBird: (answer: BirdDataType) => void
    setAllScore: () => void
    setIsAnswer: () => void
    subtractScore: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const AnswerOptions: FC<PropsType> = ({ birds, randomQuestion, selectBird, setAllScore, setIsAnswer, subtractScore }) => {
    const [wrong, setWrong] = useState<any>({})
    const [right, setRight] = useState<null | number>(null)
    const [indication, setIndication] = useState<string>('')

    const onHandleClick = (answer: BirdDataType, i: number) => {
        selectBird(answer)
        
        if(answer.id !== randomQuestion.id){
            if(right === null && wrong[i] !== answer.id){
                setIndication('')
                setIndication(lost)
                subtractScore()
                setWrong({...wrong, [i]: answer.id})
                setTimeout(() => setIndication(''), 500)
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
        setIndication('')
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

const mstp = (state: RootState): MapStatePropsType => ({
    birds: state.questions.birdsQuestions,
    randomQuestion: state.questions.randomQuestion,
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>(mstp, { selectBird, setAllScore, setIsAnswer, subtractScore })(AnswerOptions)
