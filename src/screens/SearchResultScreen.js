import React from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import SearchResultCard from '../components/SearchResultCard'
import { restaurantsData } from "../global/data";
import { colors } from "../global/style";

const SCREEN_WIDTH = Dimensions.get('window').width

export default function SearchResultScreen({navigation, route}) {
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    style={{backgroundColor: colors.backgroundColor}}
                    data={restaurantsData}
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={
                        <View>
                            <Text style={styles.listHeader}>{restaurantsData.length} Results for {route.params.item}</Text>
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <SearchResultCard
                            screenWidth={SCREEN_WIDTH}
                            images={item.images}
                            averageReview={item.averageReview}
                            numberOfReview={item.numberOfReview}
                            restaurantName={item.restaurantName}
                            farAway={item.farAway}
                            bussinessAddress={item.businessAddress}
                            productData={item.productData}
                            onPressRestaurantCard={() => {navigation.navigate('RestaurantHomeScreen', {id: index, restaurant: item.restaurantName})}}
                        />
                    )}
                />
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listHeader: {
        color: colors.grey1,
        fontSize: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontWeight: 'bold'
    }
})