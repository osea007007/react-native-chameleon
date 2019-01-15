import React, {Component} from "react";
import {TextInput} from 'react-native';
import Proptypes from 'prop-types';

/**
 * ---
 * page: Input
 * ---
 *
 *
 * 输入框组件
 */
const Input = React.forwardRef((props, ref) => (
    <JFInput inputRef={ref} {...props}/>
));

class JFInput extends Component {
    render(){
        let {onChange, inputRef, ...props} = this.props;
        return(
            <TextInput
                ref={inputRef}
                underlineColorAndroid={'transparent'}
                onChangeText={onChange}
                {...props}
            />
        )
    }
}

Input.propTypes = {
    ...TextInput.propTypes,
    /**
     * 输入框文本变化时的回调
     */
    onChange:Proptypes.any,
};

export default Input;