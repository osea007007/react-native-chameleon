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
                <DemoList title={`progress提供isShow() loading() loadEnd()方法来获取【当前显示状态，开始加载，结束加载】`}>
                <Touchable touchComponent={TOUCHABLE_TYPES.OPACITY} onPress={() => {
                    this.progress1.getRef().isShow() ? this.progress1.getRef().loadEnd() : this.progress1.getRef().loading();
                    this.progress2.getRef().isShow() ? this.progress2.getRef().loadEnd() : this.progress2.getRef().loading();
                    this.progress3.getRef().isShow() ? this.progress3.getRef().loadEnd() : this.progress3.getRef().loading();
                }}>
                    <View style={{
                        height: 50,
                        width: 80,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#a50be0'
                    }}>
                        <Text>切换加载状态</Text>
                    </View>
                </Touchable>
                </DemoList>
                <DemoList title={`默认线条进度条,默认宽度150，高度6，传入进度值 \nproType={'line'} \nprogress={this.state.progress}`}>
                    <Progress ref={(component) => this.progress1 = component}  proType={'line'} progress={this.state.progress}/>
                </DemoList>
                <DemoList title={`默认圆形进度条，默认宽高200，传入进度值\nproType={'circle'} \nprogress={this.state.progress}`}>
                    <Progress ref={(component) => this.progress2 = component} proType={'circle'} progress={this.state.progress}/>
                </DemoList>
                <DemoList title={`默认半圆圆形进度条，默认宽高200，传入进度值\nproType={'halfCircle'} \nprogress={this.state.progress}`}>
                    <Progress ref={(component) => this.progress3 = component} proType={'halfCircle'} progress={this.state.progress}/>
                </DemoList>

                <DemoList
                    title={`线条进度条，修改宽高,外边框颜色变化，两端去除圆角\nwidth={200} \nheight={10} \nborderColor={'red'}\nborderRadius={0}`}>
                    <Progress proType={'line'} progress={this.state.progress}
                              width={200} height={10}
                              borderColor={'red'} borderRadius={0}
                    />
                </DemoList>
                <DemoList title={`线条进度条,去除外边框，设置颜色也就没有效果了\nborderColor={'red'} \nborderWidth={0}`}>
                    <Progress proType={'line'} progress={this.state.progress}
                              borderColor={'red'} borderWidth={0}
                    />
                </DemoList>
                <DemoList
                    title={`线条进度条,设置加载中的进度条颜色和剩余进度的颜色,加载完成回调\ncolor={'yellow'} \nunfilledColor={'green'}\nonEnd={this.loadCallBack}`}>
                    <Progress proType={'line'} progress={this.state.progress}
                              borderColor={'red'} color={'yellow'} unfilledColor={'green'}
                              onEnd={this.loadCallBack}
                    />
                </DemoList>
                <DemoList
                    title={`圆形进度条，修改宽高，圆环宽度，设置加载中的进度条颜色和剩余进度的颜色\nwidth={100} \nheight={100} \ncolor={'red'} \nunfilledColor={'yellow'}\nthickness={10}`}>
                    <Progress proType={'circle'} progress={this.state.progress}
                              width={100} height={100} color={'red'} unfilledColor={'yellow'}
                              thickness={10}
                    />
                </DemoList>
                <DemoList title={`圆形进度条，修改填充圆环的首尾样式,显示内部文字, \nfill={'greed'} \nstrokeCap={'butt'}\nshowsText={true}`}>
                    <Progress proType={'circle'} progress={this.state.progress}
                              width={100} height={100} color={'red'} unfilledColor={'yellow'}
                              showsText={true} strokeCap={'butt'} thickness={10}
                    />
                </DemoList>
                <DemoList title={`圆形进度条，修完成整体加载需要的时间，修改加载方向\nduration={1000} \ndirection={'counter-clockwise'}`}>
                    <Progress proType={'circle'} progress={this.state.progress}
                              width={100} height={100} duration={10000} direction={'counter-clockwise'}
                    />
                </DemoList>
                <DemoList title={`圆形进度条，加载完成回调,修改文字样式 \nshowsText={true} \nonEnd={this.loadCallBack}\ntextStyle={{fontSize:10,textColor: 'yellow'}}`}>
                    <Progress proType={'circle'} progress={this.state.progress}
                              width={100} height={100} color={'red'} unfilledColor={'yellow'}
                              thickness={10} showsText={true} onEnd={this.loadCallBack}
                              textStyle={{fontSize:10,color: 'yellow'}}
                    />
                </DemoList>
                <DemoList
                    title={`半圆形进度条，修改宽高，圆环宽度，设置加载中的进度条颜色和剩余进度的颜色\nwidth={100} \nheight={100} \ncolor={'red'} \nunfilledColor={'yellow'}\nthickness={10}`}>
                    <Progress proType={'halfCircle'} progress={this.state.progress}
                              width={100} height={100} color={'red'} unfilledColor={'yellow'}
                              thickness={10}
                    />
                </DemoList>
                <DemoList title={`半圆形进度条，修完成整体加载需要的时间\nduration={1000}`}>
                    <Progress proType={'halfCircle'} progress={this.state.progress}
                              width={100} height={100} duration={10000}
                    />
                </DemoList>
                <DemoList title={`半圆形进度条,显示内部文字,加载完成回调 \nshowsText={true} \nonEnd={this.loadCallBack}`}>
                    <Progress proType={'halfCircle'} progress={this.state.progress}
                              width={100} height={100} color={'red'} unfilledColor={'yellow'}
                              thickness={10} onEnd={this.loadCallBack} showsText={true}
                    />
                </DemoList>
                <DemoList
                    title={`半圆形进度条,显示内部文字,修改内部文字样式 \nshowsText={true} \ntitleStyle={{fontSize: 6}} \ntextStyle={{color: 'red', fontSize: 20}}\nonEnd={this.loadCallBack}`}>
                    <Progress proType={'halfCircle'} progress={this.state.progress}
                              width={100} height={100} color={'red'} unfilledColor={'yellow'}
                              thickness={10} onEnd={this.loadCallBack} showsText={true}
                              titleStyle={{fontSize: 6}} textStyle={{color: 'red', fontSize: 20}}
                    />
                </DemoList>
            </ScrollView>
        );
    }
}

export default ProgressDemo;