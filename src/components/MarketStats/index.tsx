import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles'

const MarketStats = ({mRank,mCap,supply}:{mRank:any,mCap:any,supply:any}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Market Stats</Text>
      <View style={styles.subcontainer}>
        <View style={styles.topView}>
        <Text style={styles.headingText}>Market Rank</Text>
        <Text style={styles.normalText}>#{mRank}</Text>
        </View>
        <View style={styles.horizontalLine}/>
        <View style={styles.middleView}>
        <Text style={styles.headingText}>Market Cap</Text>
        <Text style={styles.normalText}>{mCap} Cr.</Text>

        </View>
        <View style={styles.horizontalLine}/>
        <View style={styles.bottomView}>
        <Text style={styles.headingText}>Circulating Supply</Text>
        <Text style={styles.normalText}>{supply} Cr.</Text>

        </View>

      </View>
      
    </View>
  )
}

export default MarketStats

