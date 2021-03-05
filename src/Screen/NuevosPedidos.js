import React from 'react';
import {
    View,
    ScrollView,
} from 'react-native';
import Theme from '../utils/Style/Theme.js';
import OrdenesItem from '../components/OrdenesItem';
import ordenes from '../DataTemporal/OrdenesNuevas';

export default class NuevosPedidos extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            buttonalertfondo: Theme.COLORS.colorMainDark
        }
    }

    render() {
        const OrdenesLIst = ordenes.map((data) => {
            return (
                <OrdenesItem 
                    key= { data.id} 
                    item = { data } />
            )
        })

        return(
            <View style = {Theme.MainContainer, { backgroundColor: Theme.COLORS.colorMain, 
            height:"100%", width:"100%" }} >
                <ScrollView>
                    {OrdenesLIst}
                </ScrollView>
            </View>
        );
    }
}