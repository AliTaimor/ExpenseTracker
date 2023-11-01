import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CustomButton from '../Components/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import {CustomButtonStyling} from '../Assets/Styles';

import {
  ExpenseIcon,
  IncomeIcon,
  ReportIcon,
  Transaction,
} from '../Assets/Icons';
import CustomContent from '../Components/CustomContent';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function HomeScreen({
  handleNavigate,
  handleNavigateReport,
  add,
  addTwo,
}) {
  return (
    <View style={styles.container}>
      {/* logo view */}
      <View style={styles.logoView}>
        <Image
          source={require('../Assets/Images/Expenselogo.png')}
          style={styles.logo}
        />
      </View>
      {/* custom content componet */}
      {/* imported the state add prop and exported it to the customContent component  */}
      <CustomContent add={add} addTwo={addTwo} />
      <View style={styles.innerContainer}>
        <View style={styles.columnButton}>
          <LinearGradient
            style={CustomButtonStyling.buttonCreate}
            colors={['#008200', '#F40009']}
            locations={[0, 3]}
            start={{x: 0.2, y: 0}}
            end={{x: 1, y: 0}}>
            <CustomButton
              buttonLabel="Add Income/Expense"
              onPress={handleNavigate}
              buttonWidth={wp('86%')}
              buttonHeight={hp('15%')}
              labelStyle={{fontWeight: 'bold', color: 'white'}}
              addIcon={
                <IncomeIcon
                  height={hp('10%')}
                  width={wp('10%')}
                  color="#043927"
                />
              }
              addIconTwo={
                <ExpenseIcon
                  height={hp('10%')}
                  width={wp('10%')}
                  color="#58111A"
                />
              }
            />
          </LinearGradient>
        </View>

        <View style={styles.rowButtons}>
          <CustomButton
            buttonLabel="Report"
            buttonColor="#557B97"
            buttonWidth={wp('86%')}
            buttonHeight={hp('15%')}
            buttonMargin={hp('2%')}
            onPress={handleNavigateReport}
            addIcon={
              <ReportIcon
                height={hp('10%')}
                width={wp('10%')}
                color="#CFF6FF"
              />
            }
            labelStyle={{fontWeight: 'bold', color: 'white'}}
          />
          <CustomButton
            buttonLabel="All Transactions"
            buttonColor="#00C7FD"
            buttonWidth={wp('86%')}
            buttonHeight={hp('15%')}
            addIcon={
              <Transaction
                height={hp('10%')}
                width={wp('10%')}
                color="#0090C4"
              />
            }
            labelStyle={{fontWeight: 'bold', color: 'white'}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: wp('40%'),
    height: hp('20%'),
  },
  logoView: {
    alignItems: 'center',
    marginTop: '10%',
  },
  innerContainer: {
    flex: 2,

    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnButton: {
    marginBottom: hp('2%'),
    alignItems: 'center',
  },
  rowButtons: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default HomeScreen;
