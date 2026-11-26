import React from 'react';
import { View, Text } from 'react-native';

export default function Section3() {
    return (
        <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {/* วงกลมคะแนน */}
                <View style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: '#e5634d',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>9.5</Text>
                </View>

                {/* ข้อความด้านขวา */}
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 18, color: '#e5634d', fontWeight: 'bold' }}>Excellent</Text>
                    <Text style={{ fontSize: 12, color: 'gray' }}>See 801 reviews</Text>
                </View>
            </View>
        </View>
    );
}