import React, { Component } from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from "./TabNavigator"
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator()
 
const DrawerScreen =()=>{
    return(
     <Drawer.Navigator>
         <Drawer.Screen name="Home" component={BottomTabNavigator}/>
         <Drawer.Screen name="profile" component={Profile}/>
     </Drawer.Navigator>
    )
}

export default DrawerScreen