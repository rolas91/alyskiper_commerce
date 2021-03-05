import React from 'react';
import Login from '../Screen/Login'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'


const Screens = createStackNavigator(
    {
        Login: {
            screen : Login,
            navigationOptions:{
            header: null
            }
        },
    },
    {
        initialRouteName: 'Login',
    }
)

const AuthStack = createAppContainer(Screens);

export default AuthStack
