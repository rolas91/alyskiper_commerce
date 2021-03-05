import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Theme from '../utils/Style/Theme'
import OrdenesNuevas from '../DataTemporal/OrdenesNuevas'
import OrdenesRecibidas from '../DataTemporal/OrdenesRecibidas'
import FlashMessage from "react-native-flash-message";
import TabV from '../components/TabV'
import AsyncStorage from '@react-native-community/async-storage'
import * as Animatable from 'react-native-animatable';

const Home = () => {

    var infoTabs = {
      index: 0,
      routes: [
          { 
            key: 'tab1', title: "Nuevos", colornotificacion: Theme.COLORS.colorError, 
            cantidadnotificacion : OrdenesNuevas.length  
          },
          { 
            key: 'tab2', title: 'En proceso', colornotificacion: Theme.COLORS.colorWarning,
            cantidadnotificacion: OrdenesRecibidas.filter(x =>  x.estado == "En cocina").length 
          },
          { 
            key: 'tab3', title: 'Completados', colornotificacion: Theme.COLORS.colorSucces,
            cantidadnotificacion: OrdenesRecibidas.filter(x =>  x.estado == "En cocina").length 
          },
      ],
    };

    const [state] = useState(infoTabs);

    useEffect(()=> {

      async function GetUser() {
        var x = await AsyncStorage.getItem('skiperStorage')
        console.log(JSON.parse(x).token)
      }

      GetUser()

    })

    return (
      <View
      style={{
        flex: 1,
      }}>
          <Animatable.View animation="pulse" iterationCount = "infinite"
          style = {{
            padding: 10, alignItems: "center", justifyContent: "center", 
            backgroundColor: Theme.COLORS.colorMainDark
          }}>
            <Text style= {{
              color: Theme.COLORS.colorParagraph,
              fontSize: Theme.SIZES.subTitle,
              fontFamily: "Lato-Bold"
            }}>
              Pedidos
            </Text>
          </Animatable.View>
          <TabV
          lazy = { true }
          index = { state.index }
          routes = { state.routes }
          idpestanas = { "PestanasHome" }
          scrollEnabled = {true}
          TabBarIndicatorbackgroundColor = {Theme.COLORS.colorSecondary}
          TabBarbackgroundColor =  { Theme.COLORS.colorMainDark }
          />
          <FlashMessage position = "top"  />
      </View>
    );
}

export default Home