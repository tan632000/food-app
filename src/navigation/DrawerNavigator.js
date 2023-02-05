import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import RootClientTabs from "./ClientTabs";
import { Icon } from "react-native-elements";
import { colors } from "../global/style";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreeen";
import DrawerElement from "../components/DrawerElement";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerElement {...props} />}
        >
            <Drawer.Screen
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    title: 'Client',
                    drawerIcon: ({focussed, size}) => (
                        <Icon
                            type="material-community"
                            name="home"
                            color={focussed ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="BusinessConsoleScreen"
                component={BusinessConsoleScreen}
                options={{
                    title: 'Business console',
                    drawerIcon: ({focussed, size}) => (
                        <Icon
                            type="material"
                            name="business"
                            color={focussed ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}