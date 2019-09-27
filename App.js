import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';
import CollectionsScreen from './screens/CollectionsScreen';
import R from './styles/index';
import store from './redux/store';
import * as Font from 'expo-font';

const StackSearchNavigator = createAppContainer(createStackNavigator(
  {
    Search: SearchScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Search',
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
      name="ios-search"
      size={R.iconSize}
      color={tintColor}
    />
  ),
};

const StackFilterNavigator = createAppContainer(createStackNavigator(
  {
    FilterStack: CollectionsScreen,
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
    <MaterialIcons
      name="collections"
      size={R.iconSize}
      color={tintColor}
    />
  ),
};

const AppContainer = createAppContainer(createBottomTabNavigator(
  {
    Search: StackSearchNavigator,
    Collections: StackFilterNavigator,
  },
  {
    initialRouteName: 'Collections',
    tabBarOptions: {
      activeTintColor: R.colors.primary,
      inactiveTintColor: R.colors.light,
      style: {
        backgroundColor: R.colors.secondary,
      },
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
