import React, { useState } from 'react'
import styles from './src/component/Styles'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
//import { TodoItems } from './src/component/TodoItems'

const App = () => {

  interface Todo {
    id: number;
    title: string;
    isDone: boolean;
  }
  interface TodoItemsProps {
    todo: Todo;
  }
  
    const [Todos,TodoItem]= useState<Todo[]>([
    {
      id:1,
      title: 'this is sample project',
      isDone: false,
    },
    {
      id:2,
      title: 'Marriage function',
      isDone: true,
    },
    
  
  
    ])

   

  const TodoItems : React.FC<TodoItemsProps> = ({ todo }) => {

    return(

    <View style={styles.itemView}>
      {
        todo.isDone ? (
        <View style={styles.ItemLeft}>
          <Image style={styles.checkImage} source={require('./src/assets/icons/checked.png')}/>

          <Text style={styles.ItemTitle}>{todo.title}</Text>
        </View>
        ):(
          <TouchableOpacity style={styles.ItemLeft}>
          <View style={styles.CircleView}></View>
          <Text style={styles.ItemTitle}>{todo.title}</Text>
        </TouchableOpacity>

        ) }
        <View style={styles.rightBox}>
          {todo.isDone && (
          <TouchableOpacity>
            <Image style={styles.undoImage} source={require('./src/assets/icons/undo.png')}/>
          </TouchableOpacity>
          )}
     
    <TouchableOpacity>
      <Image style={styles.deleteIcon} source={require('./src/assets/icons/delete.png')}/> 
    </TouchableOpacity>
    </View>
   </View>
    )
  }

 

    
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.container}>
      <Text style={styles.text}>ToDo App</Text>
        <View style={styles.sectionView}>
         <Text style={styles.sectionTitle}>ToDo List</Text>
         {Todos.filter((item)=>!item.isDone).map((todo)=>(<TodoItems key={todo.id}  todo={todo} />))}
        
      
         <View style={styles.addView}>
          <View style={styles.addLeft}>
            <Text style={styles.TypeText}>+</Text>
            <TextInput style={[styles.TypeText, {marginLeft:15}]} placeholder='type new todo...'/>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>Add New</Text>
          </TouchableOpacity>
         </View>
        </View>
        <View style={styles.sectionView}>
        <Text style={styles.sectionTitle}>Completed ToDo</Text>
        {Todos.filter((item)=>item.isDone).map((todo)=>(<TodoItems key={todo.id}  todo={todo} />))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App