import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { withBadge } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Theme from '../utils/Style/Theme'

export default class ButtonAlert extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const BadgedIcon = withBadge(this.props.numero, {
            badgeStyle: {
                backgroundColor: Theme.COLORS.colorMainDark,
                borderColor: Theme.COLORS.colorMainDark
            }
        })(Icon)

        const BadgedImage = withBadge(this.props.numero, {
            badgeStyle: {
                backgroundColor: Theme.COLORS.colorMainDark,
                borderColor: Theme.COLORS.colorMainDark
            }
        })(Image)
        return (
            <TouchableOpacity
            style = { style(this.props).button }
            activeOpacity = {this.props.opacidad} onPress = {()=> { this.props.onPress()}}>
            {this.props.skipericon ? (
                <BadgedImage source = { require('../../assets/img/skipericon.png')} 
                style = {{
                    height: this.props.height * 0.7, width : this.props.height * 0.7
                }}
                resizeMode="contain"/>
            ) : (
                <BadgedIcon size = {this.props.iconsize} name = { this.props.nameicon } 
                color = { Theme.COLORS.colorSecondary } />
            )}
            </TouchableOpacity>
        )
    }
}

export const style = (props) => StyleSheet.create({
    button: {
        backgroundColor: props.colorfondo,
        alignItems:"center",
        justifyContent: "center",
        height: props.height,
        borderRadius: 50,
        // padding: 10,
        width: props.width,
        // margin: 3,
    },
});