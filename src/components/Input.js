import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Dimensions,
  } from 'react-native';
import Theme from '../utils/Style/Theme.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Input extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{
                backgroundColor: Theme.COLORS.colorMainDark,
                borderWidth: this.props.borderWith,
                borderColor: Theme.COLORS.colorSecondary,
                borderRadius: this.props.borderRadius,
                alignItems: 'center',
                flexDirection: 'row',
                height: this.props.alto,
                width: this.props.ancho,
                marginTop: this.props.marginTop
            }}>
                <Icon name={this.props.nameicon} size={20} 
                style= {{
                    marginLeft: 15,
                    color:Theme.COLORS.colorSecondary
                }} />
                <View style = {{
                    marginLeft: 10,
                    width: "75%",
                }}>
                    <TextInput style = {{
                        color: Theme.COLORS.colorSecondary,
                        fontSize: Theme.SIZES.xsmall,
                        fontFamily: "Lato-Regular",
                        alignContent: 'stretch',
                        ...Platform.select({
                            ios:{
                                borderColor: colors.SILVER,
                                borderBottomWidth: StyleSheet.hairlineWidth
                            },
                            android: {
                                paddingLeft:6
                            }
                        })
                    }}
                    multiline={ this.props.multiline }
                    autoCapitalize={ this.props.autoCapitalize }
                    autoCorrect={ this.props.autoCorrect }
                    editable = { this.props.editable }
                    keyboardType={ this.props.keyboardType } 
                    returnKeyType= { this.props.returnKeyType }
                    placeholder={ this.props.placeholder }
                    placeholderTextColor= { this.props.placeholderTextColor }
                    secureTextEntry  = { this.props.secureTextEntry }
                    onChangeText={ this.props.onChangeText }
                    onBlur={ this.props.onBlur }
                    />
                </View>                         
            </View>
        )
    }

}