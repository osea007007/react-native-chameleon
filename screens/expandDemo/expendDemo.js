import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native";
import {DemoList} from "../component/DemoList";
import Expand from "../../components/expand";
import {Touchable, TOUCHABLE_TYPES} from "../../components/touchable";


class ExpandDemo extends Component {

    showOrHide1 = () => {
        this.exp1.isShow() ? this.exp1.hide() : this.exp1.show();
    };
    showOrHide2 = () => {
        this.exp2.isShow() ? this.exp2.hide() : this.exp2.show();
    };
    showOrHide3 = () => {
        this.exp3.isShow() ? this.exp3.hide() : this.exp3.show();
    };

    render() {
        return (
            <ScrollView>
                <DemoList title={'设置contentStyle'}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.OPACITY} onPress={this.showOrHide1}>
                        <Expand ref={(exp) => this.exp1 = exp} headerLeftText={'Demo1'}
                                contentStyle={{backgroundColor: '#5FB6FF'}}>
                            <View>
                                <Text>
                                    那天下午赫里内勒多·马尔克斯上校收到了奥雷里亚诺·布恩迪亚上校的电报。那是一次例行公事的谈话，没有为胶着的战局带来任何突破。
                                    谈话即将结束时，赫里内勒多·马尔克斯上校望着荒凉的街道、巴旦杏树上凝结的水珠，感觉自己在孤独中迷失了。
                                    “奥雷里亚诺，”他悲伤地敲下发报键，“马孔多在下雨。”
                                </Text>
                            </View>
                        </Expand>
                    </Touchable>
                </DemoList>

                <DemoList title={'设置header'}>
                    <Touchable touchComponent={TOUCHABLE_TYPES.OPACITY} onPress={this.showOrHide2}>
                        <Expand ref={(exp) => this.exp2 = exp}
                                headerLeftText={'Demo2'}
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
                    </Touchable>
                </DemoList>

                <DemoList title={'不显示 header'}>
                    <Expand ref={(exp) => this.exp3 = exp}
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
                    <Text style={{padding:4}} onPress={this.showOrHide3}>点击展开或收缩</Text>
                </DemoList>
            </ScrollView>
        )
    }
}

export default ExpandDemo;