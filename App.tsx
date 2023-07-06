import React, { useState } from 'react'
import styles from './src/component/Styles'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
//import { TodoItems } from './src/component/TodoItems'

const App = () => {

  interface Todo {
    id: number;
    title?: string;
    isDone: boolean;
  }
  interface TodoItemsProps {
    todo: Todo;
  }

  const [inputText,setInputText]=useState<string>()
  
    const [todos,setTodos]= useState<Todo[]>([
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

  

   const addTodolist=() =>{
    if(inputText){
    setTodos([
      ...todos,
      {
        id: Math.random() * 1000,
        title: inputText,
        isDone: false,
      },
    ])};
     setInputText("");
    
  };


  const MarkAsdone = (todo: Todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            isDone: true,
          };
        }
        return item; 
      }
      )
    );
  };


  const MarkAsundo = (todo: Todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            isDone: false,
          };
        }
        return item; 
      }
      )
    );
  };


  const removeItem= (todo: Todo)=>{
    setTodos(todos.filter((e)=>(e.id ! == todo.id)))
  }

   

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
          <TouchableOpacity onPress={()=> MarkAsdone(todo)} style={styles.ItemLeft}>
          <View style={styles.CircleView}></View>
          <Text style={styles.ItemTitle}>{todo.title}</Text>
        </TouchableOpacity>

        ) }
        <View style={styles.rightBox}>
          {todo.isDone && (
          <TouchableOpacity onPress={()=> MarkAsundo(todo)}>
            <Image style={styles.undoImage} source={require('./src/assets/icons/undo.png')}/>
          </TouchableOpacity>
          )}
      
    <TouchableOpacity onPress={()=> removeItem(todo)}>
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
         {todos.filter((item)=>!item.isDone).map((todo)=>(<TodoItems key={todo.id}  todo={todo} />))}
        
      
         <View style={styles.addView}>
          <View style={styles.addLeft}>
            <Text style={styles.TypeText}>+</Text>
            <TextInput onChangeText={ setInputText } value={inputText} style={[styles.TypeText, {marginLeft:15}]} placeholder='type new todo...'/>
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Text onPress={addTodolist} style={styles.addText}>Add New</Text>
          </TouchableOpacity>
         </View>
        </View>
        <View style={styles.sectionView}>
        <Text style={styles.sectionTitle}>Completed ToDo</Text>
        {todos.filter((item)=>item.isDone).map((todo)=>(<TodoItems key={todo.id}  todo={todo} />))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App