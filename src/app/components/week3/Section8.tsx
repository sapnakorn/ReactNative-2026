import React from 'react';
import { View, Text, Image } from 'react-native';

export default function Section7() {
    return (
        <View style={{ padding: 20 }}>
            <View style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Room Type</Text>
            </View>

            <View style={{ flexDirection: 'row' }}>
                <View>
                    <Image
                        style={{ width: 90, height: 100, borderRadius: 10 }}
                        source={require('../../assets/week3/room-8.jpg')}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 15, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                        Standard Twin Room
                    </Text>
                    <View>
                        <Text style={{ fontSize: 18, color: '#e5634d', fontWeight: 'bold' }}>
                            $399.99
                        </Text>
                        <Text style={{ fontSize: 12, color: '#5c9ead' }}>
                            Hurry Up! This is your last room!
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}