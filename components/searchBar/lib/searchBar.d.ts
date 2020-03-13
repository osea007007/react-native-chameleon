import { FC } from 'react';
import { ViewStyle, ImageSourcePropType, ImageStyle } from 'react-native';

interface SearchBarProps {
    searchContent: string;
    containerStyle: ViewStyle;
    searchIcon: ImageSourcePropType;
    searchIconStyle: ImageStyle;
    clearIcon: ImageSourcePropType;
    clearIconStyle: ImageStyle;
    textInputStyle: StyleProp<TextStyle>;
    placeholder: string;
    placeholderTextColor: string;
    autoFocus: boolean;
    onValueChanged?(val:string):void;
    clearHandler?():void;
}

declare const SearchBar:FC<SearchBarProps>;