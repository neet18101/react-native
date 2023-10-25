import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { COLORS } from '../theme/theme';
import { BlurView } from '@react-native-community/blur';
import HomeScreen from '../screens/HomeScreen';
import FavoriateScreen from '../screens/FavoriateScreen';
import CartScreen from '../screens/CartScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import CustomIcons from '../components/CustomIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: styles.tabBarStyle,
            tabBarBackground: () => (
                <BlurView overlayColor='' blurAmount={2} style={styles.BlurViewStyles} />
            )

        }}>
            <Tab.Screen name="home" component={HomeScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomIcons name='home' size={35} color={focused ? COLORS.primaryRedHex : COLORS.primaryWhiteHex} />
                )
            }}></Tab.Screen>
            <Tab.Screen name="Cart" component={CartScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomIcons name='cart' size={35} color={focused ? COLORS.primaryRedHex : COLORS.primaryWhiteHex} />
                )
            }}  ></Tab.Screen>
            <Tab.Screen name="Favorite" component={FavoriateScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomIcons name='like' size={35} color={focused ? COLORS.primaryRedHex : COLORS.primaryWhiteHex} />
                )
            }}></Tab.Screen>
            <Tab.Screen name="History" component={OrderHistoryScreen} options={{
                tabBarIcon: ({ focused, color, size }) => (
                    <CustomIcons name='bell' size={35} color={focused ? COLORS.primaryRedHex : COLORS.primaryWhiteHex} />
                )
            }}></Tab.Screen>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        // backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent',
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
})
export default TabNavigator
