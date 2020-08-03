import React from 'react'
import s from './end.module.scss'
import { connect } from 'react-redux'

const EndGame = ({ score, birds, toggle }) => {
    const allScore = birds.length * 5

    return (
        <div className={s.modal}>
            <div className={s.modalBody}>
                <h1>Поздравляем!</h1>
                <p>Вы прошли викторину и набрали {score} из {allScore} возможных баллов</p>
                {score !== allScore && <button onClick={toggle}>Попробовать еще раз</button>}
            </div>
        </div>
    )
}

const mstp = state => ({
    birds: state.questions.birdsData
})

export default connect(mstp)(EndGame)
