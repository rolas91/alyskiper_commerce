import React from 'react'
import { View, ImageBackground, Dimensions } from 'react-native'
import Theme from '../utils/Style/Theme'
import Button from './Button'
import { withNavigation } from 'react-navigation'
import PedidoItemTiempo from './PedidoItemTiempo'
import PedidoItemView from './PedidoItemView'
import DriverInfo from './DriverInfo'
import * as Animatable from 'react-native-animatable'

var {height} = Dimensions.get('window');


class ItemPedidoTerminado extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Animatable.View 
            animation = "bounceInLeft"
            iterationCount = {1}>
                <ImageBackground 
                    source = { require('../../assets/img/Background.png') }
                    style={{ 
                        justifyContent:"flex-start",
                        margin: 5,
                    }} resizeMode="cover">
                        <View style={{ 
                            width: "100%", justifyContent:"center", flexDirection: "column",
                            marginBottom: 5, padding: 5, alignItems: "center"
                        }}>
                            <PedidoItemTiempo marginBottom = {15} width = "60%"
                            borderRadius = {10} backgroundColor = { Theme.COLORS.colorErrorTransparent }
                            padding = {5} sizeicon = {20} coloricon = { Theme.COLORS.colorParagraph }
                            nameicon = "access-time" texto = {this.props.item.tiempoentrega}/>
                            <PedidoItemView width = {"100%"} 
                            nopedido = { this.props.item.id }
                            cliente = { this.props.item.cliente }
                            fecha = { this.props.item.tiempoestado }
                            />
                            <DriverInfo titulo = {"Driver asignado"} Titlecolor = { Theme.COLORS.colorParagraph }
                            TitleFontWeight = {"200"} codigo = { this.props.item.driver.id }
                            nombre = { this.props.item.driver.nombre }
                            />
                            <View style = {{ 
                                alignItems: "center",
                                justifyContent: "center",
                                padding: 5,
                                width: "100%"
                            }}>
                                <Button opacidad = {0.7} bicon = { false } text = 'Despachar'
                                bborder = {true}  borderWidth = {0.3} borderColor = {Theme.COLORS.colorSecondary}
                                height = {height * 0.07} width = "80%"
                                colorfondo ={ Theme.COLORS.colorMainDark } 
                                marginTop = {25} marginBottom = {0} marginLeft = {0} marginRight = {0}
                                padding = {0} borderRadius = {35} textcolor = { Theme.COLORS.colorParagraph }
                                fontSize = { Theme.SIZES.small }
                                onPress = { () => { 
                                    this.props.navigation.navigate('EntregarToDriver', 
                                        {
                                            IdOrden: this.props.item.id,
                                        }
                                    )
                                } }/>
                            </View>
                        </View>
                </ImageBackground>
            </Animatable.View>
        )
    }
}

export default withNavigation(ItemPedidoTerminado)