import React, { FC } from 'react'

type OwnProps = {
    sound: string
}

type PropsType = OwnProps

const SoundIndication: FC<PropsType> = ({ sound }) => {
    return (
        <audio src={sound} autoPlay>
            <source src={sound} type="audio/mpeg"></source>
        </audio>
    )
}

export default SoundIndication
