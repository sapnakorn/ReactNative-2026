import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Section2() {
    return (
        <View style={{
            flex: 1,
            marginTop: -25,
            marginHorizontal: 20,
            padding: 15,
            backgroundColor: '#f5f5f5',
            borderRadius: 10,
            elevation: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 4,
        }}>
            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>
                Hilton San Francisco
            </Text>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 5 }}>
                <FontAwesome name="star" size={16} color="orange" />
                <FontAwesome name="star" size={16} color="orange" />
                <FontAwesome name="star" size={16} color="orange" />
                <FontAwesome name="star" size={16} color="orange" />
                <FontAwesome name="star-half-empty" size={16} color="orange" />
            </View>

            <Text style={{ textAlign: 'center', fontSize: 12, color: 'gray' }}>
            </Text>
        </View>
    );
}