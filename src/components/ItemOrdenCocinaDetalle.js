import React from 'react';
import { Text, View, Dimensions } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import Theme from '../utils/Style/Theme';
import Button from './Button';

var {height} = Dimensions.get("window")


export default class itemOrdenCocinaDetalle extends React.Component {
    constructor(props){
        super(props)
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

        return (
            <View style = {{ 
                alignItems: "stretch", width: "100%", justifyContent: "center",
                backgroundColor: Theme.COLORS.colorMain, padding: 10
             }}>
                <Text style={{ 
                    fontSize: Theme.SIZES.small, color: Theme.COLORS.colorSecondary,
                    fontFamily: "Lato-Regular", textAlign: "left", margin:5
                }}>
                    Descripcion
                </Text>
                { data.estado == "En cocina" ?  (
                    <Button opacidad = {0.8} bicon = { false } text = 'Iniciar'
                    bborder = {false}  borderWidth = {0.3} borderColor = {Theme.COLORS.colorSecondary}
                    height = {height * 0.06} width = "100%"
                    colorfondo = {  Theme.COLORS.colorSucces } 
                    marginTop = {0} marginBottom = {0} marginLeft = {3} marginRight = {3}
                    padding = {0} borderRadius = {30} textcolor = { Theme.COLORS.colorParagraph }
                    fontSize = { Theme.SIZES.xsmall }
                    onPress = { () => {} }/>
                ) : null }
                { data.estado == "Preparando" ?  (
                    <Button opacidad = {0.8} bicon = { false } text = 'Finalizar'
                    bborder = {false}  borderWidth = {0.3} borderColor = {Theme.COLORS.colorSecondary}
                    height = {height * 0.06} width = "100%"
                    colorfondo = {  Theme.COLORS.colorSucces } 
                    marginTop = {0} marginBottom = {0} marginLeft = {3} marginRight = {3}
                    padding = {0} borderRadius = {30} textcolor = { Theme.COLORS.colorParagraph }
                    fontSize = { Theme.SIZES.small }
                    onPress = { () => {} }/>
                ) : null }
                {Detalle}
            </View>
        )
    }
}