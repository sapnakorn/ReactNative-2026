import React from 'react';
import { View, Text } from 'react-native';

export default function Section4() {
    return (
        <View style={{
            padding: 20,
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#e0e0e0',
        }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
                Hotel Description
            </Text>
            <Text style={{ fontSize: 13, color: '#444' }}>
            </Text>
        </View>
    );
}