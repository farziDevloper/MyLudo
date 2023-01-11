import React, { useState } from 'react'
import { View,Text, SafeAreaView,  } from 'react-native'
import Game from './Components/Screens/Game/Index'
import Home from './Components/Screens/Home/Index'

function App() {

  const [inProgress, setInProgress]= useState(true);
  const [popUp , setPopUp] = useState(false)
  const [redPlayerName, setRedPlayerName] = useState()
  const [yellowPlayerName, setYellowPlayerName] = useState()
  const [greenPlayerName, setGreenPlayerName] = useState()
  const [bluePlayerName, setBluePlayerName] = useState()

  const onRedInput = (name)=> {
    setRedPlayerName(name)
  }
  const onYellowInput = (name)=> {
    setYellowPlayerName(name)
  }
  const onGreenInput = (name)=> {
    setGreenPlayerName(name)
  }
  const onBlueInput = (name)=> {
    setBluePlayerName(name)
  }

  const onStart = () => {
    setInProgress(true)
    setPopUp(false)
  }

  // setTimeout(() => {
  //   setInProgress(true);
  // }, 5000)
// console.warn("hello world" , redPlayerName,yellowPlayerName,greenPlayerName,bluePlayerName)

  return (
    <View>
<SafeAreaView>      

  {inProgress ? <Game /> : <Home 
  popUp={popUp}
  onNewGameButtonClick={() => {setPopUp(true)}}
  onCanelButtonClick={() => {setPopUp(false)}}
  redPlayerName={redPlayerName}
  yellowPlayerName={yellowPlayerName}
  greenPlayerName={greenPlayerName}
  bluePlayerName={bluePlayerName}
  onRedInput={onRedInput}
  onYellowInput={onYellowInput}
  onGreenInput={onGreenInput}
  onBlueInput={onBlueInput}
  onStart={onStart}
  />}
</SafeAreaView>

    </View>
  )
}

export default App