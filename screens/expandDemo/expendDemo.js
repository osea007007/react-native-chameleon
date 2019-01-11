import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import Expand from "../../components/expand";
import {Touchable, TOUCHABLE_TYPES} from "../../components/touchable";


class ExpandDemo extends Component {

    showOrHide = () => {
        this.exp.isShow() ? this.exp.hide() : this.exp.show();
    };

    render() {
        return (
            <ScrollView>
                <DemoList title={'设置contentStyle'}>
                        <Expand headerLeftText={'Demo1'}
                                contentStyle={{backgroundColor: '#5FB6FF'}}>
                            <View>
                                <Text>
                                    那天下午赫里内勒多·马尔克斯上校收到了奥雷里亚诺·布恩迪亚上校的电报。那是一次例行公事的谈话，没有为胶着的战局带来任何突破。
                                    谈话即将结束时，赫里内勒多·马尔克斯上校望着荒凉的街道、巴旦杏树上凝结的水珠，感觉自己在孤独中迷失了。
                                    “奥雷里亚诺，”他悲伤地敲下发报键，“马孔多在下雨。”
                                </Text>
                            </View>
                        </Expand>
                </DemoList>

                <DemoList title={'设置header'}>
                        <Expand headerLeftText={'Demo2'}
                                showHeader={true}
                                headerTitle={'标题'}
                                headerTitleStyle={{color: 'red', fontSize: 16}}
                                contentStyle={{backgroundColor: '#5FB6FF', padding: 4}}>
                            <View>
                                <Text>
                                    那天下午赫里内勒多·马尔克斯上校收到了奥雷里亚诺·布恩迪亚上校的电报。那是一次例行公事的谈话，没有为胶着的战局带来任何突破。
                                    谈话即将结束时，赫里内勒多·马尔克斯上校望着荒凉的街道、巴旦杏树上凝结的水珠，感觉自己在孤独中迷失了。
                                    “奥雷里亚诺，”他悲伤地敲下发报键，“马孔多在下雨。”
                                </Text>
                            </View>
                        </Expand>
                </DemoList>

                <DemoList title={'不显示 header'}>
                    <Expand ref={(exp) => this.exp = exp}
                            showHeader={false}
                            contentStyle={{backgroundColor: '#5FB6FF', padding: 4}}>
                        <View>
                            <Text>
                                那天下午赫里内勒多·马尔克斯上校收到了奥雷里亚诺·布恩迪亚上校的电报。那是一次例行公事的谈话，没有为胶着的战局带来任何突破。
                                谈话即将结束时，赫里内勒多·马尔克斯上校望着荒凉的街道、巴旦杏树上凝结的水珠，感觉自己在孤独中迷失了。
                                “奥雷里亚诺，”他悲伤地敲下发报键，“马孔多在下雨。”
                            </Text>
                        </View>
                    </Expand>
                    <Text style={{padding:4}} onPress={this.showOrHide}>点击展开或收缩</Text>
                </DemoList>
            </ScrollView>
        )
    }
}

export default ExpandDemo;