import React from 'react'
import s from './question.module.scss'
import bird from '../../assets/images/bird.jpg'
import Audioplayer from '../Audioplayer/Audioplayer'

const Question = () => {
    return (
        <div className={s.question}>
            <div className={s.birdImage}>
                <img src={bird} alt='' />
            </div>

            <div className={s.birdName}>
                <h1>******</h1>
            </div>

            <div className={s.audioplayer}>
                <Audioplayer audioId='audio' />
            </div>
        </div>
    )
}

export default Question
