import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';

export default function CustomNotifications({
  message = 'teri luli kaat du ga',
  height = 50,
  width = '75%',
  backgroundColor = 'green',
  borderRadius = 30,
  position = 'absolute',
  top = -170,
  left = 55,
  color = 'white',
  setNotification = true,
  notification = false,
  duration = 2000,
}) {
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
    if (!notification) return;

    setTimeout(() => {
      setNotification(false);
    }, duration);
  }, [notification]);
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
