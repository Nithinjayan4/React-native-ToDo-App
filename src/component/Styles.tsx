import { StyleSheet } from "react-native";

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
    itemView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:11,
  
    },
  
    ItemTitle:{
      flexDirection:'row',
      alignItems: 'center',
      fontSize:18,
      fontWeight:'500',
      marginLeft:13,
  
    },
    ItemLeft:{
      flexDirection:'row',
      alignItems: 'center'
      
    },
    undoImage:{
        width:25,
        height:22,
        marginRight:14,
    },
    deleteIcon:{
      width:25,
      height:25,
     
    },
    checkImage:{
        width:22,
        height:22,
    },
    addView:{
      marginTop:40,
      flexDirection:'row',
      justifyContent:'space-between'
  
    },
    addLeft:{
      paddingHorizontal:15,
      height:45,
      borderColor:'#999',
      borderWidth:1,
      flex:1,
      flexDirection:'row',
      alignItems: 'center',
      borderTopLeftRadius:6,
      borderBottomLeftRadius:6,
      borderRightColor:'transparent',
      
  
  
    },
    TypeText:{
      fontSize:17,
      fontWeight:'500',
      color:'black'
    },
    addButton:{
      backgroundColor:'#e74c3c',
      height:'100%',
      paddingHorizontal:18,
      alignItems: 'center',
      flexDirection:'row',
      borderTopRightRadius:6,
      borderBottomRightRadius:6,
  
      
  
    },
    addText:{
      fontSize:15,
      fontWeight:'500',
      color:'white',
    },
    rightBox:{
        flexDirection: 'row',
        alignItems: 'center',
    }
}
)  
export default styles