import React from 'react';
import { View } from 'react-native';
import MyIcon from './MyIcon'; 

export default function Section5() {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderColor: '#e0e0e0',
        }}>
            <MyIcon title="wifi" name="wifi" size={24} color="#5c9ead" />
            <MyIcon title="coffee" name="coffee" size={24} color="#5c9ead" />
            <MyIcon title="bath" name="bath" size={24} color="#5c9ead" />
            <MyIcon title="car" name="car" size={24} color="#5c9ead" />
            <MyIcon title="paw" name="paw" size={24} color="#5c9ead" />
        </View>
    );
}