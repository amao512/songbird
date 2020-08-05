import React, { FC } from 'react'
import s from './button.module.scss'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'

type MapStatePropsType = {
    isAnswer: boolean
}

type OwnProps = {
    nextQuestion: () => void
}

type PropsType = MapStatePropsType & OwnProps

const Button: FC<PropsType> = ({ nextQuestion, isAnswer }) => {
    const onHandleClick = () => {
        if(isAnswer){
            nextQuestion()
        }
    }

    return <button 
                onClick={onHandleClick} 
                disabled={!isAnswer} 
                className={isAnswer ? s.activeButton : s.button}
            >Next Level</button>
}

const mstp = (state: RootState): MapStatePropsType => ({
    isAnswer: state.questions.isAnswer
})

export default connect<MapStatePropsType, {}, OwnProps, RootState>(mstp)(Button)
