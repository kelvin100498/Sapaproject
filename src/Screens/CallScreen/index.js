import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../Color';

const CallScreen = () => {
  return (
    <SafeAreaView style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.primary}}>
        <View style={{flexDirection: 'row', marginTop: 10 }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.hitam}}>
            Ini Call Screen
          </Text>
        </View>
    </SafeAreaView>
    
  );
};

export default CallScreen;

const styles = StyleSheet.create({});
