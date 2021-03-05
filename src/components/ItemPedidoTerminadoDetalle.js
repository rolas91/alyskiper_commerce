import React from 'react';
import { Text, View } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialIcons'
import Theme from '../utils/Style/Theme';

export default class ItemPedidoTerminadoDetalle extends React.Component {
    render() {
        const data = this.props.data;
        const Detalle = data.productos.map((data) => {
            return(
                <View key= { data.id } style={{
                    alignItems:"flex-start", paddingTop: 2
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
             }}>
                <Text style = {{
                    fontSize: Theme.SIZES.normal,
                    fontFamily: "Lato-Bold",
                    color: Theme.COLORS.colorSecondary
                }}>
                    Contenido
                </Text>
                {Detalle}
            </View>
        )
    }
}