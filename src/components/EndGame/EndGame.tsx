import React, { FC } from 'react'
import s from './end.module.scss'
import { connect } from 'react-redux'
import { BirdDataType } from '../../redux/reducers/questionsReducer'
import { RootState } from '../../redux/store'

type MapStatePropsType = {
    birds: Array<BirdDataType>
    score: number
}

type OwnProps = {
    toggle: () => void
}

type PropsType = OwnProps & MapStatePropsType

const EndGame: FC<PropsType> = ({ score, birds, toggle }) => {
    const maxScore = birds.length * 5

    return (
        <div className={s.modal}>
            <div className={s.modalBody}>
                <h1>Поздравляем!</h1>
                <p>Вы прошли викторину и набрали {score} из {maxScore} возможных баллов</p>
                {score !== maxScore && <button onClick={toggle}>Попробовать еще раз</button>}
            </div>
        </div>
    )
}

const mstp = (state: RootState): MapStatePropsType => ({
    birds: state.questions.birdsData,
    score: state.score.allScore
})

export default connect<MapStatePropsType, {}, OwnProps, RootState>(mstp)(EndGame)
