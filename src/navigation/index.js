import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from '../screens/HomeScreen';
import BookingDetailScreen from '../screens/BookingDetailScreen';
import BookingsScreen from '../screens/BookingsScreen';
import BookPackageScreen from '../screens/BookPackageScreen';
import CoachProfileScreen from '../screens/CoachProfileScreen';
import PackagesScreen from '../screens/PackagesScreen';
import ProfileScreen from "../screens/ProfileScreen";
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Stack = createStackNavigator();

const RootNavigator = () => {

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="HomeTabs" component={HomeTabs}/>        
        </Stack.Navigator>
    );
};

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {

    return (
        <Tab.Navigator barStyle={{backgroundColor: 'white'}}>
            <Tab.Screen 
                name="Search" 
                component={HomeStackNavigator} 
                options={{
                    tabBarIcon: ({color}) => <FontAwesome5 name="search" size={24} color={color} />,
                }}
            />
            <Tab.Screen 
                name="Bookings" 
                component={OrdersStackNavigator} 
                options={{
                    tabBarIcon: ({color}) => <MaterialIcons name="list-alt" size={24} color={color} />,
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={ProfileStackNavigator} 
                options={{
                    tabBarIcon: ({color}) => <FontAwesome5 name="user-alt" size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
};

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Search Coaches" component={HomeScreen} />
            <HomeStack.Screen name={'Coach Profile'} component={CoachProfileScreen} options={{headerShown: false}}/>
            <HomeStack.Screen name="Packages" component={PackagesScreen} />
            <HomeStack.Screen name="Book Package" component={BookPackageScreen} />
        </HomeStack.Navigator>   
    );
};

const OrdersStack = createStackNavigator();

const OrdersStackNavigator = () => {
    return (
        <OrdersStack.Navigator>
            <OrdersStack.Screen name="Your Bookings" component={BookingsScreen} />
            <OrdersStack.Screen name={'Booking'} component={BookingDetailScreen} options={{headerShown: false}}/>
        </OrdersStack.Navigator>   
    );
};
const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Your Profile" component={ProfileScreen} />
        </ProfileStack.Navigator>   
    );
};


export default RootNavigator;