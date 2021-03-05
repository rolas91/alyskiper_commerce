import React from 'react';
import { ImageBackground, View} from 'react-native';
import Theme from '../utils/Style/Theme';
import ItemOrdenCocinaDetalle from './ItemOrdenCocinaDetalle';
import PedidoItemTiempo from './PedidoItemTiempo';
import PedidoItemView from './PedidoItemView';
import Buttonicon from './ButtonIcon';
import EstadoPedido from './EstadoPedido';
import * as Animatable from 'react-native-animatable'

export default class OrdenesEnCocinaItem extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            showdetails: false
        }
    }

    VerDetalle = () => {
       this.setState({ showdetails: !this.state.showdetails })
    };
    
    render() {
        return (
            <Animatable.View 
            animation = "bounceInLeft"
            iterationCount = {1}>
                <ImageBackground 
                source = { require('../../assets/img/Background.png') }
                style={{ 
                    justifyContent:"flex-start",
                    margin: 5
                }} resizeMode="cover">
                    <View style={{ 
                        width: "100%", justifyContent:"center", flexDirection: "column",
                        marginBottom: 5, padding: 5, alignItems: "center"
                    }}>
                        <PedidoItemTiempo marginBottom = {15} width = "60%"
                        borderRadius = {10} backgroundColor = { Theme.COLORS.colorErrorTransparent }
                        padding = {5} sizeicon = {20} coloricon = { Theme.COLORS.colorParagraph }
                        nameicon = "access-time" texto = {this.props.item.tiempoentrega}/>
                        <View style ={{ flexDirection: "row" }}>
                            <PedidoItemView width = {"80%"} 
                            nopedido = { this.props.item.id }
                            cliente = { this.props.item.cliente }
                            fecha = { this.props.item.tiempoestado }
                            />
                            <View style= {{ 
                                alignItems: "center",
                                justifyContent: "center",
                                width: "20%"
                            }}>
                                <Buttonicon padding = {5}
                                borderRadius = {30}
                                opacity = {.5}
                                iconsize = {25}
                                iconcolor = {Theme.COLORS.colorSecondary}
                                iconname = { this.state.showdetails ? "expand-less" : "expand-more" }
                                onPress = {() => this.VerDetalle()}
                                />
                            </View>
                        </View>
                        <EstadoPedido padding = {5}
                        color = {Theme.COLORS.colorMainDark}
                        backgroundColor = { this.props.item.colorestado }
                        borderRadius = {10} estado = { this.props.item.estado }
                        />
                    </View>
                    {this.state.showdetails ? ( 
                        <ItemOrdenCocinaDetalle data = { this.props.item } />
                    ) : null }
            </ImageBackground>
        </Animatable.View>
        )
    }
}
  