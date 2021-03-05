import React from 'react';
import { TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Buttonicon extends React.Component {

    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity style ={{ 
                padding: this.props.padding, backgroundColor: this.props.backgroundColor, 
                borderRadius: this.props.borderRadius,
                opacity: this.props.opacity
            }} onPress = {this.props.onPress }>
                <Icon size = { this.props.iconsize } color = { this.props.iconcolor }
                name = { this.props.iconname }/>
            </TouchableOpacity>
        )
    }
}