import React from 'react'
import Theme from '../utils/Style/Theme'
import { Text, View } from 'react-native'

export default class EstadoPedido extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View style={{ 
                alignItems: "flex-start", justifyContent: "flex-start", width: "100%", paddingTop: this.props.padding
            }}>
                <Text style={{ fontSize: Theme.SIZES.xsmall, fontFamily:Theme.FONTS.LatoB, 
                color: this.props.color,
                backgroundColor: this.props.backgroundColor,
                padding: this.props.padding,
                borderRadius: this.props.borderRadius}}>
                    Estado: { this.props.estado }
                </Text>
            </View>
        )
    }
}