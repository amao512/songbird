import React from 'react'
import s from './questions.module.scss'

const Questions = () => {
    return (
        <div className={s.questions}>
            <li className={s.active}><p>Разминка</p></li>
            <li><p>Воробьиные</p></li>
            <li><p>Лесные птицы</p></li>
            <li><p>Певчие птицы</p></li>
            <li><p>Хищные птицы</p></li>
            <li><p>Морские птицы</p></li>
        </div>
    )
}

export default Questions
