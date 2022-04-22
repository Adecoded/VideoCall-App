import { SafeAreaView, View,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import MenuButtons from '../components/MenuButtons';
import ContactMenu from '../components/ContactMenu';
const Home = () => {
  return (
    <View style={styles.container}>
    <SafeAreaView style={{height:'100%'}}>
      <Header/>
      <Searchbar/>
      <MenuButtons/>
      <ContactMenu/>
    </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
backgroundColor:'#1c1c1c',
padding:15,

}
})