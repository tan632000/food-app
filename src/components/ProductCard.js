import React from "react";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../global/style";

export default function ProductCard({productName, price, image}) {
    return (
        <View style={styles.view1}>
            <View style={styles.view2}>
                <View style={styles.view3}>
                    <Text style={styles.text1}>{productName}</Text>
                    <Text style={styles.text1}>ZAR{price}</Text>
                </View>
                <View style={styles.view4}>
                    <Image style={styles.image} source={image} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        backgroundColor: '#fff',
        elevation: 4,
        shadowOpacity: 0.4,
        shadowColor: 'black',
        margin: 5, 
        width: 210,
        padding: 10
    },
    view2: {
        flexDirection: 'row',
        padding: 0,
        justifyContent: 'space-between'
    },
    view3: {
        justifyContent: 'space-between',
        width: 120
    },
    text1: {
        fontSize: 15,
        color: colors.grey1
    },
    view4: {
        height: 65,
        width: 75
    },
    image: {
        height: 65,
        width: 75
    }
})