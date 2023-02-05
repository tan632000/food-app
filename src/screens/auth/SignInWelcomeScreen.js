import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { Button, Image } from "react-native-elements";
import Swiper from 'react-native-swiper/src';
import { colors, parameters } from "../../global/style";
import { useNavigation } from "@react-navigation/native";

const SignInWelcomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop: 20}}>
                <Text style={styles.text}>DISCOVER RESTAURANTS</Text>
                <Text style={styles.text}>IN YOUR AREA</Text>
            </View>
            <View style={{flex: 1, justifyContent: "center"}}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image
                            source={require('../../assets/fastfood.png')}
                            style={{width: "100%", height: "100%"}}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            source={require('../../assets/hotdog.jpg')}
                            style={{width: "100%", height: "100%"}}
                        />
                    </View>
                    <View style={styles.slide3}>
                        <Image
                            source={require('../../assets/seafood.jpg')}
                            style={{width: "100%", height: "100%"}}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{flex: 1, justifyContent: "flex-end", paddingBottom: 20}}>
                <View style={{marginHorizontal: 20, marginTop: 20}}>
                    <Button
                        title="SIGN IN"
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}
                        onPress={() => navigation.navigate('SignInScreen')}
                    />
                </View>
                <View style={{marginHorizontal: 20, marginTop: 30}}>
                    <Button
                        title="Create your account"
                        buttonStyle={styles.createButton}
                        titleStyle={parameters.createButton}
                        onPress={() => navigation.navigate('SignUpScreen')}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        fontWeight: "bold",
        color: colors.buttons
    },
    slide1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#9DD6EB"
    },
    slide2: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#97CAE5"
    },
    slide3: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#92BBD9"
    },
    createButton: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        height: 50,
        borderWidth: 1,
        borderColor: "#ff8c52",
        paddingHorizontal: 20,
        color: "black"
    }
})

export default SignInWelcomeScreen