import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function RegisterScreen({handleNavigate}) {
  return (
    <View style={styles.container}>
      <View style={styles.headingView}>
        <Text style={styles.headingOne}>Let's Sign up.</Text>
        <Text style={styles.headingTwo}>First create your account</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.FullNameText}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="gray"
        />
        <Text style={styles.EmailText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a valid email address"
          placeholderTextColor="gray"
        />
        <Text style={styles.usernameInputText}>Username or Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter a Username"
          placeholderTextColor="gray"
        />
        <Text style={styles.passwordInputText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="gray"
          secureTextEntry
        />
        <Text style={styles.confirmPasswordText}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="********"
          placeholderTextColor="gray"
          secureTextEntry
        />
      </View>
      <View style={styles.registerButtonView}>
        <Text>Already have an account?</Text>
        <TouchableOpacity activeOpacity={0.6} onPress={handleNavigate}>
          <Text style={styles.registerButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.loginButton} activeOpacity={0.8}>
          <Text style={styles.loginButtonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    backgroundColor: 'white',
  },
  backIconView: {
    marginVertical: hp('3%'),
  },
  headingView: {
    marginVertical: hp('6%'),
    marginHorizontal: wp('4%'),
  },
  headingOne: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    color: 'black',
  },
  headingTwo: {
    fontSize: wp('7%'),
    color: 'grey',
    marginTop: hp('1.5%'),
  },
  inputContainer: {
    width: '100%',
    marginVertical: hp('5%'),
    alignItems: 'center',
  },
  FullNameText: {
    marginRight: wp('75%'),
    color: 'black',
    fontWeight: 'bold',
  },
  EmailText: {
    marginRight: wp('76%'),
    color: 'black',
    fontWeight: 'bold',
  },
  usernameInputText: {
    marginRight: wp('55%'),
    color: 'black',
    fontWeight: 'bold',
  },
  passwordInputText: {
    marginRight: wp('70%'),
    color: 'black',
    fontWeight: 'bold',
  },
  confirmPasswordText: {
    marginRight: wp('55%'),
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: hp('7%'),
    width: wp('85%'),
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: wp('4%'),
    marginBottom: hp('1%'),
    borderRadius: wp('4%'),
  },
  lineContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginBottom: hp('2%'),
  },
  line: {
    borderBottomWidth: wp('0.1%'),
    width: wp('40%'),
    borderColor: 'grey',
  },
  lineText: {
    color: 'grey',
  },
  iconContainer: {
    alignItems: 'center',
  },
  innerIconContainer: {
    borderColor: 'grey',
    borderWidth: wp('0.2%'),
    borderRadius: wp('1%'),
    width: wp('10%'),
  },

  registerButtonView: {
    marginTop: hp('1%'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: wp('1%'),
  },
  registerButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },

  buttonView: {
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: hp('2%'),
    width: wp('80%'),
    borderRadius: wp('4%'),
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
