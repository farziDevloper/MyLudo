import React from 'react'
import { Alert, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { isEmpty } from '../../../Utils/IsEmpty'

const NewGameModel = (props) => {
    console.warn(props)

    const checkMinimumPlayers = () => {
        let minimumPlayers = 0;
    {!isEmpty(props.redPlayerName) ?minimumPlayers++ : null};
    {!isEmpty(props.greenPlayerName) ?minimumPlayers++ : null};
    {!isEmpty(props.bluePlayerName) ?minimumPlayers++ : null};
    {!isEmpty(props.yellowPlayerName) ?minimumPlayers++ : null};

    console.warn( "========>",minimumPlayers );
        if(minimumPlayers >= 2 ){
            props.onStart()
        }
        else{
            Alert.alert(`Minimum 2 Players are required`, [{
                text: 'OK'
            }])
        }
    }


  return (
    <View>
        <Modal
        transparent={true}
        onRequestClose={()=> {}}
        visible={props.popUp}
        >
            <ScrollView>
                <SafeAreaView>

                <View style={styles.modal}>
                    <View style={styles.modalContainer}>
                        <Text style={{color: '#eebcc7'}}> Red Player</Text>
                        <TextInput style={[styles.textInputBox, styles.redInputBox]} onChangeText= {props.onRedInput} />
                        <Text style={{color: '#eebcc7'}}> Yellow Player</Text>
                        <TextInput style={[styles.textInputBox, styles.redInputBox]}onChangeText= {props.onYellowInput} />
                        <Text style={{color: '#eebcc7'}}> Green Player</Text>
                        <TextInput style={[styles.textInputBox, styles.redInputBox]} onChangeText= {props.onGreenInput} />
                        <Text style={{color: '#eebcc7'}}> Blue Player</Text>
                        <TextInput style={[styles.textInputBox, styles.redInputBox]} onChangeText= {props.onBlueInput} />
                    <TouchableOpacity onPress={props.onCanelButtonClick} >
                    <Text style={{color: '#ff0000'}}  > Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={checkMinimumPlayers}>
                    <Text style={{color: '#eebcc7'}}> New Game</Text>
                    </TouchableOpacity>
                    </View>


                </View>
                </SafeAreaView>
            </ScrollView>
        </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
    modal: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent:'center',
        alignItems: 'center',
    },
    modalContainer: {
        marginTop:20,
        backgroundColor:'#fff',
        width:'70%',
        height: undefined,
        borderRadius: 10,
        padding: 20,
        elevation:5,
        zIndex:5,

    },
    textInputBox :{
        marginBottom:20,
        borderWidth:1,
        height:40,
        borderRadius:10,
    },
    redInputBox : {
        backgroundColor: '#ffefef',
        borderColor: '#e6e6e6',
    }


})


export default NewGameModel