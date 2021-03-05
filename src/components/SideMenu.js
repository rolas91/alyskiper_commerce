import React from 'react'
import {ScrollView, View} from 'react-native'
import SideMenuHeader from './SideMenuHeader'
import Theme from '../utils/Style/Theme'
import SideMenuItems from './SIdeMenuItems'
import AsyncStorage from '@react-native-community/async-storage'

const SideMenu = (props) => {

    const cerrarsesion = async () => {
      await AsyncStorage.removeItem('skiperStorage')
      props.navigation.navigate("Login")
    }
  
      return (
        <View style = { Theme.MainContainer, { backgroundColor: Theme.COLORS.colorMainDark, height:"100%", width:"100%" } }>
          <SideMenuHeader/>
          <ScrollView>
            <SideMenuItems Texto = {"Inicio"}
            textcolor = { Theme.COLORS.colorParagraph }
            textsize = { Theme.SIZES.small }
            iconname = {"home"} iconcolor = { Theme.COLORS.colorSecondary }
            iconsize = {25}
            onPress = {() => {
                props.navigation.toggleDrawer();
            }}
            />
            <SideMenuItems Texto = {"Ganancias"}
            textcolor = { Theme.COLORS.colorParagraph }
            textsize = { Theme.SIZES.small }
            iconname = {"monetization-on"} iconcolor = { Theme.COLORS.colorSecondary }
            iconsize = {25}
            />
            <SideMenuItems Texto = {"Menu"}
            textcolor = { Theme.COLORS.colorParagraph }
            textsize = { Theme.SIZES.small }
            iconname = {"menu"} iconcolor = { Theme.COLORS.colorSecondary }
            iconsize = {25}
            />
            <SideMenuItems Texto = {"Promociones"}
            textcolor = { Theme.COLORS.colorParagraph }
            textsize = { Theme.SIZES.small }
            iconname = {"local-offer"} iconcolor = { Theme.COLORS.colorSecondary }
            iconsize = {25}
            />
            <SideMenuItems Texto = {"Cerrar sesion"}
            textcolor = { Theme.COLORS.colorParagraph }
            textsize = { Theme.SIZES.small }
            iconname = {"reply-all"} iconcolor = { Theme.COLORS.colorSecondary }
            iconsize = {25}
            onPress = {()=> { cerrarsesion() }}
            />
          </ScrollView>
        </View>
      );
  }

  export default SideMenu;