import { ViewStyle } from 'react-native';
import { IconProps } from '@xzchameleon/icon';
import { FC } from 'react';

interface RotateIconProps {
    open?: boolean;
    contentComponent?: React.ReactElement;
    iconProps?: IconProps;
    containerStyle?: ViewStyle;
    time?: number;
    animated?: boolean;
}

declare const RotateIcon:FC<RotateIcon>;

export default RotateIcon;