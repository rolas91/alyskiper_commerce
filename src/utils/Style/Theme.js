const Theme = {
    MainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    FONTS:{
        Lato: "Lato-Regular",
        LatoB: "Lato-Bold"

    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
        borderColor: '#03F9FC',
        borderWidth: 1,
        backgroundColor: 'red',
        right: 20,
        bottom: 30,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
        backgroundColor: "white"
    },
    COLORS:{
     colorMain: '#000024',
     colorMainDark: '#000018',
     colorSecondary: '#03F9FC',
     colorParagraph: '#E4E4E4',
     colorParagraphSecondary: '#C9C9C9',
     colorInput:'',
     colorTextError: 'red',
     colorSucces: '#097302',
     colorInfo:'#018FB3',
     colorWarning: '#fdbe00',
     colorError: '#BF051E',
     colorErrorTransparent: 'rgba(191,5,30, .6)',
     EstadoEnCocina: '#BF051E',
     EstadoPreparando: '#fdbe00'
    },
    SIZES:{
        h1:32,
        title: 28,
        subTitle: 23,
        normal: 20,
        small: 17,
        xsmall: 14,
    }
};

export default Theme;