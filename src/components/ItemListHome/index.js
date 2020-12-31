import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


const { width } = Dimensions.get('window');


const ItemListHome = (props) => {
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
        width: (width - scale(8)) / 2,
        margin:scale(2)
    },
    imageStyle: {
        width:'100%',
        height:scale(200),
        resizeMode:'cover',
        borderRadius: scale(7)
    }
});

ItemListHome.defaultProps = {

}
ItemListHome.propTypes = {

}


export default ItemListHome;