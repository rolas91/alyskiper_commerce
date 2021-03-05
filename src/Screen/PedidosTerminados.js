import React from 'react';
import Theme from '../utils/Style/Theme';
import { View, ScrollView } from 'react-native';
import ItemPedidoTerminado from '../components/ItemPedidoTerminado';
import ListPedidosTerminados from '../DataTemporal/ListPedidosTerminados'

export default class PedidosTerminados extends React.Component {

    render() {
        const OrdenesList = ListPedidosTerminados.map((data) => {
            return (
                    <ItemPedidoTerminado 
                    key= { data.id} 
                    item = { data } />
                )
            })
        return (
            <View style = {Theme.MainContainer, { backgroundColor: Theme.COLORS.colorMain, 
            height:"100%", width:"100%" }} >
                <ScrollView>
                    {OrdenesList}
                </ScrollView>
            </View>
        )
    }

}