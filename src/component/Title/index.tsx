import React form 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
    return (
        <View>
            <Text>Basic Component in RN</Text>
        </View>
    );   
};

const style = StyleSheet.create{(
    title: {
        fontSize : 20,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
)};

export default Title