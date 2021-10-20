// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor, fontStyle) for the color and the font style
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>fmedium pink box</div>
const largeBox = <div className="box box--large" style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>

// eslint-disable-next-line
function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

function ExtraCredit2() {
  function Box({size, style, children})
  {
    return (
      <div className={`box ${size}`} style={{fontStyle: 'italic', ...style}}>
        {children}
      </div>
    )
  }

  return (
    <>
      <Box size="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="box--medium" style={{backgroundColor: 'pink'}}>
        small pink box
      </Box>
      <Box size="box--large" style={{backgroundColor: 'orange'}}>
        small orange box
      </Box>
      <Box>
        sizeless box
      </Box>
    </>
  )
}

export default ExtraCredit2
