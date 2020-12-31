import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontSize } from '@common';
import { verticalScale, scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
const HeaderInDetails = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPressBack}>
                <Icon name="arrow-back" size={verticalScale(28)} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <Text style={styles.text}>Đặt Làm Hình Nền</Text>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#80999999',
        alignItems: 'center',
        paddingVertical: verticalScale(5),
        paddingHorizontal: scale(3)
    },
    text: {
        fontSize: FontSize.fontSize18,
        fontWeight: 'bold',
        color: 'white',
        alignSelf: 'flex-end',
        marginRight: scale(4)
    },
    button: {
        flex: 1,
    }
});
export default HeaderInDetails;