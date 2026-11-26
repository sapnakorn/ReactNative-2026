import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Section6() {
    return (
        <View style={{
            flexDirection: 'column',
            padding: 20,
            borderBottomWidth: 1,
            borderColor: '#e0e0e0',
        }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
                Location
            </Text>
            <Text style={{ fontSize: 13, color: '#444', marginBottom: 15 }}>
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Image
                    style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 9 }}
                    source={require('../../assets/week3/map.jpg')}
                />
            </View>
        </View>
    );
}