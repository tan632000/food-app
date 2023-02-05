import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantHomeScreen from "../screens/RestaurantHomeScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import SearchScreen from "../screens/SearchScreen";
import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";
import MenuProductScreen from "../screens/MenuProductScreen";

const ClientSearch = createNativeStackNavigator();

export default function ClientStack({route}) {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);
        if (routeName === 'RestaurantHomeScreen' || routeName === 'MenuProductScreen') {
            navigation.setOptions({tabBarStyle: {display: 'none'}})
        } else {
            navigation.setOptions({tabBarStyle: {display: 'flex'}})
        }
    }, [navigation, route])
    return (
        <ClientSearch.Navigator>
            <ClientSearch.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />
            <ClientSearch.Screen
                name="SearchResultScreen"
                component={SearchResultScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />
            <ClientSearch.Screen
                name="RestaurantHomeScreen"
                component={RestaurantHomeScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />
            <ClientSearch.Screen
                name="MenuProductScreen"
                component={MenuProductScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />
        </ClientSearch.Navigator>
    )
}
const styles = StyleSheet.create({

})