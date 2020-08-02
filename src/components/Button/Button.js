import React from 'react'
import s from './button.module.scss'
import { connect } from 'react-redux'

const Button = ({ nextQuestion, isAnswer }) => {
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

const mstp = state => ({
    isAnswer: state.questions.isAnswer
})

export default connect(mstp)(Button)
