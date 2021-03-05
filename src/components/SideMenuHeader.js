import React from 'react'
import {Image, Text, View, Dimensions } from 'react-native';
import Theme from '../utils/Style/Theme'

var {height, width} = Dimensions.get('window');

export default class SideMenuHeader extends React.Component {
    render() {
        return (
            <View style = {{
                padding: 10,
                borderWidth: 0.3,
                borderBottomColor: Theme.COLORS.colorParagraph
            }}>           
                <View>
                    <Image source = {require('../../assets/img/logotext.png')}
                    style= {{ 
                        height: height * 0.2, width: width * 0.5
                    }} resizeMode = "contain">
                    </Image>
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
                              <Image style = {{
                                  borderRadius: ( height * 0.1 )/ 2, width: height * 0.1,
                                  height: height * 0.1
                              }}  
                              source = { require('../../assets/img/perfiljeffry.jpg') } />
                          </View>
                          <View style = {{
                              width: "70%", marginLeft: 5, justifyContent: "center", alignItems: "flex-start",
                          }}>
                            <Text style={{ fontSize: Theme.SIZES.small, color: Theme.COLORS.colorParagraph,
                            fontFamily: "Lato-Regular", marginLeft: 5 }}>
                                Jeffry Acosta
                            </Text>
                            <Text style={{ fontSize: Theme.SIZES.xsmall, color: Theme.COLORS.colorParagraphSecondary,
                            fontFamily: "Lato-Regular", marginLeft: 5 }}>
                                jefrry@prueba.com
                            </Text>
                          </View>
                      </View>
                </View>
            </View>
        )
    }
}