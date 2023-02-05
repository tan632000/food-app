import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements";
import { menuData, specialData } from "../../global/data";
import { colors } from '../../global/style'

export default function MenuScreen({restaurant, onPress}) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                {
                    specialData.map((item) => (
                        <View key={item.key} style={styles.view1}>
                            <TouchableOpacity
                                onPress={onPress}
                            >
                                <View style={styles.view2}>
                                    <Icon
                                        name="star"
                                        type="material-community"
                                        size={18}
                                        color={colors.statusBar}
                                    />
                                    <Text style={styles.text1}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
            <View>
                {
                    menuData.map((item) => (
                        <View key={item.key} style={styles.view1}>
                            <TouchableOpacity
                                onPress={onPress}
                            >
                                <View style={styles.view2}>
                                    <Text style={styles.text1}>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    view1: {
        paddingHorizontal: 10
    },
    view2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        padding: 10,
        borderBottomColor: colors.grey5
    },
    text1: {
        color: colors.grey3,
        fontSize: 18,
        fontWeight: 'bold'
    }
})