import {ScrollView, Text, View} from "react-native";
import React, {PureComponent} from "react";
import {Progress} from "../../components/progress";
import {DemoList} from "../component/DemoList";
import {Touchable, TOUCHABLE_TYPES} from "../../components/touchable";

class ProgressDemo extends PureComponent {
    static navigationOptions = {
        title: 'DropDownDemo'
    };

    constructor(props) {
        super(props);

        this.state = {
            progress: 0,
            animated: true,
        };
    }

    componentDidMount() {
        this.animate();
    }

    loadCallBack = () => {
    };

    animate() {
        let progress = 0;
        this.setState({progress});
        setTimeout(() => {
            setInterval(() => {
                progress += 0.2;
                if (progress > 1) {
                    progress = 0;
                }
                this.setState({progress});
            }, 500);
        }, 1500);
    }

    render() {
        return (
            <ScrollView>
                <DemoList containStyle={{flexDirection: 'row'}}
                          title={`progress提供isShow() loading() loadEnd()方法来获取【当前显示状态，开始加载，结束加载】`}>
                    <Touchable style={{flex: 1}} touchComponent={TOUCHABLE_TYPES.OPACITY} onPress={() => {
                        this.progress1.isShow() ? this.progress1.loadStop() : this.progress1.loadStart();
                        this.progress2.isShow() ? this.progress2.loadStop() : this.progress2.loadStart();
                        this.progress3.isShow() ? this.progress3.loadStop() : this.progress3.loadStart();
                    }}>
                        <View style={{
                            flex: 1,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#a50be0'
                        }}>
                            <Text>切换加载状态</Text>
                        </View>
                    </Touchable>
                    <Touchable style={{flex: 1}} touchComponent={TOUCHABLE_TYPES.OPACITY} onPress={() => {
                        this.setState({
                            animated: !this.state.animated
                        })
                    }}>
                        <View style={{
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#a50be0'
                        }}>
                            <Text>切换动画开关</Text>
                        </View>
                    </Touchable>
                </DemoList>
                <DemoList containStyle={{alignItems: 'center'}}
                          title={`默认线条进度条,默认宽度100，高度100，传入进度值 \nprogress={this.state.progress}`}>
                    <Progress ref={(component) => this.progress1 = component} animated={this.state.animated}
                              progress={this.state.progress}/>
                </DemoList>
                <DemoList containStyle={{alignItems: 'center'}}
                          title={`默认线条进度条,无动画，传入进度值\nanimated={false} \nprogress={0.5}`}>
                    <Progress ref={(component) => this.progress1 = component} animated={false}
                              progress={0.5}/>
                </DemoList>
                <DemoList containStyle={{alignItems: 'center'}} title={`默认圆形进度条，\ntype={'circle'} `}>
                    <Progress ref={(component) => this.progress2 = component} animated={this.state.animated}
                              type={'circle'} progress={this.state.progress}/>
                </DemoList>
                <DemoList containStyle={{alignItems: 'center'}} title={`默认半圆圆形进度条，\ntype={'halfCircle'} `}>
                    <Progress animated={this.state.animated}
                              ref={(component) => this.progress3 = component} type={'halfCircle'}
                              progress={this.state.progress}/>
                </DemoList>
                <DemoList
                    containStyle={{alignItems: 'center'}}
                    title={`线条进度条，修改宽高,外边框颜色变化，两端去除圆角\nwidth={200} height={10} \nborderColor={'red'}\nborderRadius={0}`}>
                    <Progress type={'line'} progress={this.state.progress}
                              width={200} height={10}
                              borderColor={'red'} borderRadius={0}
                    />
                </DemoList>
                <DemoList containStyle={{alignItems: 'center'}}
                          title={`线条进度条,去除外边框，设置边框颜色也就没有效果了\nborderColor={'red'} \nborderWidth={0}`}>
                    <Progress type={'line'} progress={this.state.progress}
                              width={200} height={10}
                              borderColor={'red'} borderWidth={0}
                    />
                </DemoList>
                <DemoList
                    containStyle={{alignItems: 'center'}}
                    title={`线条进度条,设置加载中的进度条颜色和剩余进度的颜色,加载完成回调\ncolor={'yellow'} \nunfilledColor={'green'}\nonEnd={this.loadCallBack}`}>
                    <Progress type={'line'} progress={this.state.progress}
                              width={200} height={10}
                              borderColor={'red'} color={'yellow'} unfilledColor={'green'}
                              onEnd={this.loadCallBack}
                    />
                </DemoList>
                <DemoList
                    containStyle={{alignItems: 'center'}}
                    title={`圆形进度条，修改宽高，圆环宽度，设置加载中的进度条颜色和剩余进度的颜色\nwidth={150} \nheight={150} \ncolor={'red'} \nunfilledColor={'yellow'}\nthickness={10}`}>
                    <Progress type={'circle'} progress={this.state.progress}
                              width={150} height={150} color={'red'} unfilledColor={'yellow'}
                              thickness={10}
                    />
                </DemoList>
                <DemoList
                    containStyle={{alignItems: 'center'}}
                    title={`显示固定进度 \n animated={false} \n progress={0.2}`}>
                    <Progress type={'circle'} progress={0.2}
                              backgroundColor={'green'}
                              width={150} height={150} color={'red'} unfilledColor={'yellow'}
                              thickness={10} animated={false}
                    />
                </DemoList>

                <DemoList containStyle={{alignItems: 'center'}}
                          title={`圆形进度条，修改填充圆环的首尾样式,显示内部文字, \nfill={'greed'} \nstrokeCap={'round'}\nshowsText={true}`}>
                    <Progress type={'circle'} progress={this.state.progress}
                              color={'red'} unfilledColor={'yellow'}
                              showsText={true} strokeCap={'round'} thickness={10}
                    />
                </DemoList>
                <DemoList containStyle={{alignItems: 'center'}}
                          title={`圆形进度条，修完成整体加载需要的时间，修改加载方向\nduration={1000} \ndirection={'counter-clockwise'}`}>
                    <Progress type={'circle'} progress={this.state.progress}
                              duration={10000} direction={'counter-clockwise'}
                    />
                </DemoList>
                <DemoList
                    containStyle={{alignItems: 'center'}}
                    title={`圆形进度条，加载完成回调,传入子组件\nshowsText={true} \nonEnd={this.loadCallBack}`}>
                    <Progress type={'circle'} progress={this.state.progress}
                              color={'red'} unfilledColor={'yellow'}
                              thickness={10} showsText={true} onEnd={this.loadCallBack}
                    >
                        <Text>{this.state.progress}</Text>
                    </Progress>
                </DemoList>
                <DemoList
                    containStyle={{alignItems: 'center'}}
                    title={`半圆形进度条，修改宽高，圆环宽度，设置加载中的进度条颜色和剩余进度的颜色\nwidth={100} \nheight={100} \ncolor={'red'} \nunfilledColor={'yellow'}\nthickness={10}`}>
                    <Progress type={'halfCircle'} progress={this.state.progress}
                              width={100} height={100} color={'red'} unfilledColor={'yellow'}
                              strokeCap={'round'}
                              thickness={10}
                    />
                </DemoList>
                <DemoList containStyle={{alignItems: 'center'}} title={`半圆形进度条，修完成整体加载需要的时间\nduration={1000}`}>
                    <Progress type={'halfCircle'} progress={this.state.progress}
                              width={100} height={100} duration={10000}
                    />
                </DemoList>
                <DemoList containStyle={{alignItems: 'center'}}
                          title={`半圆形进度条,显示内部文字,加载完成回调 \nshowsText={true} \nonEnd={this.loadCallBack}`}>
                    <Progress type={'halfCircle'} progress={this.state.progress}
                              width={100} height={100} color={'red'} unfilledColor={'yellow'}
                              thickness={10} onEnd={this.loadCallBack} showsText={true}
                    />
                </DemoList>
            </ScrollView>
        );
    }
}

export default ProgressDemo;