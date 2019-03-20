import React from 'react'
import {PureComponent} from 'react'
import {StyleSheet, View, Text} from 'react-native'

interface Props {

}

interface State {

}

export default class Home extends React.Component {
    render() {
        return (
            <View style= {styles.container}>
                <Text style= {styles.text}>Home screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        color: 'red'
    }
})