import React, { useState, useRef } from "react";
import { Modal, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, View, TextInput, FlatList, Keyboard } from "react-native";
import { Icon } from "react-native-elements";
import * as Animatable from 'react-native-animatable'
import { colors } from "../global/style";
import { filterData } from "../global/data";
import { useNavigation } from "@react-navigation/native";
import { filter } from "lodash";

export default function Search() {
    const [modalVisible, setModalVisible] = useState(false)
    const [textInputFocussed, setTextInputFocussed] = useState(true)
    const textInput = useRef(0);
    const [data, setData] = useState([...filterData])
    const navigation = useNavigation();
    const contains = ({name}, query) => {
        if (name.includes(query)) return true;
        return false;
    }
    const handleSearch = text => {
        let dataSearch = filter(filterData, userSreach => {
            return contains(userSreach, text);
        })
        setData([...dataSearch]);
    }
    return (
        <View style={{alignItems: 'center'}}>
            <TouchableWithoutFeedback
                onPress={() => {setModalVisible(true)}}
            >
                <View style={styles.searchArea                }>
                    <Icon
                        name="search"
                        type="material"
                        style={styles.searchIcon}
                        iconStyle={{marginLeft: 5}}
                        size={32}
                    />
                    <Text style={{fontSize: 15}}>What are you looking for?</Text>
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType="fade"
                transparent={false}
                visible={modalVisible}
            >
                <View style={styles.modal}>
                    <View style={styles.view1}>
                        <View style={styles.textInput}>
                            <Animatable.View
                                animation={textInputFocussed ? 'fadeInRight': 'fadeInLeft'}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFocussed ? 'arrow-back' : 'search'}
                                    onPress={() => {
                                        if (textInputFocussed) 
                                            setModalVisible(false)
                                            setTextInputFocussed(false)
                                    }}
                                    style={styles.icon2}
                                    type="material"
                                    iconStyle={{marginRight: 5}}
                                />
                            </Animatable.View>
                            <TextInput 
                                style={{width: '90%'}}
                                placeholder=""
                                autoFocus={false}
                                ref={textInput}
                                onFocus={() => {
                                    setTextInputFocussed(true)
                                }}
                                onBlur={() => {
                                    setTextInputFocussed(false)
                                }}
                                onChangeText={handleSearch}
                            />
                            <Animatable.View
                                animation={textInputFocussed ? 'fadeInLeft': ''}
                                duration={400}
                            >
                                <Icon
                                    name={textInputFocussed ? 'cancel' : null}
                                    onPress={() => {
                                        textInput.current.clear()
                                        // handleSearch()
                                    }}  
                                    style={{marginRight: -10}}
                                    type    ="material"
                                    iconStyle={{color: colors.grey3}}
                                />
                            </Animatable.View>
                        </View>
                    </View>
                    <FlatList
                        data={data}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => {
                                    Keyboard.dismiss
                                    navigation.navigate('SearchResultScreen', {item: item.name})
                                    setModalVisible(false)
                                    setTextInputFocussed(true)
                                }}
                            >
                                <View style={styles.view2}>
                                    <Text style={{color: colors.grey2, fontSize: 15}}>{item.name}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.grey2,
        fontSize: 16
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 0,
        borderColor: '#86939e',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    },
    searchArea: {
        marginTop: 10,
        width: '94%',
        height: 50,
        backgroundColor: colors.grey5,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.grey4,
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchIcon: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2
    },
    view1: {
        height: 70,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    view2: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center'
    },
    icon2: {
        fontSize: 24,
        padding: 5,
        color: colors.grey2
    },
    modal: {
        flex: 1
    }
})