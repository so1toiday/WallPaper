import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, ImageBackground } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { HeaderInDetails } from '@components';
import wallpaper,{TYPE} from 'react-native-manage-wallpaper';


const DetailsPickture = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const setWallpaper=()=>{
    wallpaper.setWallpaper({uri:route.params.data.urls.full},()=>{
      Alert.alert("Đã đặt làm hình ")
    },TYPE.HOME)
  }
  return (
    <ImageBackground style={styles.container} source={{uri:route.params.data.urls.full}} >
      <HeaderInDetails onPress={setWallpaper} onPressBack={navigation.goBack} />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  }
});
const mapDispatchToProps = (dispatch) => ({})
const mapStateToProps = (state) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(DetailsPickture);