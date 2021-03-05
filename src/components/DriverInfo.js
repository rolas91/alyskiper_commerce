import React from 'react'
import { View, Text, Dimensions, Image } from 'react-native'
import Theme from '../utils/Style/Theme'

var {height} = Dimensions.get('window');

export default class DriverInfo extends React.Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <View style={{ 
                    justifyContent:"center", alignItems: "center", width: "100%", 
                    paddingVertical: 10
                }}>
                    <Text style = {{
                        color: this.props.Titlecolor,
                        fontFamily: Theme.FONTS.Lato, fontSize: Theme.SIZES.normal,
                        fontWeight: this.props.TitleFontWeight
                    }}>
                        {this.props.titulo}
                    </Text>
                </View>
                <View style = {{
                    flexDirection: "row"
                }}>
                    <View style = {{
                        width: "100%", flexDirection: "row"
                    }}>
                        <View style = {{
                            width: "30%",
                            alignItems: "center", justifyContent: "center"
                        }}>
                            <View style={{
                                borderRadius: ( height * 0.11 )/ 2, width: height * 0.11,
                                height: height * 0.11,
                                padding: 2,
                                justifyContent:'center', alignItems: 'center',
                                borderColor: Theme.COLORS.colorSecondary,
                                borderWidth: 1,
                            }}>
                                <Image style = {{
                                    borderRadius: ( height * 0.1 )/ 2, width: height * 0.1,
                                    height: height * 0.1
                                }}  
                                source = { require('../../assets/img/perfiljeffry.jpg') } />
                            </View>
                        </View>
                        <View style = {{
                            width: "70%", marginLeft: 5, justifyContent: "center", alignItems: "flex-start",
                        }}>
                            <View style={{ 
                                flexDirection:"row",
                            }}>
                                <Text style={{ fontSize: Theme.SIZES.small, fontFamily:Theme.FONTS.LatoB, 
                                color: Theme.COLORS.colorSecondary }}>
                                    ID: 
                                </Text>
                                <Text style={{ fontSize: Theme.SIZES.small, color: Theme.COLORS.colorParagraph,
                                fontFamily: Theme.FONTS.lato, marginLeft: 5 }}>
                                    {this.props.codigo}
                                </Text>
                            </View>
                            <View style={{ 
                                flexDirection:"row",
                            }}>
                                <Text style={{ fontSize: Theme.SIZES.small, fontFamily:"Lato-Bold", 
                                color: Theme.COLORS.colorSecondary }}>
                                    Nombre: 
                                </Text>
                                <Text style={{ fontSize: Theme.SIZES.small, color: Theme.COLORS.colorParagraph,
                                fontFamily: "Lato-Regular", marginLeft: 5 }}>
                                    {this.props.nombre}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}