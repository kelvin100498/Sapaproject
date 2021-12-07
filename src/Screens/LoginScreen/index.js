import React from 'react';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import {SafeAreaView, View, Text, TextInput,TouchableOpacity, Image,StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../Color';
import STYLES from '../StyleLog';


const LoginScreens = ({navigation}) => {
    return (
        <SafeAreaView
          style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.hitam}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'row', marginTop: 70}}>
            <StatusBar translucent backgroundColor ="transparent"/>
              <Text style={{fontWeight: 'bold', fontSize: 40, color: COLORS.Putih}}>
                Sign In
              </Text>
            </View>
    
            <View style={{marginTop: 40}}>
            <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.light}}>
              Welcome Back,
            </Text>
              <Text style={{fontSize: 14, fontWeight: '500', color: COLORS.light}}>
              Sign in with one of the following options.
              </Text>
            </View>
    
            <View style={{marginTop: 20}}>
              <View style={STYLES.inputContainer}>
                <Icon
                  name="mail-outline"
                  color={COLORS.light}
                  size={20}
                  style={STYLES.inputIcon}
                />
                 <TextInput
                  placeholder="Email/Phone Number"
                  style={STYLES.input}
                  placeholderTextColor={COLORS.light}
                />
              </View>
              <View style={STYLES.inputContainer}>
                <Icon
                  name="lock-outline"
                  color={COLORS.light}
                  size={20}
                  style={STYLES.inputIcon}
                />
                <TextInput
                  placeholder="Password"
                  style={STYLES.input}
                  placeholderTextColor={COLORS.light}
                  secureTextEntry
                />
              </View>
              <TouchableOpacity onPress={() => navigation.replace('MainApp')}>
              <View style={STYLES.btnPrimary}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                  Sign In
                </Text>
              </View>
              </TouchableOpacity>
              <View
                style={{
                  marginVertical: 20,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={STYLES.line}></View>
                <Text style={{marginHorizontal: 5,color: COLORS.light, fontWeight: 'bold'}}>OR</Text>
                <View style={STYLES.line}></View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity style ={{flex : 1}}>
                <View style={STYLES.btnSecondary}>
                  <Text style={{fontWeight: 'bold', fontSize: 16, color: COLORS.Putih}}>
                    Sign in with
                  </Text>
                  <Image
                    style={STYLES.btnImage}
                    source={require('../../Assets/images/facebook.png')}
                  />
                </View>
                </TouchableOpacity>
                <View style={{width: 10}}></View>
                <TouchableOpacity style ={{flex : 1}}>
                <View style={STYLES.btnSecondary}>
                  <Text style={{fontWeight: 'bold', fontSize: 16, color: COLORS.Putih}}>
                    Sign in with
                  </Text>
                  <Image
                    style={STYLES.btnImage}
                    source={require('../../Assets/images/google.png')}
                  />
                </View>
                </TouchableOpacity>
              </View>
            </View>
    
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginTop: 40,
                marginBottom: 20,
              }}>
              <Text style={{color: COLORS.light, fontWeight: 'bold'}}>
                Don`t have an account ?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignupScreen')}>
                <Text style={{color: COLORS.ungu, fontWeight: 'bold'}}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    };
export default LoginScreens
