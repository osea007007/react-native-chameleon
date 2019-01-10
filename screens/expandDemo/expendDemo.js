import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import Expand from "../../components/expand";


class ExpandDemo extends Component {

    showOrHide1 = (expand) => {
        if (expand) {
            this.exp1.hide();
        } else {
            this.exp1.show(this.content);
        }
    };
    showOrHide2 = (expand) => {
        if (expand) {
            this.exp2.hide();
        } else {
            this.exp2.show(this.content);
        }
    };
    showOrHide3 = (expand) => {
        if (expand) {
            this.exp3.hide();
        } else {
            this.exp3.show(this.content);
        }
    };

    render() {
        return (
            <ScrollView>
                <DemoList title={'设置contentStyle'}>
                    <Expand ref={(exp) => this.exp1 = exp} headerLeftText={'Demo1'}
                            contentStyle={{backgroundColor: '#5FB6FF', padding: 4}} onExpandChanged={this.showOrHide1}>
                        <View ref={(content) => this.content = content}>
                            <Text>
                                那天下午赫里内勒多·马尔克斯上校收到了奥雷里亚诺·布恩迪亚上校的电报。那是一次例行公事的谈话，没有为胶着的战局带来任何突破。
                                谈话即将结束时，赫里内勒多·马尔克斯上校望着荒凉的街道、巴旦杏树上凝结的水珠，感觉自己在孤独中迷失了。
                                “奥雷里亚诺，”他悲伤地敲下发报键，“马孔多在下雨。”
                            </Text>
                        </View>
                    </Expand>
                </DemoList>

                <DemoList title={'设置header'}>
                    <Expand ref={(exp) => this.exp2 = exp}
                            headerLeftText={'Demo1'}
                            showHeader={true}
                            headerTitle={'标题'}
                            headerTitleStyle={{color: 'red', fontSize: 16}}
                            contentStyle={{backgroundColor: '#5FB6FF', padding: 4}}
                            onExpandChanged={this.showOrHide2}>
                        <View ref={(content) => this.content = content}>
                            <Text>
                                那天下午赫里内勒多·马尔克斯上校收到了奥雷里亚诺·布恩迪亚上校的电报。那是一次例行公事的谈话，没有为胶着的战局带来任何突破。
                                谈话即将结束时，赫里内勒多·马尔克斯上校望着荒凉的街道、巴旦杏树上凝结的水珠，感觉自己在孤独中迷失了。
                                “奥雷里亚诺，”他悲伤地敲下发报键，“马孔多在下雨。”
                            </Text>
                        </View>
                    </Expand>
                </DemoList>

                <DemoList title={'设置headerContainerStyle'}>
                    <Expand ref={(exp) => this.exp3 = exp}
                            headerLeftText={'Demo1'}
                            headerLeftTextStyle={{color:'#22FF3D'}}
                            showHeader={true}
                            headerTitle={'标题'}
                            headerTitleStyle={{color: '#383838', fontSize: 16}}
                            headerContainerStyle={{backgroundColor: '#FF6775', padding: 4}}
                            contentStyle={{backgroundColor: '#5FB6FF', padding: 4}}
                            onExpandChanged={this.showOrHide3}>
                        <View ref={(content) => this.content = content}>
                            <Text>
                                那天下午赫里内勒多·马尔克斯上校收到了奥雷里亚诺·布恩迪亚上校的电报。那是一次例行公事的谈话，没有为胶着的战局带来任何突破。
                                谈话即将结束时，赫里内勒多·马尔克斯上校望着荒凉的街道、巴旦杏树上凝结的水珠，感觉自己在孤独中迷失了。
                                “奥雷里亚诺，”他悲伤地敲下发报键，“马孔多在下雨。”
                            </Text>
                        </View>
                    </Expand>
                </DemoList>


            </ScrollView>
        )
    }
}

export default ExpandDemo;