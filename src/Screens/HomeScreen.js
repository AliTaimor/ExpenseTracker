import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CustomButton from '../Components/CustomButton';

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

function HomeScreen({handleNavigate, handleNavigateTransactions}) {
  return (
    <View style={styles.container}>
      {/* logo view */}
      <View style={styles.logoView}>
        <Image
          source={require('../Assets/Images/Expenselogo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.innerContainer}>
        <View style={styles.columnButton}>
          <CustomButton
            buttonLabel="Add Income/Expense"
            onPress={handleNavigate}
            buttonWidth={wp('86%')}
            buttonHeight={hp('13%')}
            labelStyle={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
            }}
            backgroundImageSource={require('../Assets/Images/incomeExpense.png')}
            borderRadius={20}
            overlayColor="rgba(0, 0, 0, 0.3)"
            addIcon={
              <IncomeIcon
                height={hp('8%')}
                width={wp('10%')}
                color="lightgreen"
              />
            }
            addIconTwo={
              <ExpenseIcon height={hp('8%')} width={wp('10%')} color="red" />
            }
          />
        </View>

        <View style={styles.rowButtons}>
          <CustomButton
            buttonLabel="Report"
            // buttonColor="#557B97"
            buttonWidth={wp('86%')}
            buttonHeight={hp('13%')}
            buttonMargin={hp('2%')}
            backgroundImageSource={require('../Assets/Images/report.png')}
            borderRadius={20}
            overlayColor="rgba(0, 0, 0, 0.3)"
            addIcon={
              <ReportIcon height={hp('8%')} width={wp('10%')} color="#CFF6FF" />
            }
            labelStyle={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
            }}
          />
          <CustomButton
            buttonLabel="All Transactions"
            // buttonColor="#00C7FD"
            buttonWidth={wp('86%')}
            buttonHeight={hp('13%')}
            onPress={handleNavigateTransactions}
            backgroundImageSource={require('../Assets/Images/transactions.png')}
            borderRadius={20}
            overlayColor="rgba(0, 0, 0, 0.3)"
            addIcon={
              <Transaction
                height={hp('8%')}
                width={wp('10%')}
                color="#0090C4"
              />
            }
            labelStyle={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'white',
              textAlign: 'center',
            }}
          />
        </View>
      </View>
      {/* custom content componet */}
      {/* imported the state add prop and exported it to the customContent component  */}
      <View style={styles.customContentView}>
        <CustomContent />
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
    width: wp('45%'),
    height: hp('22%'),
  },
  logoView: {
    alignItems: 'center',
    marginTop: '10%',
  },
  innerContainer: {
    flex: 2,
    marginTop: '20%',
    backgroundColor: 'black',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  columnButton: {
    marginTop: hp('5%'),
    marginBottom: hp('2%'),
    alignItems: 'center',
  },
  rowButtons: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  customContentView: {
    position: 'absolute',
    top: 240,
    left: 38,
  },
});

export default HomeScreen;
