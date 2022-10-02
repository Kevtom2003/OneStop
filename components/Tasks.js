import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Tasks = (props) => {
    return (
        // all pieces of text in the item //
        <View style={Styles.item}>
            {/*all items left aligned */}
            <View style = {Styles.itemLeft}>
                <TouchableOpacity style={Styles.square}></TouchableOpacity>
                <Text style={Styles.itemText}>{props.text}</Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    item: {
        backgroundColor: '#D7FBDD',
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
    square: {
        width: 20,
        height: 20,
        backgroundColor: '#FFF',
        opacity: 0.6,
        borderRadius: 5,
        marginRight: 15,
        borderColor: '#000000',
        borderWidth: 3,
    },
});

export default Tasks;
