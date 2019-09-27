import React from 'react';
import { Text, Button, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import ScreenContainer from '../components/presentational/ScreenContainer';
import DismissKeyboard from '../components/presentational/DismissKeyboard';
import store from '../redux/store';
import PaddingWrapper from '../components/presentational/PaddingWrapper';
import SearchBar from '../components/container/SearchBar';
import { connect } from 'react-redux';
import CardSectionList from '../components/container/CardSectionList';
import R from '../styles/index';
import { fetchRestaurantRequest } from '../redux/actions';
import TopPaddingWrapper from '../components/presentational/TopPaddingWrapper';

class SearchScreen extends React.Component {

  state = {
    q: ''
  }

  static navigationOptions = {
    headerTitle: 'Search for Restaurants',
  }

  static propTypes = {
    // fetchRestaurantRequest: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
    restaurants: PropTypes.object.isRequired,
    fetchRestaurantRequest: PropTypes.func.isRequired,
    entityType: PropTypes.string.isRequired,
    currentLocation: PropTypes.object.isRequired, 
  }

  updateSearch = q => {
    this.setState({ q })
  }

  fetchRestaurants = () => {
    this.props.fetchRestaurantRequest(this.props.currentLocation.name, this.props.entityType)
  }

  navigateToDetailsScreen = (restaurant, id) => {
    this.props.navigation.navigate('Details', { restaurant, id });
  }

  getStore = () => {
    console.log(store.getState());
  }
  
  render() {
    const { restaurants } = this.props;
    const { data, success, waiting, error } = restaurants;
    return (
      <DismissKeyboard>
        <ScreenContainer>
          <PaddingWrapper>
            <Button onPress={this.getStore} title={'try'}/>
            <TopPaddingWrapper>
              <SearchBar updateSearch={this.updateSearch} fetchFunc={this.fetchRestaurants} q={this.state.q}/>
            </TopPaddingWrapper>
            {waiting && (
              <TopPaddingWrapper>
                <ActivityIndicator size="large" color={R.colors.secondary}/>
              </TopPaddingWrapper>
            )}

            {error && 
              <Text>Error while loading data</Text>
            }

            {success && data.length >= 1 &&
              <CardSectionList navigateToDetailsScreen={this.navigateToDetailsScreen} rawData={data} />
            }
            
          </PaddingWrapper>
        </ScreenContainer>
      </DismissKeyboard>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurantData,
  entityType: state.entityType,
  currentLocation: state.currentLocation,
})

export default connect(mapStateToProps, { fetchRestaurantRequest })(SearchScreen)