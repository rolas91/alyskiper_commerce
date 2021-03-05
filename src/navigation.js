import React from 'react';
import { createAppContainer, createSwitchNavigator  } from 'react-navigation';
import AuthStack from './Stacks/AuthStack';
import InicioStack from './Stacks/InicioStack';
import AuthLoadingScreen from './Screen/AuthLoadingScreen'

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: {
        screen: AuthLoadingScreen,
      },
      Inicio: InicioStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);