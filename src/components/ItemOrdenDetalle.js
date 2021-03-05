import React from 'react';
import { Text, View, Dimensions } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import Theme from '../utils/Style/Theme';
import Button from './Button';
import ModalConfirm from './ModalConfirm';
import { showMessage, hideMessage } from "react-native-flash-message";

var { height } = Dimensions.get("window")

export default class itemOrdenDetalle extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ModalVisibleConfirm : false
        }
    }

    render() {
        const data = this.props.data;
        const Detalle = data.productos.map((data) => {
            return(
                <View key= { data.id } style={{
                    alignItems:"flex-start",
                    padding:5
                }}>
                    <View style = {{
                        flexDirection: "row"
                    }}>
                        <Icon size = {20} color = { Theme.COLORS.colorSecondary }
                        name = "bookmark"/>
                        <Text style={{ 
                            fontSize: Theme.SIZES.small, color: Theme.COLORS.colorParagraph,
                            fontFamily: "Lato-Regular", textAlign: "left"
                        }}>
                            {data.nombre}
                        </Text>
                    </View>
                    <Text style={{ 
                        fontSize: Theme.SIZES.xsmall, color: Theme.COLORS.colorParagraphSecondary,
                        fontFamily: "Lato-Regular", textAlign: "left"
                    }}>
                        {data.descripcion}
                    </Text>
                </View>
            );
        });

        RechazarOrden = () => {
            this.setState({ ModalVisibleConfirm: false });
            showMessage({
                message: "La orden fue rechazada",
                type: "success",
                backgroundColor: Theme.COLORS.colorSucces
            });
        }

        CancelarRechazo = () => {
            this.setState({ ModalVisibleConfirm: false });
            showMessage({
                message: "Operacion cancelada",
                type: "info",
                backgroundColor: Theme.COLORS.colorInfo
            });
        }

        ConfirmarOrden = () => {
            showMessage({
                message: "Orden aceptada",
                type: "success",
                backgroundColor: Theme.COLORS.colorSucces
            });
        }

        return (
            <View style = {{ 
                alignItems: "stretch", width: "100%", justifyContent: "center",
                backgroundColor: Theme.COLORS.colorMain, padding: 10
             }}>
                <Text style={{ 
                    fontSize: Theme.SIZES.small, color: Theme.COLORS.colorSecondary,
                    fontFamily: Theme.FONTS.LatoB, textAlign: "left", margin:5
                }}>
                    Descripcion
                </Text>
                <View style = {{ 
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: 10,
                    flexDirection: "row"
                 }}>
                    <Button opacidad = {0.8} bicon = { true } nameicon = 'close' text = 'Rechazar'
                    bborder = {false}  borderWidth = {0.3} borderColor = {Theme.COLORS.colorSecondary}
                    height = { height  * 0.06} width = "50%"
                    colorfondo = {Theme.COLORS.colorError } 
                    marginTop = {0} marginBottom = {0} marginLeft = {3} marginRight = {3}
                    padding = {0} borderRadius = {30} textcolor = { Theme.COLORS.colorParagraph }
                    fontSize = { Theme.SIZES.small }
                    onPress = { () => this.setState({ ModalVisibleConfirm: true }) }/>
                    <ModalConfirm text = "Esta seguro de rechazar la orden" visible = { this.state.ModalVisibleConfirm } 
                    onPressConfirm = {() => RechazarOrden()} onPressCancel = {() => CancelarRechazo()}
                    />
                    <Button opacidad = {0.8} bicon = { true } nameicon = 'check' text = 'Aceptar'
                    bborder = {false}  borderWidth = {0.3} borderColor = {Theme.COLORS.colorSecondary}
                    height = { height * 0.06} width = "50%"
                    colorfondo = { Theme.COLORS.colorSucces } 
                    marginTop = {0} marginBottom = {0} marginLeft = {3} marginRight = {3}
                    padding = {0} borderRadius = {30} textcolor = { Theme.COLORS.colorParagraph }
                    fontSize = { Theme.SIZES.small }
                    onPress = { () => { ConfirmarOrden() } }/>
                 </View>
                {Detalle}
            </View>
        )
    }
}