import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontSize } from '@common';
import { verticalScale, scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
const HeaderInListHozi = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPressBack}>
                <Icon name="arrow-back" size={verticalScale(28)} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: verticalScale(5),
        paddingHorizontal: scale(3)
    },
    text: {
        fontSize: FontSize.fontSize18,
        fontWeight: 'bold',
        marginRight: scale(4)
    }
});
export default HeaderInListHozi;