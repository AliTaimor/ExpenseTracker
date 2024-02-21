import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useMainContext} from '../Contexts/MainContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function CustomNotifications({
  message = 'Add Your Message Here',
  width = wp('100%'),
  backgroundColor = 'lightblue',
  borderBottomRadius = wp('1%'),
  color = 'white',
  duration = 2000,
}) {
  const {dispatch, isNotification} = useMainContext();
  const containerStyles = {
    width: width,
    backgroundColor: backgroundColor,
    borderBottomRadius: borderBottomRadius,
  };
  const messageStyle = {
    color: color,
  };

  useEffect(() => {
    if (!isNotification) return;

    setTimeout(() => {
      dispatch({type: 'notification', payload: false});
    }, duration);
  }, [isNotification]);
  return (
    <View style={[styles.container, containerStyles]}>
      <Text style={messageStyle}>{message}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
