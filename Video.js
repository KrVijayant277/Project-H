import {
  ZegoUIKitPrebuiltCallWithInvitation,
  ZegoInvitationType,
  ONE_ON_ONE_VIDEO_CALL_CONFIG,
  ONE_ON_ONE_VOICE_CALL_CONFIG,
  GROUP_VIDEO_CALL_CONFIG,
  GROUP_VOICE_CALL_CONFIG,
} from '@zegocloud/zego-uikit-prebuilt-call-rn';
import ZegoUIKitSignalingPlugin from '@zegocloud/zego-uikit-signaling-plugin-rn';
// // In App.js in a new project
// import { useRoute } from '@react-navigation/native';
// import React, { useState } from 'react';
// import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Video (){
    let invitees = route.params.invitees;
    return (
        <View style={{ flex: 1 }}>
            <ZegoUIKitPrebuiltCallWithInvitation
                appID={560831595}
                appSign={
                    '546915037a2019c8ca4a1e7bc42dfe4d19c3df80b330a8b652a405dfd94d6d04'
                }
                userID={userID} // userID can be something like a phone number or the user id on your own user system.
                userName={userName}
                ringtoneConfig={{
                    incomingCallFileName: 'zego_incoming.mp3',
                    outgoingCallFileName: 'zego_outgoing.mp3',
                }}
                requireConfig={data => {
                    const config =
                        data.invitees.length > 1
                            ? ZegoInvitationType.videoCall === data.type
                                ? GROUP_VIDEO_CALL_CONFIG
                                : GROUP_VOICE_CALL_CONFIG
                            : ZegoInvitationType.videoCall === data.type
                                ? ONE_ON_ONE_VIDEO_CALL_CONFIG
                                : ONE_ON_ONE_VOICE_CALL_CONFIG;
                    return config;
                }}
                plugins={[ZegoUIKitSignalingPlugin]} // The signaling plug-in used for call invitation must be set here.
            />
        </View>
        )
}

export default Video
