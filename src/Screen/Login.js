import React, { useEffect } from 'react';
import {Formik} from "formik";
import validationSchema  from "../utils/formvalidation/LoginFormValidation";
import {
    View,
    Text,
    ImageBackground,
    Image, Dimensions, TouchableOpacity
  } from 'react-native';
import Theme from '../utils/Style/Theme.js';
import Input from '../components/Input'
import AsyncStorage from '@react-native-community/async-storage'
import { useMutation  } from '@apollo/react-hooks';
import Button from '../components/Button'
import { SINGIN } from '../graphql/mutations/Login'
import { DataUser } from '../utils/models/DataUser'

var {height, width} = Dimensions.get('window');

const Login = ({ navigation }) => {

    const [IniciarSesion, { loading ,data, error  }] = useMutation(SINGIN)

    useEffect(() => {
        if (data) {
            if(data.signin.error != null)
                alert(data.signin.error.message)
            else if(data.signin.data != null) {
                DataUser.token = data.signin.data.token
                DataUser.firstname = data.signin.data.firstname
                DataUser.lastname = data.signin.data.lastname
                DataUser.username = data.signin.data.username
                DataUser.email = data.signin.data.email
                DataUser.phone_number = data.signin.data.phone_number
                AsyncStorage.setItem('skiperStorage', JSON.stringify(DataUser))
                navigation.navigate("Home")
            }
        }
    });

    const LoginOnpress = async (values, actions) => {
        try {
            actions.setSubmitting(false)
            IniciarSesion( { variables: { email: values.username, password: values.password } })
        }
        catch(e){
            alert(e);
        }
    }

    return(
        <ImageBackground
        source={require('../../assets/img/img-background.png')} 
        style={{ width: "100%", height: "100%"}}>
            <Formik
                initialValues={{ 
                    username: '',
                    password: '',
                }}
                onSubmit={(values, actions) => { LoginOnpress(values, actions)}}
                validationSchema={validationSchema}
                >
                {formikProps => (
                    <View style={{ 
                        flex:1,
                        alignItems:"center",
                        justifyContent:"center",
                    }}>
                        <View style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image 
                            source= {require('../../assets/img/logotext.png')} 
                            style={{
                                height: height * 0.23, width: width * 0.9
                            }} resizeMode = "contain"/>
                        </View>
                        <Text style={{
                            color: Theme.COLORS.colorParagraph,
                            textAlign:"center",
                            padding: 20,
                            fontFamily: "Lato-Regular",
                            fontSize: Theme.SIZES.normal,
                        }}> 
                            SIGN IN
                        </Text>
                        <Input nameicon = {"email"} borderWith = {0.3} borderRadius={35} alto= { height * 0.07 }
                        ancho = { width * 0.8} marginTop = {0}
                        multiline = {false} autoCapitalize = "none" autoCorrect = {false}
                        editable = {true} keyboardType = "email-address" returnKeyType = "next"
                        placeholder = "Correo" placeholderTextColor = { Theme.COLORS.colorSecondary }
                        secureTextEntry = { false } onChangeText={formikProps.handleChange('username')}
                        onBlur={formikProps.handleBlur('username')}/>
                        { formikProps.errors.username && formikProps.touched.username ? (
                            <View style = {{
                                width: width * 0.75
                            }}>
                                <Text style={{ color: Theme.COLORS.colorError, marginTop:1, marginBottom: 1}}>
                                    {formikProps.touched.username && formikProps.errors.username}
                                </Text>
                            </View> ) : null
                        } 
                        <Input nameicon = {"lock"} borderWith = {0.3} borderRadius={35} alto= { height * 0.07 }
                        ancho = { width * 0.8} 
                        marginTop = { formikProps.errors.username && formikProps.touched.username ? 0 : 15 }
                        multiline = {false} autoCapitalize = "none" autoCorrect = {false}
                        editable = {true} keyboardType = "default" returnKeyType = "go"
                        placeholder = "Contrasena" placeholderTextColor = { Theme.COLORS.colorSecondary }
                        secureTextEntry = { true } onChangeText={formikProps.handleChange('password')}
                        onBlur={formikProps.handleBlur('password')}/>
                        { formikProps.errors.password && formikProps.touched.password ? (
                            
                            <View style = {{
                                width: width * 0.75,
                                marginTop: 1, marginBottom: 1
                            }}>
                                <Text style={{ 
                                    color: Theme.COLORS.colorError,
                                    fontFamily: "Lato-Regular",
                                    fontSize: Theme.SIZES.xsmall 
                                }}>
                                    {formikProps.touched.password && formikProps.errors.password}
                                </Text>
                            </View> ) : null
                        }
                        <Button isloading = { loading } opacidad = {0.9} bicon = { true } nameicon = {"account"} 
                        text = 'INICIAR SESION' bborder = {true}  borderWidth = {1} 
                        borderColor = {Theme.COLORS.colorMainDark}
                        height = {height * 0.08} width = {width * 0.7}
                        colorfondo ={ Theme.COLORS.colorMainDark } 
                        marginTop = {25} marginBottom = {0} marginLeft = {0} marginRight = {0}
                        padding = {0} borderRadius = {35} textcolor = { Theme.COLORS.colorParagraph }
                        fontSize = { Theme.SIZES.normal }
                        onPress = { !loading ? formikProps.handleSubmit : null }/>
                        <TouchableOpacity style = {{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                width: width * 0.9,
                                paddingVertical: 10
                        }}>
                            <Text style = {{
                                color : Theme.COLORS.colorSecondary,
                                fontSize: Theme.SIZES.xsmall,
                                fontFamily: Theme.FONTS.Lato
                            }}>
                                Olvido su contrasena ?
                            </Text>
                        </TouchableOpacity>
                    </View> 
                )}
                </Formik>
        </ImageBackground>
    );
}

export default Login