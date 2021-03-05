import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Theme from '../utils/Style/Theme'

export default class PedidoItemTiempo extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={{ 
                marginBottom: this.props.marginBottom, alignItems: "center", justifyContent: "center",
                flexDirection: "row", backgroundColor: "white", width: this.props.width,
                borderRadius: this.props.borderRadius, backgroundColor: this.props.backgroundColor,
                padding: this.props.padding
            }}>
                <Icon size = { this.props.sizeicon } color = { this.props.coloricon }
                name = { this.props.nameicon }/>
                <Text style={{ fontSize: Theme.SIZES.small, color: Theme.COLORS.colorParagraphSecondary,
                fontFamily: Theme.FONTS.LatoB, padding: 2 }}>
                    {this.props.texto}
                </Text>
            </View>
        )
    }
}