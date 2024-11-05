import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
} from 'react-native';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {
  ZegoCallInvitationDialog, ZegoUIKitPrebuiltCallWaitingScreen, ZegoUIKitPrebuiltCallInCallScreen
} from '@zegocloud/zego-uikit-prebuilt-call-rn';

//screens
import LanguageSelect from './screens/LanguageSelect';
import Homepage from './screens/Homepage';
import EmailPassAuth from './screens/EmailPassAuth';
import SignUp from './screens/SignUp';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Chat from './screens/Chat';
import Video from './screens/Video'
import OTPScreen from './screens/OTPScreen'

// export type RootStackParamList = {
//   Chat: { data: any, id: string }
//   Video: { userId: string, id: string }
//   Users: undefined;
//   Home: undefined;
//   Splash: undefined;
//   LanguageSelect: undefined;
//   SignUp: undefined;
//   EmailPassAuth: undefined;
//   Homepage: undefined
// };

const Stack = createNativeStackNavigator()

function App() {
  useEffect(() => {
  }, []);
  return (
    <NavigationContainer>
      <ZegoCallInvitationDialog />
      <Stack.Navigator >

        <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'Chat'}
          component={Chat}
          options={{ headerShown: true }}
        />

        {/* <Stack.Screen
          name={'Video'}
          component={Video}
          options={{ headerShown: false }}
        /> */}

        <Stack.Screen
          name={'Home'}
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='LanguageSelect'
          component={LanguageSelect}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='SignUp'
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Homepage'
          component={Homepage}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='EmailPassAuth'
          component={EmailPassAuth}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name={'OTPScreen'}
          component={OTPScreen}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          options={{ headerShown: false }}
          // DO NOT change the name 
          name="ZegoUIKitPrebuiltCallWaitingScreen"
          component={ZegoUIKitPrebuiltCallWaitingScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          // DO NOT change the name
          name="ZegoUIKitPrebuiltCallInCallScreen"
          component={ZegoUIKitPrebuiltCallInCallScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Greyish white background color
    padding: 20,
  },
  top: {
    alignItems: 'center',
    marginTop: 20,
  },
  topText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black', // Text color set to black
  },
  middle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightgrey'
  },
  middleText: {
    fontSize: 24,
    color: 'black', // Text color set to black
    marginTop: 40,
    marginBottom: 40,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  bottomLeft: {
    flex: 1,
  },
  bottomRight: {
    flex: 1,
    alignItems: 'flex-end',
  },
  bottomText: {
    fontSize: 16,
    color: 'black', // Text color set to black
  },
  sosBox: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sosText: {
    color: 'black', // Text color set to black
    fontWeight: 'bold',
  },
});

export default App;