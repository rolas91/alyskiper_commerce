import React from 'react'
import {Text, View, TouchableOpacity } from 'react-native';
import Theme from '../utils/Style/Theme'
import ButtonIcon from './ButtonIcon'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class SidemenuItems extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <TouchableOpacity style = {{
                flexDirection: "row", padding: 5, width: "100%"
            }}
            onPress = {this.props.onPress}>
                <View style = {{
                    width: "80%", flexDirection: "row",
                    alignItems: "center", justifyContent: "flex-start"
                }}>
                    <Icon size = { this.props.iconsize } color = { this.props.iconcolor }
                    name = { this.props.iconname }/>
                    <Text style = {{
                        paddingLeft: 5,
                        color : this.props.textcolor,
                        fontSize: this.props.textsize,
                        fontFamily: Theme.FONTS.Lato
                    }}>  
                        { this.props.Texto }
                    </Text>
                </View>
                <View style = {{
                    width: "20%",
                    alignItems: "center", justifyContent: "center"
                }}>
                    <ButtonIcon padding = {5} 
                    borderRadius = {30}
                    opacity = {.8}
                    iconsize = {25}
                    iconcolor = {Theme.COLORS.colorSecondary}
                    iconname = "navigate-next"
                    />
                </View>
            </TouchableOpacity>
        )
    }
}