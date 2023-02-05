import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MenuCard from "../components/MenuCard";
import { menuDetailData } from "../global/data";
import { colors } from "../global/style";

export function Route1() {
    return (
        <View style={{flex: 1}}>
            <View style={styles.view2}>
                <FlatList
                    data={menuDetailData}
                    style={{backgroundColor: colors.white}}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item, index}) => (
                        <TouchableOpacity>
                            <MenuCard
                                productName={item.meal}
                                productDetails={item.details}
                                image={item.image}
                                price={item.price}
                            />
                        </TouchableOpacity>
                    )}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

export const Route2 = () => (<View style={styles.scene}></View>)

export const Route3 = () => (<View style={styles.scene}></View>)

export const Route4 = () => (<View style={{...styles.scene, backgroundColor: '#00ff00'}}></View>)

export const Route5 = () => (<View style={styles.scene}></View>)

export const Route6 = () => (<View style={styles.scene}></View>)

export const Route7 = () => (<View style={styles.scene}></View>)

export const Route8 = () => (<View style={styles.scene}></View>)

const styles = StyleSheet.create({
    scene: {
        flex: 1,
        backgroundColor: '#673ab7'
    },
    view2: {
        marginTop: 5,
        paddingBottom: 20
    },
    scene2: {
        backgroundColor: '#673ab7'
    }
})