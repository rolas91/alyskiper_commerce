import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Theme from '../utils/Style/Theme';
import OrdenesEnCocinaItem from '../components/OrdenesEnCocinaItem';
import OrdenesRecibidas from '../DataTemporal/OrdenesRecibidas';

export default class InicioCocina extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            buttonalertfondo: Theme.COLORS.colorMainDark
        }
    }

    render() {
        
        const OrdenesList = OrdenesRecibidas.map((data) => {
            return (
                <OrdenesEnCocinaItem 
                key= { data.id} 
                item = { data } />
            )
        })

        return (
            <View style = {Theme.MainContainer, { backgroundColor: Theme.COLORS.colorMain, 
            height:"100%", width:"100%" }} >
                {/* <View style = {{ 
                    backgroundColor: Theme.COLORS.colorMainDark,
                    flexDirection: "row"
                 }}>
                    <View style = {{ 
                        width: "70%" , paddingLeft: 10,
                        alignItems: "stretch",
                        justifyContent: "center"
                    }}>
                        <Text style = {{ 
                            color: Theme.COLORS.colorParagraph,
                            fontFamily: 'Lato-Bold',
                            fontSize: Theme.SIZES.subTitle
                        }}>
                            Pedidos en proceso
                        </Text>
                    </View>
                    <View style = {{ 
                        width: "30%", justifyContent: "center", alignItems: "center"
                    }}>
                        <ButtonAlert opacidad = {.8} nameicon = 'notifications-active' 
                        colorfondo = { this.state.buttonalertfondo } 
                        numero = { OrdenesRecibidas.filter(x=> x.estado == "En cocina").length }></ButtonAlert>
                    </View>
                 </View> */}
                <ScrollView>
                    {OrdenesList}
                </ScrollView>
            </View>
        )
    }
}