import React, { useState } from 'react'
import s from './button.module.scss'

const Button = () => {
    const [answer, setAnswer] = useState(false)

    return <button className={answer ? s.activeButton : s.button}>Next Level</button>
}

export default Button
