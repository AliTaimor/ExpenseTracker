import {View, Text, StyleSheet} from 'react-native';

function Report({add, addTwo}) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Detailed Reports</Text>
      <View>
        <View style={styles.innerContainer}>
          <Text style={styles.textContent}>Description:</Text>
          <Text style={styles.textContent}>Your Income: {add}.Rs</Text>
          <Text style={styles.textContent}>Your Expense: {addTwo}.Rs</Text>
          <Text style={styles.textContent}>Your remaining balance:</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    textAlign: 'center',
    marginVertical: 30,
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  innerContainer: {
    borderWidth: 1,
    alignItems: 'center',
    marginVertical: 50,
    marginHorizontal: 50,
    paddingVertical: 50,
  },
  textContent: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'black',
  },
});
export default Report;
