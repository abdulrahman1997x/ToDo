import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Modal } from 'react-native'

const GoalInput = ({ addGoal, visable, cancel }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (text) => {
    setEnteredGoal(text)
  }

  const onAddGoal = () => {
    addGoal(enteredGoal);
    setEnteredGoal('')
  }

  return (
    <Modal visible={visable} animationType="slide">
      <View style={styles.inputContainer} >
        <TextInput value={enteredGoal} onChangeText={goalInputHandler} placeholder=" Course Goal" style={styles.input} >
        </TextInput>
        <View style={styles.btn}>
          
          <Button title="ADD" onPress={onAddGoal} />
          
          <View style={styles.topMargin}>
          <Button title="cancle" color="red" onPress={cancel} />
          </View>

        </View>

      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    margin: 10
  },
  btn: {
    width: '40%'
  },
  topMargin: {
    marginTop: 10
  }
})
