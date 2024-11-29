import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Image, StyleSheet} from 'react-native';
import Home from '../../screens/Home';
import Market from '../../screens/Market';
import Portfolio from '../../screens/Portfolio';
import Settings from '../../screens/Settings';
import {Icon} from '../../assets';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
   
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#1E90FF',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            backgroundColor: 'black',
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={Icon.home}
                style={[
                  styles.icon,
                  {tintColor: color, width: size, height: size},
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Market"
          component={Market}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={Icon.market}
                style={[
                  styles.icon,
                  {tintColor: color, width: size, height: size},
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={Icon.portfolio}
                style={[
                  styles.icon,
                  {tintColor: color, width: size, height: size},
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({color, size}) => (
              <Image
                source={Icon.settings}
                style={[
                  styles.icon,
                  {tintColor: color, width: size, height: size},
                ]}
              />
            ),
          }}
        />
      </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});
