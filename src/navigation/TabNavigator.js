/**
 * Copyright (c) Wai L.
 *
 * This source code is licensed under the ___ license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @created by:     Wai L
 * @created date:   16/5/2023
 * @modified by:    Wai L
 * @modified date:  16/5/2023
 */

// todo: need to remove those unused code

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import Header from '../header/Header';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Found from '../screens/FoundScreen';
import Missing from '../screens/MissingScreen';
import ReportFoundScreen from '../screens/ReportFoundScreen';
import SettingScreen from '../screens/SettingScreen';

const Tab = createMaterialBottomTabNavigator();

export default function TabNavigator({navigation}) {
  return (
  
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,

        tabBarIcon: ({focused, color}) => {
          let iconName;
          if (route.name === 'Missing') {
            iconName = 'paw';
            size = focused ? 25 : 20;
            color = focused ? '#f0f' : '#555';
          } else if (route.name === 'Found') {
            iconName = 'envelope';
            size = focused ? 25 : 20;
            color = focused ? '#f0f' : '#555';
          } else if (route.name === 'ReportFound') {
            iconName = 'camera';
            size = focused ? 25 : 20;
            color = focused ? '#f0f' : '#555';
          } else if (route.name === 'Setting') {
            iconName = 'bars'; //'wrench';
            size = focused ? 25 : 20;
            color = focused ? '#f0f' : '#555';
          }
          return (
            <>
              <FontAwesome5
                // name="rocket"
                name={iconName}
                size={size}
                color={color}
              />
              {/* <TouchableOpacity onPress={this.navigation.openDrawer}/> */}
            </>
          );
        },
      })}
      // tabBarOptions={{
      //   activeTintColor: '#f0f',
      //   inactiveTintColor: '#555',
      //   activeBackgroundColor: '#fff',
      //   inactiveBackgroundColor: '#999',
      //   showLabel: true,
      //   labelStyle: { fontSize: 14 },
      //   showIcon: true,
      // }}
      //activeColor='#f0edf6'
      //inactiveColor='#3e2465'
      //barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tab.Screen
        name="Missing"
        component={Missing}
        options={{
          // tabBarBadge: () => (
          // //{badgeCount > 0 &&
          //   <View
          //     style={{
          //       position: 'absolute',
          //       //   right: 16,
          //       top: 3,
          //       left: -90,
          //       backgroundColor: "red",
          //       borderRadius: 8,
          //       width: 32,
          //       height: 22,
          //       justifyContent: "center",
          //       alignItems: "center",
          //     }}
          //</Tab.Navigator>   >
          //    <Text
          //      style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
          //    >
          //</NavigationContainer>      1
          //   </Text>
          // </View>
          //  ),
          // tabBarBadge: () => {
          //   11
          // },
          //    tabBarBadge: '3',
          tabBarBadge: 11,
          tabBarLabel: 'Missing',
          headerTitle: 'xxxx',
          //header: () => <Header />
        }}
        // options = {{
        //   header: () => null
        // }}
      />
      <Tab.Screen
        name="Found"
        component={Found}
        options={{
          tabBarLabel: 'Found',
          tabBarBadge: '1',
          //badge: 11,
          // tabBarIcon: () => {
          //   <Icon
          //   name = {"md-notification"
          //   //  platform == "android"? "md-notification": "ios-notifications"
          //   }
          //   size={10}
          //   //color={tabInfo.focused? Colors.primary: null}
          //   color = {'#ffff00'}
          //   />
          // }
          headerTitle: 'xxx',
        }}
      />
      <Tab.Screen
        name="ReportFound"
        component={ReportFoundScreen}
        options={{
          tabBarLabel: 'Report Found',
          //tabBarBadge:  '1',
          //badge: 11,
          // tabBarIcon: () => {
          //   <Icon
          //   name = {"md-notification"
          //   //  platform == "android"? "md-notification": "ios-notifications"
          //   }
          //   size={10}
          //   //color={tabInfo.focused? Colors.primary: null}
          //   color = {'#ffff00'}
          //   />
          // }
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          tabBarLabel: 'Menu',
          //tabBarBadge:  '1',
          //badge: 11,
          // tabBarIcon: () => {
          //   <Icon
          //   name = {"md-notification"
          //   //  platform == "android"? "md-notification": "ios-notifications"
          //   }
          //   size={10}
          //   //color={tabInfo.focused? Colors.primary: null}
          //   color = {'#ffff00'}
          //   />
          // }
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.openDrawer();
          },
        })}
      />
    </Tab.Navigator>
    
  );
}

