import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../Color';

const Home = () => {
  return (
    
    <SafeAreaView style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.ungu}}>
        <View style={{flexDirection: 'row', marginTop: 10 }}>
          <Text style={{fontWeight: 'bold', fontSize: 20, color: COLORS.hitam}}>
            Ini Home
          </Text>
        </View>
    </SafeAreaView>
    
  );
};

export default Home;

const styles = StyleSheet.create({});
