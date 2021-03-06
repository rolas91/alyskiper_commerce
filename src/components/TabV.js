import React from 'react'
import { TabView, TabBar } from 'react-native-tab-view';
import { Dimensions, ActivityIndicator } from 'react-native';
import TabItem from './TabItem'
import { tabs } from '../utils/tabsitem'
import Theme from '../utils/Style/Theme';

export default class TabV extends React.Component {

    constructor(props)
    {
      super(props)
      this.state = {
        index: this.props.index,
        routes: this.props.routes,
        pestanas: tabs.filter(x => x.id ==  this.props.idpestanas)[0].Pestanas
      }
    }

    render() {
        return (
          <TabView
            lazy = { this.props.lazy }
            navigationState={ this.state }
            renderScene={ this.state.pestanas }
            renderTabBar={ props =>
            <TabBar
                scrollEnabled = { this.props.scrollEnabled }
                {...props}
                indicatorStyle={{ backgroundColor: this.props.TabBarIndicatorbackgroundColor }}
                style={{ backgroundColor: this.props.TabBarbackgroundColor }}
                renderLabel = {({ route, focused, color }) => (
                  <TabItem texto = { route.title } colorbutton = { route.colornotificacion }
                  numero = { route.cantidadnotificacion } />
                )}
            />
          }
          onIndexChange={ index => this.setState({ index }) }
          initialLayout={{ width: Dimensions.get('window').width }}
          />
        )
    }
}
