import { Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {colors} from '../global/colors';
import {AntDesign} from '@expo/vector-icons';

const Header = ({title, navigation}) => {
  return (
    <View style={styles.headerContainer}>
      <Pressable onPress={navigation.goBack}>
        <AntDesign name="careleft" size={20} color="white"/>
      </Pressable>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerContainer:{
    flexDirection:'row',
    //height:100,
    backgroundColor: colors.primary,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingBottom:10,
    paddingHorizontal:20,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerTitle:{
    color:'#fff',
    fontSize:20,
    fontFamily:'Monserrat-bold',
  }
})


