import React from 'react'
import './audio.scss'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/src/styles.scss'
import 'react-h5-audio-player/lib/styles.css'

const Audio = () => {
    return (
        <AudioPlayer
            className='player'
            src="https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3"
            onPlay={e => console.log("onPlay")}
            autoPlay={false}
            customProgressBarSection={[
                RHAP_UI.MAIN_CONTROLS,
                RHAP_UI.PROGRESS_BAR,
                RHAP_UI.CURRENT_TIME,
                RHAP_UI.CURRENT_LEFT_TIME,
            ]}
            customControlsSection={[]}
            customAdditionalControls={[]}
            showJumpControls={false}
            layout="horizontal-reverse"
        />
    )
}

export default Audio
