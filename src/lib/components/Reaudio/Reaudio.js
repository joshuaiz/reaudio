import React, { useState } from 'react'
import Player from './Player'
import { slugify } from './helpers/helpers'
import './assets/styles.css'

const Reaudio = ({ playlist }) => {
    const [currentPlayer, setCurrentPlayer] = useState()

    // initialize current
    let current

    const togglePlay = (id, index) => {
        // get current audio player
        const currentAudio = document.getElementById(id)

        // get all audio players as HTMLCollection
        const players = document.getElementsByTagName('audio')

        // cast HTMLCollection to array so we can do stuff
        const playersArray = [...players]

        // get array of players that are not playing
        const notPlaying = playersArray.filter(item => {
            if (item !== currentAudio) {
                return item
            }
            return null
        })

        if (!currentAudio.paused) {
            // if we are playing, pause
            currentAudio.pause()
        } else {
            // if we are paused, play
            currentAudio.play()

            // pause all other players
            notPlaying.map(player => {
                player.pause()
                setCurrentPlayer(!player)
                return null
            })
        }

        // reset current
        current = currentAudio
        setCurrentPlayer(current)
    }

    return (
        <div className="reaudio">
            {playlist.map((track, index) => {
                const slug = slugify(
                    track.trackName + '-' + track.trackArtist + '-' + track.id
                )
                return (
                    <Player
                        key={track.id}
                        slug={slug}
                        index={index}
                        source={track.source}
                        togglePlay={togglePlay}
                        trackName={track.trackName}
                        trackArtist={track.trackArtist}
                        trackImage={track.trackImage}
                        loop={track.loop}
                        isCurrent={
                            currentPlayer && currentPlayer.id === slug
                                ? true
                                : false
                        }
                    />
                )
            })}
        </div>
    )
}

export default Reaudio
