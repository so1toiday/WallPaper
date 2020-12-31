import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView,Alert } from 'react-native';
import Navigation from "@navigation";
import {connect} from "react-redux";
import react from 'react';

const Router = (props) => {
    react.useEffect(() => {
        if(!props.connectNetworks){
            Alert.alert("Vui lòng kiểm tra kết nối Internet");
        }
    },[props.connectNetworks])
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={styles.container}>
                <Navigation />
            </SafeAreaView>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    }
});
const mapDispatchToProps = (dispatch) => ({})
const mapStateToProps = (state) => ({
    connectNetworks: state.network.isConnected,
})
export default connect(mapStateToProps, mapDispatchToProps)(Router);