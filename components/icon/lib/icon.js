import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { getIconType } from '../getIconType';

/**
 * ---
 * page: icon
 * ---
 *
 *
 * * 支持所有react-native-vector-icons字体库和属性
 * * icon类型 ["AntDesign","Entypo","EvilIcons","Feather","FontAwesome","Foundation","Ionicons","MaterialCommunityIcons","MaterialIcons","SimpleLineIcons","Octicons","Zocial"]
 * * [API文档](https://github.com/oblador/react-native-vector-icons)
 * * [查找icon](https://oblador.github.io/react-native-vector-icons/)
 */
export class Icon extends Component {
    render() {
        let { type, size, name, color, ...props } = this.props;
        let IconComponent = getIconType(type);
        return (
            <IconComponent size={size} name={name} color={color} {...props}/>
        );
    }
}

Icon.defaultProps = {
    type:'MaterialIcons',
    name:'directions-bike',
    size:16
};

Icon.propTypes = {
    /**
     * 设置icon的颜色
     */
    color:PropTypes.string,
    /**
     * 设置icon的类型
     */
    name:PropTypes.string,
    /**
     * 配置icon的种类
     * "AntDesign","Entypo","EvilIcons",
     * "Feather","FontAwesome","Foundation",
     * "Ionicons","MaterialCommunityIcons",
     * "MaterialIcons","SimpleLineIcons",
     * "Octicons","Zocial"
     */
    type:PropTypes.string.isRequired,
    size:PropTypes.number
};

