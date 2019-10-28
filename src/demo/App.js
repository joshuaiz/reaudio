import React from 'react'
import Reaudio from '../lib/components/Reaudio/Reaudio'
import gla from '../lib/components/Reaudio/assets/gla.jpg'
import VIZLP3 from '../lib/components/Reaudio/assets/VIZLP3.png'

// Reaudio expects a playlist array of song objects
const playlist = [
    {
        id: '1',
        source: 'https://studio.bio/reaudio/iiwii.mp3',
        trackName: 'IIWII',
        trackArtist: 'Joshua Iz',
        trackImage: 'https://studio.bio/reaudio/images/VIZLP1.jpg',
        loop: true
    },
    {
        id: '2',
        source: [
            'https://studio.bio/reaudio/Rafael.aif',
            'https://studio.bio/reaudio/Rafael.mp3'
        ],
        trackName: 'Rafael',
        trackArtist: 'Joshua Iz',
        trackImage: gla
    },
    {
        id: '3',
        source: 'https://studio.bio/reaudio/Voyager_1.mp3',
        trackName: 'Voyager 1',
        trackArtist: 'Joshua Iz',
        trackImage: VIZLP3
    }
]

function App() {
    return (
        <div className="App">
            <h1>Reaudio</h1>
            <Reaudio playlist={playlist} />
        </div>
    )
}

export default App
