import React, { FC } from 'react'
import QuestionsList from '../QuestionsList/QuestionsList'
import s from './header.module.scss'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'

type MapStatePropsType = {
    score: number
}

type PropsType = MapStatePropsType

const Header: FC<PropsType> = ({ score }) => {
    return (
        <header className={s.header}>
            <div className={s.logoScore}>
                <div className={s.logo}>
                    <img src={'https://birds-quiz.netlify.app/static/media/logo.4f82cd73.svg'} alt='' />
                </div>

                <div className={s.score}>
                    <h3>Score: {score}</h3>
                </div>
            </div>

            <QuestionsList />
        </header>
    )
}

const mstp = (state: RootState): MapStatePropsType => ({
    score: state.score.allScore
})

export default connect<MapStatePropsType, {}, {}, RootState>(mstp)(Header)