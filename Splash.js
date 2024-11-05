
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Flex, Image, View, Text, Icon } from '@aws-amplify/ui-react';
import { Svg, Circle } from 'react-native-svg';

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

// type SplashProps = NativeStackScreenProps<RootStackParamList, 'Splash'>

const Splash = () => {

  const navigation = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      checkLogin();
    }, 2000);
  }, []);
  const checkLogin = async () => {
    const id = await AsyncStorage.getItem('USERID');
    if (id !== null) {
      navigation.replace('Homepage');
    } else {
      navigation.replace('LanguageSelect');
    }
  };
  return (
    <View style={styles.welcomescreen}>
      <ImageBackground style={styles.blueballoon} source={require("../assets/images/SplashScreenImgs/blue_balloon.png")} />
      <View style={styles.group27}>
        <View style={styles.frame8}>
          <ImageBackground style={styles.screenshot_20230928_132016removebgpreview1} source={require("../assets/images/SplashScreenImgs/Screenshot_2023-09-28_132016-removebg-preview_2.png")} />
          <ImageBackground style={styles.screenshot_20230928_132010removebgpreview1} source={require("../assets/images/SplashScreenImgs/Screenshot_2023-09-28_132010-removebg-preview_1.png")} />
        </View>
      </View>
      <Text style={styles.nAMASKAR}>
        {`NAMASKAR \n`}
      </Text>
      <Text style={styles.hARTARAFPARAAPKASWAGATHAI}>
        {`HARTARAF \nPAR AAPKA SWAGAT HAI`}
      </Text>
    </View>
  )

};

export default Splash;
const styles = StyleSheet.create({
  welcomescreen: {
    flex:1,
    flexShrink: 0,
    // height: 800,
    // width: 360,
    alignSelf: 'center',
    backgroundColor: "rgba(255, 255, 255, 1)",
    alignItems: "flex-start",
    rowGap: 0
  },
  blueballoon: {
    flex:1,
    position: "absolute",
    flexShrink: 0,
    top: 230,
    alignSelf: "center",
    // left: -25,
    width: 409,
    height: 409
  },
  group27: {
    position: "absolute",
    flexShrink: 0,
    top: 284,
    height: 263,
    alignSelf: "center",
    // left: 13,
    width: 309
  },
  frame8: {
    position: "absolute",
    flexShrink: 0,
    height: 263,
    width: 309,
    alignItems: "flex-start",
    rowGap: 0
  },
  screenshot_20230928_132016removebgpreview1: {
    position: "absolute",
    flexShrink: 0,
    top: 16,
    left: 146,
    width: 150,
    height: 247
  },
  screenshot_20230928_132010removebgpreview1: {
    position: "absolute",
    flexShrink: 0,
    left: -1,
    width: 192,
    height: 263
  },
  nAMASKAR: {
    position: "absolute",
    flexShrink: 0,
    top: 610,
    alignSelf: "center",
    // left: 24,
    width: 289,
    height: 105,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Rozha One",
    fontSize: 36,
    fontWeight: "400",
    letterSpacing: 0
  },
  hARTARAFPARAAPKASWAGATHAI: {
    position: "absolute",
    flexShrink: 0,
    top: 671,
    alignSelf:"center",
    // left: 64,
    width: 231,
    height: 50,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontFamily: "Coda Caption",
    fontSize: 16,
    fontWeight: "800",
    letterSpacing: 0
  }
})