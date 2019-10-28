import React from 'react'
import PauseIcon from './assets/PauseIcon'

const Pause = ({ handleClick }) => {
    return (
        <button className="player__button" onClick={handleClick}>
            <PauseIcon />
        </button>
    )
}

export default Pause
