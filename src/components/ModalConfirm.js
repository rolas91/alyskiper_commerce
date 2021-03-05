import React from 'react';
import { View, Text, Modal, Dimensions, ImageBackground } from 'react-native';
// import Modal from 'react-native-modal';
import Button from './Button';
import Theme from '../utils/Style/Theme';
var { height } = Dimensions.get("window")

export default class ModalConfirm extends React.Component {

    render() { 
        return (
            <Modal
            animationType="fade"
            transparent={ false }
            visible={ this.props.visible }
            onRequestClose={ () => this.props.onPressCancel() }>
                <ImageBackground source = {
                    require('../../assets/img/BackgroundError.png')
                } 
                style={{  
                    padding: 10, justifyContent: "center",
                    alignItems: "center", flex: 1,
                }}>
                    <Text style = {{ 
                    fontFamily: "Lato-Regular", fontSize: Theme.SIZES.title,
                    color: Theme.COLORS.colorParagraph, textAlign: "center"
                    }}>
                        { this.props.text }
                    </Text>
                        <View style = {{ 
                            alignItems: "flex-start",
                            justifyContent: "center",
                            padding: 20,
                            flexDirection: "row"
                        }}>
                            <Button opacidad = {0.7} bicon = { false } nameicon = 'check' text = 'SI'
                            bborder = {false}  borderWidth = {0.3} borderColor = {Theme.COLORS.colorSecondary}
                            height = {height * 0.07} width = "50%"
                            colorfondo ={ Theme.COLORS.colorSucces }
                            marginTop = {25} marginBottom = {0} marginLeft = {3} marginRight = {3}
                            padding = {0} borderRadius = {35} textcolor = { Theme.COLORS.colorParagraph }
                            fontSize = { Theme.SIZES.small }
                            onPress = { () => this.props.onPressConfirm() }/>
                            <Button opacidad = {0.7} bicon = { false } nameicon = 'close' text = 'NO'
                            bborder = {false}  borderWidth = {0.3} borderColor = {Theme.COLORS.colorSecondary}
                            height = {height * 0.07} width = "50%"
                            colorfondo = { Theme.COLORS.colorMain } 
                            marginTop = {25} marginBottom = {0} marginLeft = {3} marginRight = {3}
                            padding = {0} borderRadius = {35} textcolor = { Theme.COLORS.colorParagraph }
                            fontSize = { Theme.SIZES.small }
                            onPress = { () => this.props.onPressCancel() }/>
                        </View>
                </ImageBackground>
            </Modal>
        )
    }
}