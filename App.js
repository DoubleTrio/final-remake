import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RestaurantScreen from './screens/RestaurantScreen';
import DetailsScreen from './screens/DetailsScreen';
import FiltersScreen from './screens/FiltersScreen';
import R from './styles/index';
import store from './redux/store';
import * as Font from 'expo-font';

const StackSearchNavigator = createAppContainer(createStackNavigator(
  {
    Restaurants: RestaurantScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Restaurants',
    defaultNavigationOptions: {
      headerTintColor: R.colors.primary,
      headerStyle: {
        backgroundColor: R.colors.secondary,
      },
      headerTitleStyle: {
        fontSize: R.fontSizes.header,
      },
    },
  },
));

StackSearchNavigator.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons
      name='md-restaurant'
      size={R.iconSize * 1.3}
      color={tintColor}
    />
  ),
};

const StackFilterNavigator = createAppContainer(createStackNavigator(
  {
    FilterStack: FiltersScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: R.colors.secondary,
      },
      headerTintColor: R.colors.primary,
      headerTitleStyle: {
        fontSize: R.fontSizes.header,
      },
    },
  },
));

StackFilterNavigator.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Ionicons
      name="ios-options"
      size={R.iconSize * 1.3}
      color={tintColor}
    />
  ),
};

const AppContainer = createAppContainer(createBottomTabNavigator(
  {
    Restaurants: StackSearchNavigator,
    Filters: StackFilterNavigator,
  },
  {
    initialRouteName: 'Restaurants',
    tabBarOptions: {
      activeTintColor: R.colors.primary,
      inactiveTintColor: R.colors.light,
      style: {
        backgroundColor: R.colors.secondary,
      },
      keyboardHidesTabBar: false,
      swipeEnabled: false,
      animationEnabled: false,
      initialLayout: undefined,
    },
  },
));

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        'ralewayBlack': require('./assets/fonts/Raleway-Black.ttf'),
        'ralewayLight': require('./assets/fonts/Raleway-Light.ttf'),
      })
    } 
    catch(error) {
      console.log('error with loading font')
    }
    finally {
      console.log('font loaded!')
      this.setState({fontLoaded: true})
    }
  }

  render() {
    return (
      <Provider store={store}>
        {this.state.fontLoaded &&
          <AppContainer />
        }
      </Provider>
    );
  }
}
