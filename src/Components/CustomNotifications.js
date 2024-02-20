import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useMainContext} from '../Contexts/MainContext';

export default function CustomNotifications({
  message = 'Add Your Message Here',
  height = 50,
  width = '75%',
  backgroundColor = 'lightblue',
  borderRadius = 30,
  position = 'absolute',
  top = -170,
  left = 55,
  color = 'white',
  duration = 2000,
}) {
  const {dispatch, isNotification} = useMainContext();
  const containerStyles = {
    height: height,
    width: width,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    position: position,
    top: top,
    left: left,
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
