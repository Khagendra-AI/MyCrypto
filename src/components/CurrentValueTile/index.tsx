import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './styles'
import { Icon } from '../../assets'

const CurrentValueTile = ({navigatePortfolio,navigateAddMoney}:{navigatePortfolio:any,navigateAddMoney:any}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
      <View style={styles.leftView}>
        <View style={styles.dataView}>
          <Text style={styles.currentText}>Current value</Text>
          <Text style={styles.priceText}>$0</Text>
          <View style={styles.pricechangeView}>
          <Text style={styles.pricechangeText}>0%</Text>
          </View>
        </View>

      </View>
      <TouchableOpacity style={styles.touchableForward} onPress={navigatePortfolio}>
        <Image
        source={Icon.forward}
        style={styles.forwardImage}
        />
      </TouchableOpacity>
      <View style={styles.rightView}>
       
      </View>
      </View>
      <View style={styles.lowercontainer}>
      <TouchableOpacity style={styles.touchableBuy}>
        <Image
        source={Icon.bitcoin}
        style={styles.bitlogo}
        />
        <Text style={styles.buyText}>Buy BTC</Text>
        </TouchableOpacity>
      <TouchableOpacity style={styles.touchableAdd} onPress={navigateAddMoney}>
        <Text style={styles.addText}>Add Money</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CurrentValueTile

