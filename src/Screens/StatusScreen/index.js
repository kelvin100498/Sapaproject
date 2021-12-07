import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../Color';

const StatusScreen = () => {
    return (
        <SafeAreaView style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.secondary}}>
        <View style={{flexDirection: 'row', marginTop: 10 }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.hitam}}>
            Ini Status
          </Text>
        </View>
    </SafeAreaView>
    
    )
}

export default StatusScreen

const styles = StyleSheet.create({})
