import React from 'react';
import {LoginScreen} from '../../Screens';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

GoogleSignin.configure({
  webClientId:
    '1027622939531-cnsb2srhp14e3g3pa4cm0mhg5j7euo1e.apps.googleusercontent.com',
});

export default function LoginContainer({navigation}) {
  const handleNavigateBack = () => {
    navigation.goBack();
  };
  const handleNavigatetoRegister = () => {
    navigation.navigate('Register');
  };

  async function handleSignInWithGoogle() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {idToken} = await GoogleSignin.signIn();
      console.log(idToken);

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(statusCodes.SIGN_IN_CANCELLED);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(statusCodes.IN_PROGRESS);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE);
      } else {
        // some other error happened
        console.log(error.message);
      }
    }
  }

  // async function handleSignInWithGoogle() {
  //   try {
  //     // Check if your device supports Google Play
  //     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

  //     // Get the users ID token
  //     const {idToken} = await GoogleSignin.signIn({
  //       forceCodeForRefreshToken: true,
  //     });
  //     console.log(idToken);

  //     // Create a Google credential with the token
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     // Sign-in the user with the credential
  //     const userCredential = await auth().signInWithCredential(
  //       googleCredential,
  //     );

  //     // Check if the user exists in the authentication database
  //     if (!userCredential.additionalUserInfo.isNewUser) {
  //       // User exists, continue with the sign-in process
  //       console.log('Signed in with Google!');
  //       navigation.navigate('Home');
  //     } else {
  //       // User does not exist, display an error message
  //       Alert.alert('Sign-in Failed', 'User not found. Please register.');
  //       // Sign out the user from Google
  //       await GoogleSignin.signOut();
  //     }
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //       console.log(statusCodes.SIGN_IN_CANCELLED);
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //       console.log(statusCodes.IN_PROGRESS);
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //       console.log(statusCodes.PLAY_SERVICES_NOT_AVAILABLE);
  //     } else {
  //       // some other error happened
  //       console.log(error.message);
  //     }
  //   }
  // }

  return (
    <LoginScreen
      handleNavigateBack={handleNavigateBack}
      handleNavigatetoRegister={handleNavigatetoRegister}
      handleSignInWithGoogle={handleSignInWithGoogle}
      navigation={navigation}
    />
  );
}
