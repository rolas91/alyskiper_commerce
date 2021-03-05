import React from 'react';
import Home from '../Screen/Home'
import TitleHeader from '../components/TitleHeader';
import Theme from '../utils/Style/Theme';
import { Dimensions } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack'
import  EntregarToDriver from '../Screen/EntregarToDriver'
import SideMenu from '../components/SideMenu'

var {height, width} = Dimensions.get('window');


const HomeStack = createStackNavigator(
  {
      Home: {
          screen: Home,
          navigationOptions:{
            headerLeft: <TitleHeader bbusqueda = {true} bmenu = {true}/>,
            headerStyle: {
              backgroundColor: Theme.COLORS.colorMainDark,
              height: height * 0.10
            },
          }
      },
      EntregarToDriver: {
        screen: EntregarToDriver,
        navigationOptions:{
          header: null
        }
      }
  }
)

var DrawerStack = createDrawerNavigator({
  Home: HomeStack
}, {
  contentComponent: SideMenu,
  drawerWidth: width * 0.7
})

const InicioStack = createAppContainer(DrawerStack);

export default InicioStack
