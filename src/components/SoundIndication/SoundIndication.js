import React from 'react'

const SoundIndication = ({ sound }) => {
    return (
        <audio src={sound} autoPlay>
            <source src={sound} type="audio/mpeg"></source>
        </audio>
    )
}

export default SoundIndication
