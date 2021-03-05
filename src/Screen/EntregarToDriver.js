import React from 'react'
import {View, Text, PermissionsAndroid, Platform, TouchableOpacity, BackHandler
, ImageBackground, Dimensions, Image, ScrollView } from 'react-native'
import TitleHeader from '../components/TitleHeader';
import Theme from '../utils/Style/Theme'
import Input from '../components/Input'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { CameraKitCameraScreen } from 'react-native-camera-kit'
import ListPedidosTerminados from '../DataTemporal/ListPedidosTerminados'
import ItemPedidoTerminadoDetalle from '../components/ItemPedidoTerminadoDetalle'
import Button from '../components/Button'

var {height} = Dimensions.get("window");

export default class EntregarToDriver extends React.Component {

    constructor() {
        super();
        this.state = {
            qrvalue: '',
            bcamarascreen: false
        };
    }

    componentWillUnmount() {
      
    }

    onBarcodeScan(qrvalue) {
        //called after te successful scanning of QRCode/Barcode
        this.setState({ qrvalue: qrvalue });
        this.setState({ opneScanner: false });
        alert(this.state.qrvalue)
    }

    onOpneScanner() {
        var that =this;
        //To Start Scanning
        if(Platform.OS === 'android'){
          async function requestCameraPermission() {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,{
                  'title': 'CameraExample App Camera Permission',
                  'message': 'CameraExample App needs access to your camera '
                }
              )
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                //If CAMERA Permission is granted
                that.setState({ qrvalue: '' });
              } else {
                alert("CAMERA permission denied");
              }
            } catch (err) {
              alert("Camera permission err",err);
              console.warn(err);
            }
          }
          //Calling the camera permission function
          requestCameraPermission();
        }else{
          that.setState({ qrvalue: '' });
          that.setState({ opneScanner: true });
        }    
    }

    componentDidMount() {
      this.onOpneScanner()
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(this.state.bcamarascreen)
        {
          this.setState({ bcamarascreen: !this.state.bcamarascreen })
          return true;
        }
        return false;
      });
    }
    

    render() {
        const itemId = this.props.navigation.getParam('IdOrden', undefined);
        var orden = ListPedidosTerminados.filter(x => x.id == itemId)[0]
        return (
          <ImageBackground source = { require('../../assets/img/Background.png') } 
          style= {Theme.MainContainer, { height: "100%", width: "100%" } }>
            {this.state.bcamarascreen == false ? <TitleHeader/> : null }
            {this.state.bcamarascreen == false ? (
              <ScrollView>
                <View style = {{
                  alignItems: "flex-start", justifyContent: "flex-start", padding: 10
                }}>
                    <View style = {{
                      padding: 10, alignItems: "center", justifyContent: "center", 
                      width: "100%"
                    }}>
                      <Text style= {{
                        color: Theme.COLORS.colorParagraph,
                        fontSize: Theme.SIZES.subTitle,
                        fontFamily: "Lato-Bold"
                      }}>
                        Despachar pedido
                      </Text>
                    </View>
                    <Text style = {{
                      fontSize: Theme.SIZES.subTitle,
                      fontFamily: "Lato-Bold",
                      color: Theme.COLORS.colorSecondary
                    }}>
                        No. Pedido
                    </Text>
                    <Text style = {{
                      fontSize: Theme.SIZES.normal,
                      fontFamily: "Lato-Regular",
                      color: Theme.COLORS.colorParagraph
                    }}>
                        { orden.id }
                    </Text>
                    <Text style = {{
                      fontSize: Theme.SIZES.subTitle,
                      fontFamily: "Lato-Bold",
                      color: Theme.COLORS.colorSecondary
                    }}>
                        Cliente
                    </Text>
                    <Text style = {{
                      fontSize: Theme.SIZES.normal,
                      fontFamily: "Lato-Regular",
                      color: Theme.COLORS.colorParagraph
                    }}>
                        { orden.cliente }
                    </Text>
                    <View style={{ 
                      justifyContent:"center", alignItems: "center", width: "100%", 
                      paddingTop: 10, paddingBottom: 10
                    }}>
                      <Text style = {{
                          color: Theme.COLORS.colorParagraph,
                          fontFamily: "Lato-Regular", fontSize: Theme.SIZES.normal,
                          fontWeight: "200"
                      }}>
                          Drive asignado
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
                              <Image style = {{
                                  borderRadius: ( height * 0.1 )/ 2, width: height * 0.1,
                                  height: height * 0.1
                              }}  
                              source = { require('../../assets/img/perfiljeffry.jpg') } />
                          </View>
                          <View style = {{
                              width: "70%", marginLeft: 5, justifyContent: "center", alignItems: "flex-start",
                          }}>
                              <View style={{ 
                                  flexDirection:"row",
                              }}>
                                  <Text style={{ fontSize: Theme.SIZES.small, fontFamily:"Lato-Bold", 
                                  color: Theme.COLORS.colorSecondary }}>
                                      ID: 
                                  </Text>
                                  <Text style={{ fontSize: Theme.SIZES.small, color: Theme.COLORS.colorParagraph,
                                  fontFamily: "Lato-Regular", marginLeft: 5 }}>
                                      { orden.driver.id }
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
                                      { orden.driver.nombre }
                                  </Text>
                              </View>
                          </View>
                      </View>
                    </View>
                    <View style = {{
                      flexDirection: "row", width: "100%",
                      alignItems: "center", justifyContent: "center", padding: 10
                    }}>
                      <Input borderWith = {0.3} borderRadius={35} alto = {40}
                      ancho = "100%" bmarginTop = { false } error = "" nameicon = "key"
                      multiline = {false} autoCapitalize = "none" autoCorrect = {false}
                      editable = {true} keyboardType = "default" returnKeyType = "go"
                      placeholder = "Ingrese el codigo..." placeholderTextColor = { Theme.COLORS.colorSecondary }
                      secureTextEntry = { false } onChangeText={()=> {}}
                      onBlur={() => {}}/>
                      <TouchableOpacity activeOpacity = {0.6} style = {{
                          padding: 5, margin: 2, alignItems: "center", justifyContent: "center"
                      }} onPress = {()=> { this.setState({ bcamarascreen: !this.state.bcamarascreen }) }}>
                          <Icon name ="qrcode-scan" size = {30} color = {Theme.COLORS.colorSecondary}/>
                      </TouchableOpacity>
                    </View>
                    <View style = {{
                      width: "100%",alignItems: "center", justifyContent: "center", padding: 10
                    }}>
                      <Button opacidad = {0.7} bicon = { false } text = 'Confirmar'
                      bborder = {true}  borderWidth = {0.3} borderColor = {Theme.COLORS.colorSecondary}
                      height = {height * 0.07} width = "80%"
                      colorfondo ={ Theme.COLORS.colorMainDark } 
                      marginTop = {25} marginBottom = {0} marginLeft = {0} marginRight = {0}
                      padding = {0} borderRadius = {35} textcolor = { Theme.COLORS.colorParagraph }
                      fontSize = { Theme.SIZES.small }
                      onPress = {() => { }}/>
                    </View>
                    <ItemPedidoTerminadoDetalle data = { orden }/>
                </View>
              </ScrollView>
            ):(
                <CameraKitCameraScreen
                showFrame={true}
                //Show/hide scan frame
                scanBarcode={true}
                //Can restrict for the QR Code only
                laserColor={Theme.COLORS.colorMainDark}
                //Color can be of your choice
                frameColor={Theme.COLORS.colorSecondary}
                //If frame is visible then frame color
                colorForScannerFrame={Theme.COLORS.colorMain}
                //Scanner Frame color
                onReadCode={event =>
                    this.onBarcodeScan(event.nativeEvent.codeStringValue)
                }
                />
              )
            }
          </ImageBackground>
        )
    }

}