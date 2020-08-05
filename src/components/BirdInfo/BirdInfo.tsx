import React, { FC } from 'react'
import s from './info.module.scss'
import Audioplayer from '../Audioplayer/Audioplayer'
import { connect } from 'react-redux'
import { BirdDataType } from '../../redux/reducers/questionsReducer'
import { RootState } from '../../redux/store'

type MapStatePropsType = {
    bird: BirdDataType | null
}

type PropsType = MapStatePropsType

const BirdInfo: FC<PropsType> = ({ bird }) => {
    return (
        <div className={s.birdInfo}>
            { bird ? (
                <div className={s.bird}>
                    <div className={s.info}>
                        <div className={s.image}>
                            <img src={bird.image} alt='' />
                        </div>

                        <div className={s.birdName}>
                            <h1>{bird.name}</h1>
                            <p className={s.englishName}>{bird.species}</p>
                        </div>
                    </div>

                    <div className={s.audioplayer}>
                        <Audioplayer audio={bird.audio} />
                    </div>

                    <div className={s.desc}>
                        <p>{bird.description}</p>
                    </div>
                </div>
            ) : (
                <p>Послушайте плеер.<br/>Выберите птицу из списка</p>        
            )}
        </div>
    )
}

const mstp = (state: RootState): MapStatePropsType => ({
    bird: state.questions.selectedBird
})

export default connect<MapStatePropsType, {}, {}, RootState>(mstp)(BirdInfo)
