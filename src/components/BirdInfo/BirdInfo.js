import React, { useState } from 'react'
import s from './info.module.scss'
import bird from '../../assets/images/bird.jpg'
import Audioplayer from '../Audioplayer/Audioplayer'

const BirdInfo = () => {
    const [answer, setAnswer] = useState(false)

    return (
        <div className={s.birdInfo}>
            { answer ? (
                <div className={s.bird}>
                    <div className={s.info}>
                        <div className={s.image}>
                            <img src={bird} alt='' />
                        </div>

                        <div className={s.birdName}>
                            <h1>Ласточка</h1>
                            <p className={s.englishName}>Delichon urbicum</p>
                        </div>
                    </div>

                    <div className={s.audioplayer}>
                        <Audioplayer />
                    </div>

                    <div className={s.desc}>
                        <p>Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.</p>
                    </div>
                </div>
            ) : (
                <p>Послушайте плеер.<br/>Выберите птицу из списка</p>        
            )}
        </div>
    )
}

export default BirdInfo
