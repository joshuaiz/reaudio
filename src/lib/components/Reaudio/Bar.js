import React from 'react'
import { secondsToTime } from './helpers/helpers'

const Bar = ({ duration, curTime, onTimeUpdate }) => {
    const curPercentage = (curTime / duration) * 100

    function calcClickedTime(e) {
        const clickPositionInPage = e.pageX
        const bar = document.querySelector('.bar__progress')
        const barStart = bar.getBoundingClientRect().left + window.scrollX
        const barWidth = bar.offsetWidth
        const clickPositionInBar = clickPositionInPage - barStart
        const timePerPixel = duration / barWidth
        return timePerPixel * clickPositionInBar
    }

    function handleTimeDrag(e) {
        onTimeUpdate(calcClickedTime(e))

        const updateTimeOnMove = eMove => {
            onTimeUpdate(calcClickedTime(eMove))
        }

        document.addEventListener('mousemove', updateTimeOnMove)

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', updateTimeOnMove)
        })
    }

    return (
        <div className="bar">
            <span className="bar__time">
                {!isNaN(curTime) ? secondsToTime(+curTime) : 0}
            </span>
            <div
                className="bar__progress"
                style={{
                    backgroundImage: `linear-gradient(to right, #777 ${curPercentage}%, #FFF 0)`
                }}
                onMouseDown={e => handleTimeDrag(e)}
            >
                <span
                    className="bar__progress__knob"
                    style={{ left: `${curPercentage - 1}%` }}
                />
            </div>
            <span className="bar__time">
                {!isNaN(duration) ? secondsToTime(+duration) : 0}
            </span>
        </div>
    )
}

export default Bar
