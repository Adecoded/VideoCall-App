import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto'

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <Fontisto name='search' size={20} color="white"/>
      <Text style={styles.searchbar}>search</Text>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
  container:{
backgroundColor:"#333333",
flexDirection:"row",
paddingHorizontal:10,
height:40,
alignItems:"center",
borderRadius:10,
  },
  searchbar:{
    color:"grey",
    paddingLeft:10,
    fontSize:20,
  }
})