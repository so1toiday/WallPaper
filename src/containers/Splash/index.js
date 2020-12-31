import React, { useEffect } from 'react';
import { Text, StyleSheet, ImageBackground, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Images } from '@common';
import { FontSize } from '@common';
import {Colors} from '@common';


const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = ()=>setTimeout(() => {
      navigation.navigate("Home");
    }, 3000)
    timer();
    return clearTimeout(timer);
  })
  return (
    <ImageBackground style={styles.container} source={Images.background}>
      <Text style={styles.txtTitle}>Hình Nền Đẹp</Text>
      <ActivityIndicator color={Colors.White} size={50} style={styles.activityIndicator} />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  txtTitle: {
    fontSize: FontSize.fontSize20,
    color: 'white',
    fontWeight: 'bold',
  },
  activityIndicator: {
    marginTop: 30
  }
});
export default Splash;