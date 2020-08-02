import React from 'react'
import s from './questions.module.scss'
import { connect } from 'react-redux'

const Questions = ({ currentIndex }) => {
    const questions = [
        {index: 0, title: 'Разминка'},
        {index: 1, title: 'Воробьиные'},
        {index: 2, title: 'Лесные птицы'},
        {index: 3, title: 'Певчие птицы'},
        {index: 4, title: 'Хищные птицы'},
        {index: 5, title: 'Морские птицы'},
    ]

    return (
        <div className={s.questions}>
            { questions.map(question => (
                <li key={question.index} className={question.index === currentIndex ? s.active : ''}>
                    <p>{question.title}</p>
                </li>
            )) }
        </div>
    )
}

const mstp = state => ({
    currentIndex: state.questions.currentIndex
})

export default connect(mstp)(Questions)
