import React, { FC } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
    StyleSheet,
} from 'react-native';

interface Props {
    // Add props types here if needed
}

const MyComponent: FC<Props> = ({}) => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://example.com/image.jpg' }} style={styles.image} />
            </View>
            <TextInput style={styles.input} placeholder="Enter some text" />
            <Text style={styles.text}>Hello, World!</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        paddingLeft: 10,
    },
    text: {
        textAlign: 'center',
        marginTop: 20,
    },
});

export default MyComponent;