import React from 'react'
import s from './question.module.scss'
import birdImg from '../../assets/images/bird.jpg'
import Audioplayer from '../Audioplayer/Audioplayer'
import { connect } from 'react-redux'

const Question = ({ bird, isAnswer }) => {
    return (
        <div className={s.question}>
            <div className={s.birdImage}>
                <img src={isAnswer ? bird.image : birdImg} alt='' />
            </div>

            <div className={s.birdName}>
                <h1>{isAnswer ? bird.name : '******'}</h1>
            </div>

            <div className={s.audioplayer}>
                <Audioplayer audio={bird.audio} />
            </div>
        </div>
    )
}

const mstp = state => ({
    bird: state.questions.randomQuestion,
    isAnswer: state.questions.isAnswer
})

export default connect(mstp)(Question)
