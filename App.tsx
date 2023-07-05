import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView style={styles.container}>
      <Text style={styles.text}>ToDo App</Text>
        <View style={styles.sectionView}>
         <Text style={styles.sectionTitle}>ToDo List</Text>
         <View>
          <TouchableOpacity style={styles.ItemLeft}>
            <View style={styles.CircleView}></View>
            <Text style={styles.ItemTitle}>this is a sample</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('')}/>
          </TouchableOpacity>
         </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles=StyleSheet.create({
  mainContainer:{
    flex: 1,
  },
  container:{
   paddingTop:20,
   paddingHorizontal:30,
   
  },
  text:{
    fontSize:27,
    fontWeight:'bold',
    textAlign:'center'

  },
  sectionView:{
    paddingVertical:30
  },

  sectionTitle:{
    fontSize:22,
    fontWeight:'600',
    marginBottom:17,
  },
  CircleView:{

     height:22,
     width:22,
     borderRadius:22/2,
     borderWidth:2,
     borderColor:'black'
    
  },
  ItemTitle:{
    flexDirection:'row',
    alignItems: 'center',
    fontSize:18,
    fontWeight:'500',
    marginLeft:12,

  },
  ItemLeft:{
    flexDirection:'row',
    alignItems: 'center'
    
  }

})

export default App