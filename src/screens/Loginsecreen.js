import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  SafeAreaView,
} from 'react-native';
import styles from './loginStyles';
<<<<<<< HEAD
import {connect} from 'react-redux';
import {customerLogin} from '../reduxThunk/Action';
=======

>>>>>>> eca87f322b93767119684e4ba0e1ba24f6c6b538
// You can use your custom background image
import BackgroundImage from '../assets/IMG_BACKGROUND.jpg';

const LoginScreen = ({getCustomerDetails, props, navigation}) => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const handleAddDetail = () => {
    getCustomerDetails(userId, password);
    setUserId('');
    setPassword('');
    navigation.navigate('BottomTab'); // Navigate to the home screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={BackgroundImage} />
      <View style={styles.bottomView}>
        <View style={{marginBottom: 40}}>
          <Text style={styles.loginText}>User Verification</Text>
          <Text style={styles.loginText1}>Enter the register User Id </Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={e => setUserId(e)}
              label="User"
              placeholder="User Id"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={e => setPassword(e)}
              label="Password"
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize="none"
              textContentType="password"
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
<<<<<<< HEAD
            onPress={handleAddDetail}>
=======
            onPress={() => navigation.navigate('BottomTab')}>
>>>>>>> eca87f322b93767119684e4ba0e1ba24f6c6b538
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.loading,
    details: state.login.details,
    error: state.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCustomerDetails: (userId, password) =>
      dispatch(customerLogin(userId, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
