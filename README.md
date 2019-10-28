
<div style="text-align: center;" >
    <img src="https://studio.bio/reaudio/images/reaudio_logo.png" width="200" height="200">
</div>

<h1 style="text-align: center;">Reaudio</h1>

### A simple, configureable HTML5 audio component for React.
#### Features:
- no dependencies
- handles multiple players (e.g. for a playlist)
- supports only one player playing at a time
- image support
- minimal styles
- easily customizable
- fully responsive

## Installation & Usage
### Manually (best for customizing):
If you'd like to make a lot of customizations, copy the [Reaudio component folder](https://github.com/joshuaiz/reaudio/tree/master/src/lib/components/Reaudio) from the GitHub repo and include it in your project.

**Include the component:**
```javascript
import React from 'react'
import Reaudio from './component-folder/Reaudio/Reaudio'
import './component-folder/Reaudio/assets/styles.css'
```
There is also a `styles.scss` file if you use scss. Be sure to install `node-sass` in your project to use.

It has everything you need to get started...you'll just need to supply a playlist array.

### As module
**As module with yarn:**
```bash
yarn add reaudio
```
**As module with npm:**
```bash
npm i -s reaudio
```
**Include the module and base styles in your project:**
```javascript
import React from 'react'
import Reaudio from 'reaudio'
import 'reaudio/build/index.css'
```
Alternatively you can copy the [base scss styles](https://github.com/joshuaiz/reaudio/blob/master/src/lib/components/Reaudio/assets/styles.scss) into your project from the repo if you use sass/scss.
<p>&nbsp;</p>

#### Screenshot with multiple players:

![](https://studio.bio/reaudio/images/reaudio_screenshot.png)

## Usage
### Provide a playlist array (required):
Reaudio expects a playlist array of song/track objects:
```javascript
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
    },
    {
        id: '3',
        source: 'https://studio.bio/reaudio/Voyager_1.mp3',
        trackName: 'Voyager 1',
        trackArtist: 'Joshua Iz',
    }
]
```
To test out Reaudio, copy this playlist code and place it in your component that is calling Reaudio.

#### Include the Reaudio component with `playlist` prop:
```jsx
function App() {
    return (
        <div className="App">
            <h1>Reaudio</h1>
            <Reaudio playlist={playlist} />
        </div>
    )
}

export default App
```
##### Donezos!

### Under the hood
The `<Reaudio />` component calls an arbitrary number of `<Player />` components based on the number of songs/tracks in the supplied playlist array. 

Each `<Player />` component contains a customizable HTML5 audio player.

### Customization
As mentioned above, the best way to customize Reaudio is to include the Reaudio component folder manually in your project.

Here is the basic structure of the Reaudio player:
```jsx
<div className="player">
    <audio>
         <source src={src} />
    </audio>
    <div className="controls">
        <Pause/> // will toggle with Play button
        <Play/>
        <TrackInfo /> // artist, name, image, etc.
        <Bar/> // progress bar; total time
    </div>
</div>
```
All of the elements including controls can be moved around or hidden via props or css, allowing for any kind of player imaginable.

### Reaudio Props
The `playlist` prop is required for Reaudio to work.

| Prop     | Values           | Type  | Default |
|----------|------------------|-------|---------|
| playlist | array of objects | Array | []      |

<p>&nbsp;</p>

### Player Props
| Props       | Values                | Type    | Default |
|-------------| --------------------- |---------|---------|
| source      | url; local url; array | String  | ''      |
| trackName   | any                   | String  | ''      |
| trackArtist | any                   | String  | ''      |
| trackImage  | url; local url        | String  | ''      |
| loop        | true; false           | Boolean | false   |
| preload     | none; metadata; auto  | String  | auto    |
<p>&nbsp;</p>


In addition, any acceptable [HTML5 `<audio>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Attributes) can be assigned through props.

### Audio sources
The `source` prop can take either a single url string value or an array of sound sources which can be used to supply fallbacks for certain browsers. 

**Single source example:**
```jsx
source: 'https://studio.bio/reaudio/Rafael.mp3',
```

**Multiple source example (array):**
```jsx
source: [
  'https://studio.bio/reaudio/Rafael.aif',
  'https://studio.bio/reaudio/Rafael.mp3'
],
```

As per the HTML5 audio spec, the browser will use the first format it can parse so provide the highest quality file first in the source array. 

Reaudio can accept any audio format that HTML5 audio accepts. See the [audio formats docs on MDN](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs).

Note that some browsers can play additional formats like `.aif` that are not included in the linked MDN docs.

### Images
The `trackImage` prop provides for the display of cover art or other images inline in the player. You can use a full url to an image file or a local url in your project.

Images are not required.

### Multiple Players
The `<Reaudio />` component will output as many individual players as there are track objects in the `playlist` array. 

Built-in to Reaudio is the ability to only have one player playing at once so when a player is playing, all other players are paused. Sweetness.

You can combine these into a single playlist visually with css/scss however you will need to add the next/previous playback logic to your app.

### Events
The `<Player>` component includes a `ref` via a `useRef()` hook of the currently playing `<audio>` element which you can use to programmatically control or respond to any events.

See the [full list of HTML5 audio events](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Events).

Example:
```jsx
const audioRef = useRef()

useEffect(() => {
    const audio = audioRef.current

    const setAudioData = () => {
        setDuration(audio.duration)
        setCurTime(audio.currentTime)
    }

    const setAudioTime = () => setCurTime(audio.currentTime)

    // DOM listeners: update React state on DOM events
    audio.addEventListener('loadeddata', setAudioData)
    audio.addEventListener('timeupdate', setAudioTime)

    // ...more stuff here

    return () => {
        audio.removeEventListener('loadeddata', setAudioData)
        audio.removeEventListener('timeupdate', setAudioTime)
    }
})
```
See `Player.js` in the Reaudio folder for the full code.

### Contributing
👉 We welcome PRs, issues, and contributions to make Reaudio better.










