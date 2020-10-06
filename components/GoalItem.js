import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'

const GoalInput = ({item,deleteGoal}) => {
  return (
    <TouchableOpacity onPress= {() => deleteGoal(item.id)}>
    <View key={item.id} style={styles.listItem}>
      <Text >{item.value}</Text>
    </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderWidth: 1
  }
})
export default GoalInput
