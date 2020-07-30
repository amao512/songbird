import React from 'react'
import Questions from '../QuestionsList/QuestionsList'
import s from './header.module.scss'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logoScore}>
                <div className={s.logo}>
                    <img src={'https://birds-quiz.netlify.app/static/media/logo.4f82cd73.svg'} alt='' />
                </div>

                <div className={s.score}>
                    <h3>Score: {0}</h3>
                </div>
            </div>

            <Questions />
        </header>
    )
}

export default Header