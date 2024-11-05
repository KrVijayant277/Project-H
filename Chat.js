import { View} from 'react-native'
import React, { useEffect, useCallback, useState } from 'react';
import { GiftedChat,Composer} from 'react-native-gifted-chat'
import AsyncStorage from '@react-native-async-storage/async-storage'
import firestore from '@react-native-firebase/firestore'
// import uuid from 'react-native-uuid'

// navigation
// import { NativeStackScreenProps } from "@react-navigation/native-stack"
// import { RootStackParamList } from '../App'
import { ParamListBase, RouteProp, useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
// import { NativeStackNavigationProp } from '@react-navigation/native-stack'
// import { create } from 'react-test-renderer';

// type ChatProps = NativeStackScreenProps<RootStackParamList, 'Chat'>


const Chat = () => {

    const [messageList, setMessageList] = useState([]);
    const [mode, setMode] = useState('LIGHT');
    const isFocued = useIsFocused();

    const route = useRoute()
    const navigation = useNavigation()

    useEffect(() => {
        getMode();
      }, [isFocued]);
      const getMode = async () => {
        setMode(await AsyncStorage.getItem('MODE')||'LIGHT');
      };

    useEffect(() => {
        const subscriber = firestore().collection("chats").doc(route.params.id + route.params.data.userId).collection("messages").orderBy("createdAt","desc") 

        subscriber.onSnapshot(querysnapshot => {
            const allmessages = querysnapshot.docs.map(item => {
              const data = item.data();
              let createdAt;
              if (data.createdAt instanceof firestore.Timestamp) {
                // If createdAt is a Firestore Timestamp, convert it to a JavaScript date
                createdAt = data.createdAt.toDate();
              } else {
                // If createdAt is not a Firestore Timestamp, use it as is
                createdAt = data.createdAt;
              }
              return {...data, createdAt};
            }) ;
            setMessageList(allmessages);
          });
          
    }, [])

    const onSend = useCallback(async (messages = []) => {
        const msg = messages[0]
        const myMsg = {
            ...msg,
            sendBy: route.params.id,
            sendTo: route.params.data.userId,
            createdAt: Date.parse(msg.createdAt)
        }
        setMessageList(previousMessages =>
            GiftedChat.append(previousMessages, [myMsg]));
        firestore().collection("chats").doc("" + route.params.id + route.params.data.userId).collection("messages").add(myMsg)
        firestore().collection("chats").doc("" + route.params.data.userId + route.params.id).collection("messages").add(myMsg)
    }, []);



    return (
        <View style={[
            {flex:1},
            {backgroundColor: mode == 'LIGHT' ? 'white' : '#212121'},
            ]}>
            <GiftedChat
                renderComposer={props1 => ( <Composer {...props1} textInputStyle={{ color: "black"}} /> )}
                isTyping = {true}
                messagesContainerStyle = {{}}
                messages={messageList}
                onSend={messages => onSend(messages)}
                user={{
                    _id: route.params.id,
                }}
            />
        </View>
    )
}

export default Chat
