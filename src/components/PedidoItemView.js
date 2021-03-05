import React from 'react'
import Theme from '../utils/Style/Theme'
import { View, Text } from 'react-native'

export default class PedidoItemView extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style = {{ flexDirection: "column", width: this.props.width }}>
                {this.props.nopedido ? (
                    <View style= {{ 
                        flexDirection:"row",justifyContent:"flex-start", alignItems: "flex-start", width: "100%"
                    }}>
                        <Text style={{ fontSize: Theme.SIZES.small, fontFamily:"Lato-Bold", 
                        color: Theme.COLORS.colorSecondary }}>
                            No. pedido:
                        </Text>
                        <Text style={{ fontSize: Theme.SIZES.small, color: Theme.COLORS.colorParagraph,
                        fontFamily: "Lato-Regular", marginLeft: 5 }}>
                            { this.props.nopedido }
                        </Text>
                    </View>
                ) : null}
                {this.props.cliente ? (
                    <View style= {{ 
                        flexDirection:"row",justifyContent:"flex-start", alignItems: "flex-start", width: "100%"
                    }}>
                        <Text style={{ fontSize: Theme.SIZES.small, fontFamily:"Lato-Bold", 
                        color: Theme.COLORS.colorSecondary }}>
                            Cliente: 
                        </Text>
                        <Text style={{ fontSize: Theme.SIZES.small, color: Theme.COLORS.colorParagraph,
                        fontFamily: "Lato-Regular", marginLeft: 5 }}>
                            {this.props.cliente}
                        </Text>
                    </View>
                ) : null}
                {this.props.fecha ? (
                    <View style={{ 
                        flexDirection:"row",justifyContent:"flex-start", alignItems: "flex-start", width: "100%"
                    }}>
                        <Text style={{ fontSize: Theme.SIZES.small, fontFamily:"Lato-Bold", 
                        color: Theme.COLORS.colorSecondary }}>
                            Fecha: 
                        </Text>
                        <Text style={{ fontSize: Theme.SIZES.small, color: Theme.COLORS.colorParagraph,
                        fontFamily: "Lato-Regular", marginLeft: 5 }}>
                            {this.props.fecha}
                        </Text>
                    </View>
                ) : null}
            </View>
        )
    }
}