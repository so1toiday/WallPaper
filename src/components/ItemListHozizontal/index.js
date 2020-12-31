import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const { width,height } = Dimensions.get('window');

const ItemListHozizontal = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Image source={{ uri: props.imageUri }} style={[styles.imageStyle]} />
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width:width,
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
    },
    imageStyle: {
        width:'70%',
        height:'80%',
        resizeMode:'cover',
        borderRadius: scale(7)
    }
});

ItemListHozizontal.defaultProps = {

}
ItemListHozizontal.propTypes = {

}


export default ItemListHozizontal;