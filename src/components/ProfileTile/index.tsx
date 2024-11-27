import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon } from '../../assets'


const ProfileTile = ({heading,body,photo,bcolor,navigateTo}:{heading:String,body:String,photo:any,bcolor:any,navigateTo:any}) => {
  return (
    <TouchableOpacity style={[styles.container,{backgroundColor:bcolor}]} onPress={navigateTo}>
     <View style={styles.leftView}>
      <Image
      source={photo}
      />
      <View style={styles.leftSubview}>
        <Text style={styles.headingText}>{heading}</Text>
        <Text style={styles.bodyText}>{body}</Text>
      </View>
     </View>
     <View style={styles.rightView}>
      <Image
      source={Icon.right}
      style={styles.rightImage}
      />
     </View>
    </TouchableOpacity>
  )
}

export default ProfileTile

