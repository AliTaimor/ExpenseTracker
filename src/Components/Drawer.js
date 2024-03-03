import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function Drawer({
  isOpen,
  onClose,
  handleNavigateHome,
  handleNavigateCalendar,
  setIsDrawerOpen,
  handleLogout,
}) {
  return (
    <Modal
      animationIn="slideInLeft"
      animationOut="slideOutLeft"
      transparent={true}
      visible={isOpen}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={onClose}
        />
        <View style={styles.drawerContainer}>
          {/* Drawer content */}
          <View style={styles.headingProfileContainer}>
            <View>
              <Text style={styles.heading}>Expense Tracker </Text>
            </View>

            <View>
              <Image
                source={require('../Assets/Images/Expenselogo.png')}
                style={styles.profilePic}
              />
            </View>
          </View>

          <View style={styles.line} />

          <View>
            <TouchableOpacity
              onPress={() => {
                handleNavigateHome();
                setIsDrawerOpen(false);
              }}>
              <Text style={styles.text}>Home</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => {
                handleNavigateCalendar();
                setIsDrawerOpen(false);
              }}>
              <Text style={styles.text}>Calendar</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity onPress={handleLogout}>
              <Text>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  drawerContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: '75%',
    backgroundColor: 'black',
    gap: 10,
    padding: '5%',
  },
  headingProfileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  heading: {
    fontSize: 20,
  },
  subHeading: {
    fontSize: 16,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    marginVertical: 10,
    width: wp('70%'),
  },
  text: {
    fontSize: 16,
  },
});

export default Drawer;
