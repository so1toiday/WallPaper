import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, Dimensions, TouchableOpacity, Alert, PermissionsAndroid } from 'react-native';
import { connect } from 'react-redux';
import { ItemListHozizontal,HeaderInListHozi } from '@components';
import { useNavigation, useRoute } from '@react-navigation/native';
import { verticalScale, scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';

import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';


const { width } = Dimensions.get('window');
const ListPicktureHozizontal = (props) => {
  const navigation = useNavigation();
  const route = useRoute();
  const [index, setIndex] = useState(0);
  const navigateToDetails = (item) => {
    navigation.navigate('Details', { data: item })
  }

  const _onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    let index = changed[0].index || 0;
    setIndex(index);
    console.log(props.data[index].user.name);
  }, []);

  const handleDownload = async () => {
    if (Platform.OS === 'android') {
      const granted = await getPermissionAndroid();
      if (!granted) {
        return;
      }
    }

    RNFetchBlob.config({
      fileCache: true,
      appendExt: 'png',
    })
      .fetch('GET', props.data[index].urls.small)
      .then(res => {
        CameraRoll.save(res.data, 'photo')
          .then(res => {
            console.log(res)
            Alert.alert('Đã lưu vào thư viện')
          })
          .catch(err => console.log(err))
      }).catch(error => console.log(error));
  };


  const getPermissionAndroid = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Image Download Permission',
          message: 'Your permission is required to save images to your device',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      }
      Alert.alert(
        'Save remote Image',
        'Grant Me Permission to save Image',
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    } catch (err) {
      Alert.alert(
        'Save remote Image',
        'Failed to save Image: ' + err.message,
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
        { cancelable: false },
      );
    }
  };


  return (
    <View style={styles.container}>
      <HeaderInListHozi title={props.data[index].user.name} onPressBack={navigation.goBack} />
      <FlatList
        style={styles.flatList}
        data={props.data}
        renderItem={({ item }) => (
          <ItemListHozizontal
            imageUri={item.urls.regular}
            onPress={() => {
              navigateToDetails(item);
            }}
          />)}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        horizontal
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index
        })}
        initialScrollIndex={route.params.index}
        onViewableItemsChanged={_onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50
        }}
      />
      <View style={styles.rowOption}>
        <TouchableOpacity onPress={()=>{
         navigateToDetails(props.data[index])
        }}>
          <Icon2 name="resize-full-screen" size={verticalScale(40)} style={styles.heart} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          handleDownload();
        }}>
          <Icon name="download" size={verticalScale(40)} style={styles.download} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    margin: 0,
    flex: 1
  },
  rowOption: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    height: verticalScale(100),
  },
  heart: {
    marginRight: scale(30)
  },
  download: {
    marginLeft: scale(30)
  }
});
const mapDispatchToProps = (dispatch) => ({
})
const mapStateToProps = (state) => ({
  data: state.home.data
})
export default connect(mapStateToProps, mapDispatchToProps)(ListPicktureHozizontal);