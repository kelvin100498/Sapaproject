import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../Color';
import STYLES from '../StyleLog';
import {ScrollView} from 'react-native-gesture-handler';
import {AuthContext} from '../../AuthProvider';

const SignupScreens = ({navigation}) => {
  
  return (
    <SafeAreaView
      style={{paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.hitam}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={{flexDirection: 'row', marginTop: 60}}>
          <Text style={{fontWeight: 'bold', fontSize: 40, color: COLORS.Putih}}>
            Sign Up
          </Text>
        </View>
        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 27, fontWeight: 'bold', color: COLORS.light}}>
            Welcome Back,
          </Text>
          <Text style={{fontSize: 14, fontWeight: '500', color: COLORS.light}}>
            Sign up with one of the following options
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <View style={STYLES.inputContainer}>
            <Icon
              name="person-outline"
              color={COLORS.light}
              size={20}
              style={STYLES.inputIcon}
            />
            <TextInput
              placeholder="Name"
              placeholderTextColor={COLORS.light}
              style={STYLES.input}
            />
          </View>
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
              onChangeText={(userPassword) => setPassword(userPassword)}
              style={STYLES.input}
              placeholderTextColor={COLORS.light}
              secureTextEntry
            />
          </View>
{/* button sinup */}
          <TouchableOpacity onPress={() => navigation.replace('MainApp')}>
            <View style={STYLES.btnPrimary}>
              <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 18}}>
                Sign Up
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
            <Text
              style={{
                marginHorizontal: 5,
                fontWeight: 'bold',
                color: COLORS.light,
              }}>
              OR
            </Text>
            <View style={STYLES.line}></View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity style={{flex: 1}}>
              <View style={STYLES.btnSecondary}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: COLORS.Putih,
                  }}>
                  Sign up with
                </Text>
                <Image
                  style={STYLES.btnImage}
                  source={require('../../Assets/images/facebook.png')}
                />
              </View>
            </TouchableOpacity>
            <View style={{width: 10}}></View>
            <TouchableOpacity style={{flex: 1}}>
              <View style={STYLES.btnSecondary}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: COLORS.Putih,
                  }}>
                  Sign up with
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
            Already have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLORS.ungu, fontWeight: 'bold'}}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignupScreens;
