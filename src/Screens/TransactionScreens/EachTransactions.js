import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {DeleteIcon} from '../../Assets/Icons';
import EditIcon from '../../Assets/Icons/EditIcon';
import {formattedDate} from '../../Utils/helpers';
import RightArrowIcon from '../../Assets/Icons/RightArrowIcon';

function EachTransactions({transaction, key}) {
  const {amount, description, time, type} = transaction;

  const date = formattedDate(time).slice(0, 2);

  return (
    <>
      {type === 'income' ? (
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.container} key={key}>
            <View style={styles.dateDescriptionContainer}>
              <View style={styles.date}>
                <Text style={styles.dateText}>{date}</Text>
              </View>
              <View>
                <Text style={styles.incomeAmountText}>{amount}</Text>
                <ScrollView>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={styles.incomeDescriptionText}>
                    {description}
                  </Text>
                </ScrollView>
              </View>
            </View>

            <View style={styles.rightArrowIconView}>
              {/* <DeleteIcon height={hp('8%')} width={wp('6%')} color={'red'} />
              <EditIcon height={hp('8%')} width={wp('6%')} color={'black'} /> */}
              <RightArrowIcon
                height={hp('8%')}
                width={wp('6%')}
                color={'black'}
              />
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.container} key={key}>
            <View style={styles.dateDescriptionContainer}>
              <View style={styles.date}>
                <Text style={styles.dateText}>{date}</Text>
              </View>
              <View>
                <Text style={styles.expenseAmountText}>{amount}</Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.expenseDescriptionText}>
                  {description}
                </Text>
              </View>
            </View>

            <View style={styles.rightArrowIconView}>
              {/* <DeleteIcon height={hp('8%')} width={wp('6%')} color={'red'} />
            <EditIcon height={hp('8%')} width={wp('6%')} color={'black'} /> */}
              <RightArrowIcon
                height={hp('8%')}
                width={wp('6%')}
                color={'black'}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
}

export default EachTransactions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffff',
    marginBottom: '3%',
    height: hp('10%'),
    width: wp('100%'),
    paddingHorizontal: wp('6%'),
  },
  dateDescriptionContainer: {
    flexDirection: 'row',
    gap: wp('6%'),
  },
  date: {
    backgroundColor: 'black',
    borderRadius: 24,
    height: hp('6%'),
    width: wp('12%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    color: '#ffff',
  },
  rightArrowIconView: {
    flexDirection: 'row',
    gap: 10,
  },
  incomeDescriptionText: {
    fontSize: 14,
    color: 'green',
    width: wp('40%'),
  },
  incomeAmountText: {
    fontSize: 14,
    color: 'green',
    width: wp('40%'),
  },
  expenseDescriptionText: {
    fontSize: 14,
    color: 'red',
    width: wp('40%'),
  },
  expenseAmountText: {
    fontSize: 14,
    color: 'red',
    width: wp('40%'),
  },
});
