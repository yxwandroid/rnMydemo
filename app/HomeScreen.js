import React from 'react';
import {
    View,
    Button,
    Text,
} from 'react-native';

/**
 * 应用的主界面
 */
export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>

                <Button
                    //image 的使用
                    onPress={() => navigate('ImageDemo')}
                    title="image的使用"
                />

                <Button
                    //定时器使用 的使用
                    onPress={() => navigate('CountDown')}
                    title="定时器使用"
                />


                <Button
                    //点赞控件
                    onPress={() => navigate('Likes')}
                    title="点赞控件"
                />
                <Button
                    //跳转界面   并且传递参数
                    onPress={() => navigate('NavigationDemo1', {user: 'wilson'})}
                    title="react-navigation 传递参数"
                />
                <Button
                    //跳转界面   并且传递参数
                    onPress={() => navigate('HomePage', {user: 'wilson'})}
                    title="tabstackdrawer使用"
                />
                <Button
                    //全局变量和 Storage 界面
                    onPress={() => navigate('GlobaStoragelUtil')}
                    title="全局变量和是 Storage 的使用"
                />

            </View>
        );
    }
}
