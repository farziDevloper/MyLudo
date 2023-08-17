import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { NativeModules } from 'react-native';

export const  NewComponent = () => {
    const { Hyperkyc } = NativeModules;
    var configDictionary = {};
          configDictionary["appId"] = appID
          configDictionary["appKey"] = appKey
          
          var inputsDictionary = {};
          inputsDictionary["bvnNumber"] = "number-123"
          inputsDictionary["image"] = "image-path"
     
        //    configDictionary["defaultLangCode"] = "vn"
          configDictionary["inputs"] = inputsDictionary

          configDictionary["transactionId"] = transactionId
          configDictionary["workflowId"] = "<workflow-id>"
  Hyperkyc.launch(configDictionary, function(response){
           console.log(response)
           })

    return (
        <View>
            <Text>Hello</Text>
        </View>
    )
}