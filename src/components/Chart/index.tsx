import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {
  BarChart,
  LineChart,
  PieChart,
  PopulationPyramid,
  yAxisSides,
} from 'react-native-gifted-charts';
import {Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const SCREEN_HEIGHT = Dimensions.get('screen').height;

const Chart = ({chartColor, price}: {chartColor: any; price: number}) => {
  const data = [
    {value: Number(price) + Math.random() * Number(price)},
    {value: Number(price) + Math.random() * Number(price)},
    {value: Number(price) + Math.random() * Number(price)},
    {value: Number(price) + Math.random() * Number(price)},
    {value: Number(price) + Math.random() * Number(price)},
    {value: Number(price) + Math.random() * Number(price)},
    {value: Number(price) + Math.random() * Number(price)},
    {value: Number(price) + Math.random() * Number(price)},
    {value: Number(price) + Math.random() * Number(price)},
    {
      value:
        chartColor > 0
          ? Number(price) - Math.random() * Number(price)
          : Number(price) + Math.random() * Number(price),
    },
    {value: Number(price)},
  ];
  return (
    <View style={styles.container}>
      <LineChart
      height={SCREEN_HEIGHT*.4}
        data={data}
        backgroundColor={'black'}
        isAnimated={true}
        onDataChangeAnimationDuration={400}
        adjustToWidth
        hideDataPoints1
        hideOrigin
        hideRules
        color={chartColor < 0 ? 'red' : 'green'}
        //  spacing={100}
        // curveType={""}
        showVerticalLines
        verticalLinesColor={'grey'}
        verticalLinesThickness={0.5}
        yAxisSide={yAxisSides.RIGHT}
        width={SCREEN_WIDTH * 0.921}
        scrollAnimation
        yAxisTextStyle={{color: 'grey', fontSize: 11}}
      />
    </View>
  );
};

export default Chart;
