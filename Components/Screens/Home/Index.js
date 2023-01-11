import React, { useState } from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import NewGameModel from '../NewGameModel/NewGameModel'

const Home = ({popUp, onNewGameButtonClick, onCanelButtonClick , onRedInput, onGreenInput,onBlueInput,onYellowInput, onStart,redPlayerName ,greenPlayerName,bluePlayerName,yellowPlayerName}) => {




    const popup = popUp; // popUp coming from App to  Home using props and directly destructing it and getting it , we can also get it using props.pouUp;,,
    // and then sending the same value back to NewGameModel using props and then accessing it to show the popup window
    // console.warn(popup);


  return (
    <View style={styles.container}>
        <SafeAreaView>


    <Text>Home</Text>
    <TouchableOpacity >
        <Text style={styles.newGameButton} 
        onPress={onNewGameButtonClick}
        >New Game</Text>
    </TouchableOpacity>
    <Image style={styles.LudoImage} source={require("../../Assets/Images/Ludos.png")} />
    <NewGameModel 
    popUp={popup}
    onNewGameButtonClick={onNewGameButtonClick}
    onCanelButtonClick={onCanelButtonClick}
    onRedInput={onRedInput}
    onGreenInput={onGreenInput}
    onBlueInput={onBlueInput}
    onYellowInput={onYellowInput}
    onStart={onStart}
    redPlayerName={redPlayerName}
    greenPlayerName={greenPlayerName}
    yellowPlayerName={yellowPlayerName}
    bluePlayerName={bluePlayerName}
    />
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'red',
        width:'100%',
        height:'100%',
        justifyContent: 'center',},
    newGameButton: {
        width:'40%',
        height:40,
        borderColor:'black',
        borderWidth:2,
        borderRadius:10,
        backgroundColor:'green',
        padding:2,
        alignSelf:'center',
    },
    LudoImage : {
        width:'90%',
        height:'90%',
        resizeMode:'contain',
        marginHorizontal:17
    }
})

export default Home