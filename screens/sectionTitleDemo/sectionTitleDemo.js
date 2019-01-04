import React, {Component} from 'react';
import {ScrollView} from "react-native";
import {DemoList} from "../component/DemoList";
import {SectionTitle} from "../../components/sectionTitle";


class SectionTitleDemo extends Component {
    static navigationOptions = {
        title: 'SectionTitleDemo'
    };

    render() {
        return (
            <ScrollView>
                <DemoList title={'默认样式\ntitle={\'市场焦点\'}'}>
                    <SectionTitle title={'市场焦点'}/>
                </DemoList>

                <DemoList title={'副标题\nsubTitle={\'更多\'}\n点击事件\nonPress={() => {alert(1)}}\n标题样式修改\ntitleStyle={{color:\'red\'}}\n副标题样式修改\ntitleStyle={{color:\'pink\'}}'}>
                    <SectionTitle title={'市场焦点'} subTitle={'更多'} titleStyle={{color:'red'}} subTitleStyle={{color:'pink'}} onPress={() => {
                        alert(1)
                    }}/>
                </DemoList>

                <DemoList title={'无副标题\nsubTitle={\' \'}\n修改背景色\ncontainerStyle={{backgroundColor:\'#d6d6d6\'}}'}>
                    <SectionTitle title={'市场焦点'} subTitle={' '} containerStyle={{backgroundColor:'#d6d6d6'}}/>
                </DemoList>

                <DemoList title={'更换图片\nsource={require(\'../../assets/images/Line_icon.png\')}'}>
                    <SectionTitle title={'市场焦点'} source={require('../../assets/images/Line_icon.png')} subTitle={'更多'}/>
                </DemoList>
            </ScrollView>
        )
    }
}

export default SectionTitleDemo;