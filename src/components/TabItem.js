import React from 'react';
import { View, Text } from 'react-native';
import Theme from '../utils/Style/Theme'
import ButtonAlert from '../components/ButtonAlert';
import * as Animatable from 'react-native-animatable';

export default class TabItem extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style= {{
                justifyContent: "center", alignItems: "center",
                flexDirection: "row"
            }}>
                <View style = {{
                    width: this.props.numero > 0 ? "70%" : "100%"
                }}>
                    <Text style = {{
                        color : Theme.COLORS.colorParagraph,
                        fontFamily: Theme.FONTS.Lato, fontSize: Theme.SIZES.small
                    }}
                    numberOfLines={1} ellipsizeMode='tail'>
                        { this.props.texto }
                    </Text>
                </View>
                { this.props.numero > 0 ? (
                    <View style = {{
                        width: "30%"
                    }}>
                        <ButtonAlert height = {25} width = {25} opacidad = {1} skipericon = {true} 
                        colorfondo = { this.props.colorbutton } 
                        numero = { this.props.numero } iconsize = {15}></ButtonAlert>
                    </View>
                ) : null }
            </View>
        )
    }
}