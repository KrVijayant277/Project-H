import React, { useState } from 'react'
import { ScrollView, TextInput, TouchableOpacity, ImageBackground, Text, SafeAreaView, View, Alert } from 'react-native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import Loader from '../components/Loader'

import * as ZIM from 'zego-zim-react-native';
import * as ZPNs from 'zego-zpns-react-native';
import ZegoUIKitPrebuiltCallService, {
    ZegoSendCallInvitationButton,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';

//navigation
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

// type EmailPassAuthProps = NativeStackScreenProps<RootStackParamList, 'EmailPassAuth'>

function EmailPassAuth() {

    const navigation = useNavigation()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [visible, setVisible] = useState(false)

    const validate = () => {
        let isValid = true;
        if (email == '') {
            isValid = false;
        }
        if (password == '') {
            isValid = false;
        }
        return isValid;
    }

    const userSignIn = () => {
        
        setVisible(true)
        firestore().collection('users').where("email", "==", email).get().then(res => {
            if (res.docs.length === 0) {
                setVisible(false)
                Alert.alert("User not found")
            } else {
                const user = res.docs[0].data()
                if (user.password === password && validate()) {
                    setVisible(false)
                    console.log("user exists")
                    navigation.navigate("Homepage")
                    goToNext(user.name, user.email, user.userId, user.mobile)
                }
                else {
                    setVisible(false)
                    Alert.alert("Invalid User Credentials")
                }
            }
        })
            .catch(errors => {
                setVisible(false)
                console.log(errors)
                Alert.alert(errors)
            })
            
    }

    const goToNext = async (name, email, userId, mobile) => {
        await AsyncStorage.setItem("NAME", name)
        await AsyncStorage.setItem("EMAIL", email)
        await AsyncStorage.setItem("USERID", userId)
        await AsyncStorage.setItem("MOBILE", mobile)
    }



    return (

        <ImageBackground
            source={require('../assets/images/bg-3.png')}
            resizeMode="cover"
            style={{
                padding: 20,
                flex: 1,
            }}>
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'lightblue',
                }}>
                    <Text style={{ color: 'black' }}>Video</Text>
                </View>
                <View style={{ flex: 2 }}>
                    <ScrollView
                        contentContainerStyle={{
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <TextInput
                            placeholder='Enter Email'
                            placeholderTextColor={'black'}
                            value={email}
                            onChangeText={text => setEmail(text)}
                            style={{
                                width: '90%',
                                height: 50,
                                marginTop: 30,
                                borderWidth: 0.5,
                                borderRadius: 20,
                                paddingLeft: 20
                            }}
                        />

                        <TextInput
                            placeholder='Enter Password'
                            placeholderTextColor={'black'}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            style={{
                                width: '90%',
                                height: 50,
                                marginTop: 30,
                                borderWidth: 0.5,
                                borderRadius: 20,
                                paddingLeft: 20
                            }}
                        />

                        <TouchableOpacity
                            style={{
                                width: '90%',
                                height: 50,
                                borderRadius: 20,
                                backgroundColor: 'black',
                                marginTop: 30,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={() => {
                                userSignIn();
                            }}>
                            <Text style={{ color: 'white' }}>Sign In</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                width: '90%',
                                height: 50,
                                borderRadius: 20,
                                backgroundColor: 'black',
                                marginTop: 30,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                            onPress={() => {
                                navigation.navigate("SignUp")
                            }}>
                            <Text style={{ color: 'white' }}>New User</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </View>
                <Loader visible={visible} />
            </View>
        </ImageBackground >

    )
}

export default EmailPassAuth