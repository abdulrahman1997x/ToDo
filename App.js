import React, { useState } from 'react'
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput'

const App = () => {
  const [goalslist, setGoalslist] = useState([]);
  const [addModal, setAddModal] = useState(false)


  const addGoal = (enteredGoal) => {
    setGoalslist((prev) => [...prev, { id: Math.random().toString(), value: enteredGoal }])

    setAddModal(false)
  }

  const deleteGoal = (id) => {
    setGoalslist(prev => prev.filter(e => e.id != id))
  }
  const cancel = () =>{
    setAddModal(false)

  }

  return (
    <View style={styles.screen}>
      <Button title= "Add New Goal" onPress= { () => setAddModal(true)}/>

      <GoalInput cancel={cancel} visable = {addModal} addGoal={addGoal} />

      <FlatList
        data={goalslist}
        renderItem={({ item }) => <GoalItem deleteGoal={deleteGoal} item={item} />}
      />

    </View>
  )
}


const styles = StyleSheet.create({
  screen: {
    padding: 40
  },



})

export default App
