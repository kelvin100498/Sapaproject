import React, { useEffect } from 'react'
import { StyleSheet, ImageBackground, StatusBar} from 'react-native'
import { SplashBackground } from '../../Assets/images';

const Splash = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('LoginScreen');
        }, 2000)
    }, [navigation]);

    return (
       <ImageBackground source={SplashBackground} style={styles.background}>
           <StatusBar translucent backgroundColor ="transparent"/>
       </ImageBackground>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

})
