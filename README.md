# ⚛️ 🎵 Reaudio
### A simple, configureable HTML5 audio component for React.
#### Features:
- no dependencies
- handles multiple players (e.g. for a playlist)
- supports only one player playing at a time
- image support
- minimal styles
- easily customizable
- fully responsive

## Installation
**manual (best for customizing):**<br />
If you'd like to make a lot of customizations, copy the [Reaudio component folder](https://github.com/joshuaiz/reaudio/tree/master/src/lib/components/Reaudio) from the GitHub repo and include it in your project.

It has everything you need to get started...you'll just need to supply a playlist array.

**with yarn:**
```bash
yarn add reaudio
```
**with npm:**
```bash
npm i -s reaudio
```



![](https://studio.bio/reaudio/images/reaudio_screenshot.png)

## Usage
#### As module: import Reaudio and base styles:
```javascript
import React from 'react'
import Reaudio from 'reaudio'
import 'reaudio/build/index.css'
```
Alternatively you can copy the [base scss styles](https://github.com/joshuaiz/reaudio/blob/master/src/lib/components/Reaudio/assets/styles.scss) into your project from the repo if you use sass/scss.

#### As component (manual): 
```javascript
import React from 'react'
import Reaudio from './component-folder/Reaudio/Reaudio'
import './component-folder/Reaudio/assets/styles.css'
```
There is also a `styles.scss` file if you use scss. Be sure to install `node-sass` in your project to use.

#### Next, provide a playlist array (required):
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
All of the elements can be moved around or hidden via props or css, allowing for any kind of player imaginable.

### Reaudio Props
The `playlist` prop is required for Reaudio to work.
| Prop          | Values               | Type   | Default |
| ------------- | -------------------- | ------ | ------- |
| playlist      | array of objects     | Array  | []      |

### Player Props
| Props       | Values               | Type    | Default |
|-------------| -------------------- |---------|---------|
| source      | url; local url       | String  | ''      |
| trackName   | any                  | String  | ''      |
| trackArtist | any                  | String  | ''      |
| trackImage  | url; local url       | String  | ''      |
| loop        | true; false          | Boolean | false   |
| preload     | none; metadata; auto | String  | auto    |

In addition, any acceptable [HTML5 `<audio>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio#Attributes) can be assigned through props.

### Images
The `trackImage` prop provides for the display of cover art or other images inline in the player. You can use a full url to an image file or a local url in your project.

### Multiple Players
The `<Reaudio />` component will output as many individual players as there are track objects in the `playlist` array. 

Built-in to Reaudio is the ability to only have one player playing at once which is really cool.

You can combine these into a single playlist visually with css/scss however you will need to add the next/previous playback logic to your app.

### Contributing
We welcome PRs, issues, and contributions to make Reaudio better.










