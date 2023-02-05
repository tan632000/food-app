import React, {useState, useRef, useContext} from "react";
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import { Icon, Button, SocialIcon } from "react-native-elements";
import * as Animatable from 'react-native-animatable'
import Header from "../../components/Header";
import { colors, parameters, title } from "../../global/style";
import { useNavigation } from "@react-navigation/native";
import { Formik } from 'formik';
import auth from '@react-native-firebase/auth';
import { SignInContext } from "../../contexts/authContext";

export default function SignInScreen () {
    const navigation = useNavigation()
    const {dispatchSignedIn} = useContext(SignInContext)
    const [textInput2Focussed, setTextInput2Focussed] = useState(false);
    const textInput1 = useRef(1);
    const textInput2 = useRef(2);

    function signIn(data) {
        try {
            const {email, password} = data
            auth()
                .signInWithEmailAndPassword(email, password)
                .then((data) => {
                    console.log('User sign in successfully', data);
                    dispatchSignedIn({type: "UPDATE_SIGN_IN", payload: {userToken: "signed-in"}})
                })
                .catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                    }

                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                    }

                    console.error(error);
                });
        } catch (error) {
            Alert.alert(
                error.name, error.message
            )
        }
        
    }
    return (
        <View style={styles.container}>
            <Header title="MY ACCOUNT" type="arrow-left" navigation={navigation} />
            <View style={{marginTop: 20, marginLeft: 20}}>
                <Text style={title}>Sign In</Text>
            </View>
            <View style={{alignItems: "center", marginTop: 10, marginBottom: 20}}>
                <Text style={styles.text1}>Please enter the email and password</Text>
                <Text style={styles.text1}>registered with your account</Text>
            </View>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values) => {
                    signIn(values)
                }}
            >
                {(props) =>
                    <View>
                        <View>
                            <TextInput
                                style={styles.textInput1}
                                placeholder="Email"
                                ref={textInput1}
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                            />
                        </View>
                        <View style={styles.textInput2}>
                            <Animatable.View>
                                <Icon
                                    name="lock"
                                    iconStyle={{color: colors.gray3}}
                                    type="material"
                                />
                            </Animatable.View>
                            <TextInput
                                style={{width: '80%'}}
                                placeholder="Password"
                                ref={textInput2}
                                onFocus={() => {setTextInput2Focussed(false)}}
                                onBlur={() => {setTextInput2Focussed(true)}}
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                            />
                            <Animatable.View animation={textInput2Focussed ? "" : "fadeInLeft"} duration={400}>
                                <Icon
                                    name="visibility-off"
                                    iconStyle={{color: colors.gray3}}
                                    type="material"
                                    style={{marginRight: 10}}
                                />
                            </Animatable.View>
                        </View>
                        <View style={{marginHorizontal: 20, marginTop: 20}}>
                            <Button
                                title="SIGN IN"
                                buttonStyle={parameters.styledButton}
                                titleStyle={parameters.buttonTitle}
                                onPress={props.handleSubmit}
                            />
                        </View>
                    </View>
                }
                
            </Formik>
            <View>
                <View style={{marginTop: 20, alignItems: "center"}}>
                    <Text style={{...styles.text1, textDecorationLine: "underline"}}>Forget Password ?</Text>
                </View>
                <View style={{alignItems: "center", marginTop: 30}}>
                    <Text style={{fontSize: 20, fontWeight: "bold", color: "black"}}>OR</Text>
                </View>

                <View style={{marginHorizontal: 10, marginTop: 30}}>
                    <SocialIcon
                        title="Sign In With Facebook"
                        button
                        type="facebook"
                        style={styles.socialIcon}
                        onPress={() => {}}
                    />
                </View>
                <View style={{marginHorizontal: 10, marginTop: 10}}>
                    <SocialIcon
                        title="Sign In With Google"
                        button
                        type="google"
                        style={styles.socialIcon}
                        onPress={() => {}}
                    />
                </View>
                <View style={{marginTop: 20, marginLeft: 20}}>
                    <Text style={{...styles.text1}}>New on XPress Food ?</Text>
                </View>
                <View style={{marginTop: 10, alignItems: "flex-end", marginRight: 20}}>
                    <Button
                        title="Create an account"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                        onPress={() => {navigation.navigate('SignUpScreen')}}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text1: {
        color: colors.gray1,
        fontSize: 16
    },
    textInput1: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 15
    },
    textInput2: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        paddingLeft: 15
    },
    socialIcon: {
        borderRadius: 12,
        height: 50
    },
    createButton: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        height: 40,
        borderWidth: 1,
        borderColor: "#ff8c52",
        paddingHorizontal: 20
    },
    createButtonTitle: {
        color: "#ff8c52",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        marginTop: -3
    }
})