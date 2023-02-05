import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList, Pressable, Image, Dimensions, StatusBar} from 'react-native'
import {colors} from '../global/style'
import HomeHeader from "../components/HomeHeader";
import { Icon } from "react-native-elements";
import CountDown from "react-native-countdown-component";
import {filterData, restaurantsData} from '../global/data'
import FoodCard from "../components/FoodCard";
import { useNavigation } from "@react-navigation/native";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function HomeScreen () {
    const navigation = useNavigation()
    const [delivery, setDelivery] = useState(true)
    const [indexCheck, setIndexCheck] = useState("0")
    return (
        <View style={styles.container}>
            <StatusBar
                translucent
                barStyle="light-content"
                backgroundColor="rgba(255,140,82,1)"
            />
            <HomeHeader navigation={navigation} />
            <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator = {true}>
                <View style={{backgroundColor:colors.cardBackground, paddingBottom: 5}}>
                    <View style={{marginTop: 10, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        <TouchableOpacity onPress={() => setDelivery(true)}>
                            <View style={{...styles.deliveryButton, backgroundColor:  delivery ? colors.buttons : colors.grey5 }}>
                                <Text style={styles.deliveryText}>Delivery</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                setDelivery(false)
                                navigation.navigate('RestaurantsMapScreen')
                            }}
                        >
                            <View style={{...styles.deliveryButton, backgroundColor:  delivery ? colors.grey5 : colors.buttons }}>
                                <Text style={styles.deliveryText}>Pick up</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.filterView}>
                    <View style={styles.addressView}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icon
                                type="material-community"
                                name="map-marker"
                                color={colors.grey1}
                                size={26}
                            />
                            <Text style={{marginLeft: 5}}>1002/21 Duong Lang</Text>
                        </View>
                        <View style={styles.clockView}>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginRight: 10}}>
                                <Icon
                                    type="material-community"
                                    name="clock-time-four"
                                    color={colors.grey1}
                                    size={26}
                                />
                                <Text style={{marginLeft: 5}}>Now</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon
                            type="material-community"
                            name="tune"
                            color={colors.grey1}
                            size={26}
                        />
                    </View>
                </View>
                <View style={styles.headerType}>
                    <Text style={styles.headerText}>Categories</Text>
                </View>
                <View>
                    <FlatList
                        style={{marginLeft: 5}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={filterData}
                        keyExtractor={(item) => item.id}
                        extraData={indexCheck}
                        renderItem={({item, index}) => (
                            <Pressable onPress={() => setIndexCheck(item.id)}>
                                <View style={indexCheck === item.id ? {...styles.smallCardSelected} : {...styles.smallCard}}>
                                    <Image
                                        style={{height: 60, width: 60, borderRadius: 30}}
                                        source={item.image}
                                    />
                                    <View>
                                        <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected} : {...styles.smallCardText}}>{item.name}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
                <View style={styles.headerType}>
                    <Text style={styles.headerText}>Free delivery now</Text>
                </View>
                <View>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
                        <Text style={{marginLeft:15, fontSize: 16, marginRight: 5}}>Options changeing in</Text>
                        <CountDown
                            until={3600}
                            size={14}
                            digitStyle={{backgroundColor: colors.lightGreen}}
                            digitTxtStyle={{color: colors.cardBackground}}
                            timeToShow={['M', 'S']}
                            timeLabels={{m: 'Min', s: 'Sec'}}
                        />
                    </View>
                    <FlatList
                        style={{marginTop: 10, marginBottom: 10}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <View style={{marginLeft: 5}}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH*0.8}
                                    restaurantName={item.restaurantName}
                                    numberOfReview={item.numberOfReview}
                                    businessAddress={item.businessAddress}
                                    farAway={item.farAway}
                                    averageReview={item.averageReview}
                                    images={item.images}
                                />
                            </View>
                        )}
                    />
                </View>
                <View style={styles.headerType}>
                    <Text style={styles.headerText}>Promotions available</Text>
                </View>
                <View>
                    <FlatList
                        style={{marginTop: 10, marginBottom: 10}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => (
                            <View style={{marginLeft: 5}}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH*0.8}
                                    restaurantName={item.restaurantName}
                                    numberOfReview={item.numberOfReview}
                                    businessAddress={item.businessAddress}
                                    farAway={item.farAway}
                                    averageReview={item.averageReview}
                                    images={item.images}
                                />
                            </View>
                        )}
                    />
                </View>
                <View style={styles.headerType}>
                    <Text style={styles.headerText}>Restaurants in your area</Text>
                </View>
                <View style={{width: SCREEN_WIDTH, paddingTop: 10}}>
                    {
                       restaurantsData.map(item => (
                            <View key={item.id} style={{paddingBottom: 20}}>
                                <FoodCard
                                    screenWidth={SCREEN_WIDTH*0.95}
                                    restaurantName={item.restaurantName}
                                    numberOfReview={item.numberOfReview}
                                    businessAddress={item.businessAddress}
                                    farAway={item.farAway}
                                    averageReview={item.averageReview}
                                    images={item.images}
                                />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            {
                delivery &&
                    <View style={styles.floatButton}>
                        <TouchableOpacity
                            onPress={() => {navigation.navigate('RestaurantsMapScreen')}} 
                        >
                            <Icon
                                name="place"
                                type="material"
                                size={32}
                                color={colors.buttons}
                            />
                            <Text style={{color: colors.grey2}}>Map</Text>
                        </TouchableOpacity>
                    </View>         
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deliveryButton: {
        paddingHorizontal: 20,
        borderRadius: 15,
        paddingVertical: 5
    },
    deliveryText: {
        marginLeft: 5,
        fontSize: 20
    },
    filterView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 10,
        marginVertical: 10,
    },
    addressView: {
        flexDirection: 'row',
        backgroundColor: colors.grey5,
        borderRadius: 15,
        justifyContent: 'center',
        paddingVertical: 6,
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    clockView: {
        backgroundColor: colors.cardBackground,
        borderRadius: 15,
        marginLeft: 20,
        paddingHorizontal: 5,
        paddingVertical: 3
    },
    headerType: {
        backgroundColor: colors.grey5,
        paddingVertical: 3,
        marginTop: 10
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        color: colors.grey2
    },
    smallCard: {
        borderRadius: 30,
        backgroundColor: colors.grey5,
        justifyContent: "center",
        alignContent: 'center',
        padding: 10,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardSelected: {
        borderRadius: 30,
        backgroundColor: colors.buttons,
        justifyContent: "center",
        alignContent: 'center',
        padding: 10,
        width: 80,
        margin: 10,
        height: 100
    },
    smallCardText: {
        fontWeight: "bold",
        color: colors.grey2,
        fontSize: 12,
        textAlign: 'center'
    },
    smallCardTextSelected: {
        fontWeight: "bold",
        color: colors.cardBackground,
        fontSize: 12,
        textAlign: 'center'
    },
    floatButton: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        backgroundColor: '#fff',
        elevation: 10,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center'
    }
})