import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Flights = (props) => {
    return (
        <View style={Styles.item}>
            <Text style={Styles.itemText}>{props.text}</Text>
                {/* <Text>{date.text}</Text> */}
        </View>
    )
}

const Styles = StyleSheet.create({
    item: {
        backgroundColor: '#E3E3E3',
        padding: 20,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,

    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    itemText: {

    },
});

export default Flights;
